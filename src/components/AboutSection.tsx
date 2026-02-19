import { Link } from "react-router-dom";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { DashboardData } from "../assets/datas/assets";
import CVButton from "./CVButton";
import DownloadCvPopup from "./DownloadCvPopup";

// ── Counting Number Component ──────────────────────────────────────────────
function CountingNumber({ target, prefix = "" }: { target: number; prefix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${prefix}${Math.round(v)}`);


  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration: 4.8,
        ease: [0.16, 1, 0.3, 1], // expo out — fast start, slow finish
      });
      return controls.stop;
    }
  }, [isInView, target, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

// ── Data ───────────────────────────────────────────────────────────────────
const stats = [
  {
    value: DashboardData.yearsOfExperience,
    label: "YEARS OF",
    sublabel: "EXPERIENCE",
  },
  {
    value: DashboardData.projectsCount,
    label: "PROJECTS",
    sublabel: "COMPLETED",
  },
  {
    value: DashboardData.technologiesCount,
    label: "MODERN",
    sublabel: "TECHNOLOGIES",
  },
];

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

// ── Component ──────────────────────────────────────────────────────────────
export function AboutSection() {

  const [isCvOpen, setIsCvOpen] = useState(false);


  return (
    <section className="py-8 md:py-1">

      {/* ── Title: outer slide → h1 from left → h2 from right ── */}
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8 md:mb-12"
      >
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tighter leading-none"
        >
          SOFTWARE
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl ghost-text font-black text-[#2a2a20] tracking-tight leading-tight uppercase"
        >
          Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-400 text-xs sm:text-sm md:text-base max-w-lg mt-4 md:mt-6 leading-relaxed"
        >
          Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
        </motion.p>
      </motion.div>

      {/* ── Stats & CV Button ── */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 mb-12 md:mb-20"
      >
        {/* Stats */}
        <div className="flex items-start gap-6 sm:gap-8 md:gap-12 lg:gap-16 overflow-x-auto no-scrollbar pb-1">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group"
            >
              {/* Counting number */}
              <div className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 group-hover:text-[#ed6a3e] transition-colors duration-300 tabular-nums">
                <CountingNumber target={stat.value} prefix="+" />
              </div>

              <div className="space-y-0.5 sm:space-y-1">
                <div className="text-[10px] sm:text-[11px] lg:text-xs text-gray-400 font-bold tracking-[0.2em] uppercase leading-none">
                  {stat.label}
                </div>
                <div className="text-[9px] sm:text-[10px] lg:text-[11px] text-gray-600 font-medium tracking-widest uppercase leading-none">
                  {stat.sublabel}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CV Button */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full m-4 lg:w-auto shrink-0"
        >
          <CVButton onClick={() => setIsCvOpen(true)} />
        </motion.div>

        <DownloadCvPopup 
          isOpen={isCvOpen} 
          onClose={() => setIsCvOpen(false)} 
        />
      </motion.div>

      {/* ── Skill Cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

        {/* Orange Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <Link
            to="/experience"
            className="relative block overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-44 sm:h-52 bg-[#ed6a3e] group transition-all duration-300"
          >
            {/* Shine Effect */}
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12"
            />

            <motion.div
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 opacity-30"
            >
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="orange-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M0,50 L50,0 L100,50 L50,100 Z" stroke="rgba(0,0,0,0.15)" fill="none" strokeWidth="2" />
                    <circle cx="50" cy="50" r="30" stroke="rgba(0,0,0,0.1)" fill="none" strokeWidth="1.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#orange-pattern)" />
              </svg>
            </motion.div>

            <div className="relative z-10 flex flex-col h-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ rotate: 15 }}
                className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4"
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight mb-auto"
              >
                COLLABORATIONS,<br /> EXPERIENCE
              </motion.h3>

              <div className="flex justify-end">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-white/60 transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Lime Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          
          <Link
            to="/projects"
            className="relative block overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-44 sm:h-52 bg-[#c4f445] group transition-all duration-300"
          >
            {/* Shine Effect */}
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12"
            />

            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute inset-0 opacity-25"
            >
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="lime-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="40" x2="80" y2="40" stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
                    <line x1="40" y1="0" x2="40" y2="80" stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
                    <circle cx="40" cy="40" r="25" stroke="rgba(0,0,0,0.1)" fill="none" strokeWidth="1.5" />
                    <path d="M20,40 L40,20 L60,40 L40,60 Z" stroke="rgba(0,0,0,0.12)" fill="none" strokeWidth="1.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#lime-pattern)" />
              </svg>
            </motion.div>

            <div className="relative z-10 flex flex-col h-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ scale: 1.2 }}
                className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4"
              >
                <svg viewBox="0 0 24 24" fill="#1a1a12" className="w-full h-full">
                  <path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z" />
                </svg>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl font-bold text-[#1a1a12] leading-tight mb-auto"
              >
                JAVA, REACT,<br />WORDPRESS, PYTHON
              </motion.h3>

              <div className="flex justify-end">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="w-10 h-10 rounded-full border-2 border-[#1a1a12]/30 flex items-center justify-center group-hover:border-[#1a1a12]/60 transition-colors"
                >
                  <svg className="w-5 h-5 text-[#1a1a12]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}