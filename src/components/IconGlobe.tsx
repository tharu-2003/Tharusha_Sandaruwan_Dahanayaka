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
  const angleRef = useRef<number>(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  const size = useResponsiveSize();

  useEffect(() => {
    imagesRef.current = icons.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });
  }, [icons]);

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

    // Fibonacci lattice
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

    const TILT = 0.4;
    const baseIconRatio = size < 400 ? 0.14 : size < 600 ? 0.12 : 0.11;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, size, size);

      angleRef.current += 0.004 * speed;
      const rotY = angleRef.current;

      const projected: {
        x: number; y: number; z: number;
        idx: number; scale: number; alpha: number;
      }[] = [];

      for (let i = 0; i < count; i++) {
        const { lat, lon } = positions[i];

        const x0 = Math.cos(lat) * Math.cos(lon);
        const y0 = Math.sin(lat);
        const z0 = Math.cos(lat) * Math.sin(lon);

        // Rotate Y
        const x1 = x0 * Math.cos(rotY) + z0 * Math.sin(rotY);
        const z1 = -x0 * Math.sin(rotY) + z0 * Math.cos(rotY);
        const y1 = y0;

        // Tilt X
        const y2 = y1 * Math.cos(TILT) - z1 * Math.sin(TILT);
        const z2 = y1 * Math.sin(TILT) + z1 * Math.cos(TILT);
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

  return (
    <canvas
      ref={canvasRef}
      style={{ width: size, height: size }}
      className="pointer-events-none"
    />
  );
}