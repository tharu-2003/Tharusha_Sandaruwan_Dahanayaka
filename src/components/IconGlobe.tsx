import { useEffect, useRef, useState } from "react";

interface IconGlobeProps {
  icons: string[];
  speed?: number;
}

function useResponsiveSize() {
  const [size, setSize] = useState(() => {
    if (typeof window === "undefined") return 400;
    const w = window.innerWidth;
    if (w < 480) return 320;
    if (w < 768) return 420;
    if (w < 1024) return 560;
    return 700;
  });

  useEffect(() => {
    function handleResize() {
      const w = window.innerWidth;
      if (w < 480) setSize(320);
      else if (w < 768) setSize(420);
      else if (w < 1024) setSize(560);
      else setSize(700);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

export function IconGlobe({ icons, speed = 1 }: IconGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Rotation state
  const rotRef = useRef({ x: 0.4, y: 0 }); // current rotation (tilt + yaw)
  const velRef = useRef({ x: 0, y: 0 });    // velocity for inertia
  const dragRef = useRef({
    active: false,
    lastX: 0,
    lastY: 0,
    movedX: 0,
    movedY: 0,
  });

  const size = useResponsiveSize();

  // Preload images
  useEffect(() => {
    imagesRef.current = icons.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });
  }, [icons]);

  // Canvas draw loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const R = size * 0.38;
    const count = icons.length;

    // Fibonacci lattice positions
    const positions: { lat: number; lon: number }[] = [];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const theta = goldenAngle * i;
      positions.push({
        lat: Math.asin(Math.max(-1, Math.min(1, y))),
        lon: theta,
      });
    }

    const baseIconRatio = size < 400 ? 0.14 : size < 600 ? 0.12 : 0.11;
    const AUTO_SPEED = 0.004 * speed;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, size, size);

      const drag = dragRef.current;
      const vel = velRef.current;
      const rot = rotRef.current;

      if (drag.active) {
        // While dragging — no auto rotation, no inertia
      } else {
        // Apply inertia
        rot.y += vel.y;
        rot.x += vel.x;

        // Dampen velocity
        vel.y *= 0.92;
        vel.x *= 0.92;

        // Clamp X tilt so it doesn't flip upside down
        rot.x = Math.max(-Math.PI / 2.2, Math.min(Math.PI / 2.2, rot.x));

        // Auto rotate when velocity is low
        if (Math.abs(vel.y) < 0.001) {
          rot.y += AUTO_SPEED;
        }
      }

      const rotY = rot.y;
      const rotX = rot.x;

      // Project icons
      const projected: {
        x: number; y: number; z: number;
        idx: number; scale: number; alpha: number;
      }[] = [];

      for (let i = 0; i < count; i++) {
        const { lat, lon } = positions[i];

        let x0 = Math.cos(lat) * Math.cos(lon);
        let y0 = Math.sin(lat);
        let z0 = Math.cos(lat) * Math.sin(lon);

        // Rotate Y (yaw)
        const x1 = x0 * Math.cos(rotY) + z0 * Math.sin(rotY);
        const z1 = -x0 * Math.sin(rotY) + z0 * Math.cos(rotY);
        const y1 = y0;

        // Rotate X (tilt/pitch)
        const y2 = y1 * Math.cos(rotX) - z1 * Math.sin(rotX);
        const z2 = y1 * Math.sin(rotX) + z1 * Math.cos(rotX);
        const x2 = x1;

        const depth = (z2 + 1) / 2;

        projected.push({
          x: cx + x2 * R,
          y: cy - y2 * R,
          z: z2,
          idx: i,
          scale: 0.35 + depth * 0.65,
          alpha: 0.25 + depth * 0.75,
        });
      }

      // Painter's algorithm
      projected.sort((a, b) => a.z - b.z);

      for (const p of projected) {
        const img = imagesRef.current[p.idx];
        if (!img || !img.complete) continue;

        const iconSize = size * baseIconRatio * p.scale;
        const half = iconSize / 2;

        ctx.save();
        ctx.globalAlpha = p.alpha;

        if (p.z > 0) {
          ctx.shadowColor = "rgba(237,106,62,0.4)";
          ctx.shadowBlur = 6 * p.scale;
        }

        ctx.drawImage(img, p.x - half, p.y - half, iconSize, iconSize);
        ctx.restore();
      }

      frameRef.current = requestAnimationFrame(draw);
    }

    cancelAnimationFrame(frameRef.current);
    draw();
    return () => cancelAnimationFrame(frameRef.current);
  }, [size, speed, icons.length]);

  // ── Mouse events ──
  function onMouseDown(e: React.MouseEvent) {
    dragRef.current = {
      active: true,
      lastX: e.clientX,
      lastY: e.clientY,
      movedX: 0,
      movedY: 0,
    };
    velRef.current = { x: 0, y: 0 };
  }

  function onMouseMove(e: React.MouseEvent) {
    const drag = dragRef.current;
    if (!drag.active) return;

    const dx = e.clientX - drag.lastX;
    const dy = e.clientY - drag.lastY;

    drag.movedX += dx;
    drag.movedY += dy;

    const sensitivity = 0.007;
    rotRef.current.y += dx * sensitivity;
    rotRef.current.x += dy * sensitivity;
    rotRef.current.x = Math.max(-Math.PI / 2.2, Math.min(Math.PI / 2.2, rotRef.current.x));

    // Store velocity for inertia
    velRef.current = {
      y: dx * sensitivity,
      x: dy * sensitivity,
    };

    drag.lastX = e.clientX;
    drag.lastY = e.clientY;
  }

  function onMouseUp() {
    dragRef.current.active = false;
  }

  // ── Touch events ──
  function onTouchStart(e: React.TouchEvent) {
    const t = e.touches[0];
    dragRef.current = {
      active: true,
      lastX: t.clientX,
      lastY: t.clientY,
      movedX: 0,
      movedY: 0,
    };
    velRef.current = { x: 0, y: 0 };
  }

  function onTouchMove(e: React.TouchEvent) {
    e.preventDefault();
    const drag = dragRef.current;
    if (!drag.active) return;

    const t = e.touches[0];
    const dx = t.clientX - drag.lastX;
    const dy = t.clientY - drag.lastY;

    const sensitivity = 0.007;
    rotRef.current.y += dx * sensitivity;
    rotRef.current.x += dy * sensitivity;
    rotRef.current.x = Math.max(-Math.PI / 2.2, Math.min(Math.PI / 2.2, rotRef.current.x));

    velRef.current = {
      y: dx * sensitivity,
      x: dy * sensitivity,
    };

    drag.lastX = t.clientX;
    drag.lastY = t.clientY;
  }

  function onTouchEnd() {
    dragRef.current.active = false;
  }

  return (
    <canvas
      ref={canvasRef}
      style={{ width: size, height: size, cursor: "grab" }}
      className="touch-none select-none"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    />
  );
}