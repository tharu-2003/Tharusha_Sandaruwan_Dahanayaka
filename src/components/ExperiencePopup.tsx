import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export interface Experience {
    _id: string; 
    role: string;
    company: string;
    title: string;
    period: string;
    description: string;
    image: string[];
    skills: string[];
    location: string;
    industry: string;
    mode: "Work" | "Education";
    priority: "High" | "Medium" | "Low"; 
    workModeStatements: string; 
    links: string[]; 
}

interface ExperiencePopupProps {
  experience: Experience | null;
  isOpen: boolean;
  onClose: () => void;
}

type PriorityLevel = "High" | "Medium" | "Low";

interface PriorityTheme {
  primary: string;
  secondary: string;
  glow: string;
  gradient: string;
  orbGradient: string;
  badge: string;
  text: string;
  hover: string;
  button: string;
  hoverText: string;
  scanLine: string;
  particle: string;
  corner: string;
  topBorder: string;
  skillHover: string;
  skillBorder: string;
  dot: string;
}

export const ExperiencePopup = ({ experience, isOpen, onClose }: ExperiencePopupProps) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    if (isOpen) setCurrentImgIndex(0);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && experience?.image && experience.image.length > 1) {
      const interval = setInterval(() => {
        setCurrentImgIndex((prev) => (prev + 1) % (experience?.image?.length || 1));
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isOpen, experience?.image]);

  if (!experience) return null;

  const priorityThemes: Record<PriorityLevel, PriorityTheme> = {
    High: {
      primary: '#ef4444', secondary: '#dc2626', glow: 'rgba(239, 68, 68, 0.8)',
      gradient: 'from-red-500/30 to-transparent', orbGradient: 'from-red-500/30',
      badge: 'from-red-500/20 to-red-500/10 border-red-500/30 text-red-500',
      text: 'from-red-500 to-red-500/60', hover: 'from-red-500 to-red-500/60',
      button: 'from-red-500 to-red-500/80', hoverText: 'group-hover:text-red-500',
      scanLine: 'via-red-500/5', particle: 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]',
      corner: 'border-red-500/40', topBorder: 'via-red-500/50',
      skillHover: 'from-red-500/20', skillBorder: 'group-hover:border-red-500/50',
      dot: 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]',
    },
    Medium: {
      primary: '#f59e0b', secondary: '#d97706', glow: 'rgba(245, 158, 11, 0.8)',
      gradient: 'from-amber-500/30 to-transparent', orbGradient: 'from-amber-500/30',
      badge: 'from-amber-500/20 to-amber-500/10 border-amber-500/30 text-amber-500',
      text: 'from-amber-500 to-amber-500/60', hover: 'from-amber-500 to-amber-500/60',
      button: 'from-amber-500 to-amber-500/80', hoverText: 'group-hover:text-amber-500',
      scanLine: 'via-amber-500/5', particle: 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]',
      corner: 'border-amber-500/40', topBorder: 'via-amber-500/50',
      skillHover: 'from-amber-500/20', skillBorder: 'group-hover:border-amber-500/50',
      dot: 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]',
    },
    Low: {
      primary: '#10b981', secondary: '#059669', glow: 'rgba(16, 185, 129, 0.8)',
      gradient: 'from-emerald-500/30 to-transparent', orbGradient: 'from-emerald-500/30',
      badge: 'from-emerald-500/20 to-emerald-500/10 border-emerald-500/30 text-emerald-500',
      text: 'from-emerald-500 to-emerald-500/60', hover: 'from-emerald-500 to-emerald-500/60',
      button: 'from-emerald-500 to-emerald-500/80', hoverText: 'group-hover:text-emerald-500',
      scanLine: 'via-emerald-500/5', particle: 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]',
      corner: 'border-emerald-500/40', topBorder: 'via-emerald-500/50',
      skillHover: 'from-emerald-500/20', skillBorder: 'group-hover:border-emerald-500/50',
      dot: 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]',
    }
  };

  const theme = priorityThemes[experience.priority as PriorityLevel] || priorityThemes.High;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 lg:p-12">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-linear-to-br from-black via-black/95 to-black/90 backdrop-blur-2xl" />

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.08, 0.03] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} className={`absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial ${theme.orbGradient} to-transparent rounded-full blur-3xl`} />
            <motion.div animate={{ scale: [1.3, 1, 1.3], opacity: [0.03, 0.08, 0.03] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-radial from-[#828277]/30 to-transparent rounded-full blur-3xl" />
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} transition={{ type: "spring", damping: 25, stiffness: 300 }} className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto no-scrollbar bg-[#0a0a0a] border border-[#2a2a20] rounded-[2.5rem] shadow-2xl">
            <div className={`absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 ${theme.corner} rounded-tl-[2.5rem] pointer-events-none`} />
            <div className={`absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 ${theme.corner} rounded-br-[2.5rem] pointer-events-none`} />
            <div className={`absolute inset-0 rounded-[2.5rem] bg-linear-to-br ${theme.gradient} via-transparent ${theme.gradient} opacity-60 blur-2xl pointer-events-none`} />
            
            <div className="relative">
              <motion.button onClick={onClose} whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.95 }} className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-linear-to-br from-[#2f2f28] to-[#1a1a15] border border-[#828277] flex items-center justify-center text-white transition-all duration-300 shadow-lg group">
                <div className={`absolute inset-0 rounded-full bg-linear-to-br ${theme.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 relative z-10"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </motion.button>

              <div className="flex flex-col lg:flex-row min-h-100">
                {/* ── IMAGE SCROLLING PART ── */}
                <div className="w-full lg:w-[60%] h-72 sm:h-96 lg:h-137.5 overflow-hidden relative border-b lg:border-b-0 lg:border-r border-[#2a2a20] bg-black shrink-0">
                  <AnimatePresence mode='wait'>
                    <motion.img
                      key={currentImgIndex}
                      src={experience.image?.[currentImgIndex]}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.8 }}
                      className="w-full h-full object-cover object-center"
                    />
                  </AnimatePresence>
                  
                  {/* Indicators (Dots) */}
                  {experience.image && experience.image.length > 1 && (
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                      {experience.image.map((_, idx) => (
                        <div key={idx} className={`h-1 rounded-full transition-all duration-300 ${idx === currentImgIndex ? "w-6 bg-[#ed6a3e]" : "w-2 bg-white/20"}`} />
                      ))}
                    </div>
                  )}

                  <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent lg:hidden" />
                  <motion.div animate={{ y: ['-100%', '200%'] }} transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 1 }} className={`absolute inset-x-0 h-32 bg-linear-to-b from-transparent ${theme.scanLine} to-transparent pointer-events-none`} />
                  <div className="absolute top-0 left-0 w-32 h-32 opacity-20"><div className="grid grid-cols-8 gap-1 h-full">{[...Array(64)].map((_, i) => (<motion.div key={i} animate={{ opacity: [0, 0.5, 0] }} transition={{ duration: 2, delay: i * 0.02, repeat: Infinity }} className="w-full h-full rounded-sm" style={{ backgroundColor: theme.primary }} />))}</div></div>
                  {[...Array(8)].map((_, i) => (<motion.div key={i} animate={{ y: [0, -30, 0], opacity: [0, 0.4, 0] }} transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 3 }} className={`absolute w-1.5 h-1.5 ${theme.particle} rounded-full`} style={{ left: `${10 + Math.random() * 80}%`, top: `${10 + Math.random() * 80}%` }} />))}
                </div>

                {/* ── ENHANCED RIGHT CONTENT PART ── */}
                <div className="w-full lg:w-[40%] p-6 lg:p-8 flex flex-col justify-center bg-linear-to-br from-white/5 to-transparent relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle, ${theme.primary} 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
                  </div>
                  
                  {/* Floating Decorative Elements */}
                  <motion.div
                    animate={{ 
                      y: [0, -15, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-6 right-6 w-16 h-16 rounded-full border border-white/5 opacity-30"
                  />
                  <motion.div
                    animate={{ 
                      y: [0, 20, 0],
                      rotate: [0, -5, 0]
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-8 left-6 w-12 h-12 rounded-full border border-white/5 opacity-20"
                  />

                  <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="relative z-10 space-y-4">
                    
                    {/* Enhanced Period Badge */}
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-6 h-6 rounded-full border-2 border-dashed opacity-30"
                        style={{ borderColor: theme.primary }}
                      />
                      <motion.span 
                        whileHover={{ scale: 1.05, x: 4 }} 
                        className={`relative inline-block px-4 py-2 rounded-full bg-linear-to-r ${theme.badge} text-[10px] font-black tracking-[0.2em] uppercase overflow-hidden group cursor-default shadow-lg`}
                      >
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                        <span className="relative flex items-center gap-2">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {experience.period}
                        </span>
                      </motion.span>
                    </div>

                    {/* Enhanced Title with Decorative Line */}
                    <div className="space-y-2">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="h-0.5 w-12 rounded-full origin-left"
                        style={{ background: `linear-gradient(to right, ${theme.primary}, transparent)` }}
                      />
                      <motion.h2 
                        whileHover={{ x: 4 }}
                        className="text-xl sm:text-2xl lg:text-3xl font-black text-white uppercase tracking-tighter leading-tight relative"
                        style={{ textShadow: `0 0 12px ${theme.glow}` }}
                      >
                        {experience.title}
                        {/* Subtle underline decoration */}
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ delay: 0.6, duration: 0.8 }}
                          className="absolute -bottom-0.5 left-0 h-px bg-linear-to-r from-white/20 to-transparent"
                        />
                      </motion.h2>
                    </div>

                    {/* Enhanced Role with Icon */}
                    <motion.div 
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-2.5 py-3 px-3 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm"
                    >
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${theme.primary}20, transparent)` }}>
                        <svg className="w-4 h-4" style={{ color: theme.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-[8px] uppercase tracking-widest text-gray-600 font-bold mb-0.5">Position</p>
                        <p className={`text-transparent bg-clip-text bg-linear-to-r ${theme.text} text-sm sm:text-base font-bold tracking-tight`}>
                          {experience.role}
                        </p>
                      </div>
                    </motion.div>
                    
                    {/* Enhanced Company Section */}
                    <motion.div 
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-2.5 pb-4 border-b relative"
                      style={{ borderColor: `${theme.primary}20` }}
                    >
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/10">
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-[8px] uppercase tracking-widest text-gray-600 font-bold mb-0.5">Organization</p>
                        <p className="text-xs sm:text-sm text-white font-semibold">
                          {experience.company}
                        </p>
                      </div>
                      {/* Decorative corner accent */}
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: theme.primary, boxShadow: `0 0 10px ${theme.glow}` }}
                      />
                    </motion.div>
                    
                    {/* Enhanced Mode & Priority Section */}
                    <div className="flex gap-3 pt-4 relative">
                      <div className={`absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent ${theme.topBorder} to-transparent`} />
                      
                      {/* Mode Card */}
                      <motion.div 
                        whileHover={{ y: -4, scale: 1.02 }} 
                        className="flex-1 group cursor-default"
                      >
                        <div className="p-3 rounded-lg bg-linear-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm space-y-2">
                          <div className="flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                            <div className="text-[8px] uppercase tracking-[0.2em] text-gray-500 font-bold">Mode</div>
                          </div>
                          <div className="text-lg sm:text-xl font-black bg-linear-to-br from-white to-gray-400 bg-clip-text text-transparent">
                            {experience.mode || "Work"}
                          </div>
                        </div>
                      </motion.div>
                      
                      {/* Divider */}
                      <div className="w-px bg-linear-to-b from-transparent via-white/20 to-transparent self-stretch" />
                      
                      {/* Priority Card */}
                      <motion.div 
                        whileHover={{ y: -4, scale: 1.02 }} 
                        className="flex-1 group cursor-default"
                      >
                        <div className="p-3 rounded-lg bg-linear-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm space-y-2 relative overflow-hidden">
                          {/* Glow effect */}
                          <motion.div
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 blur-xl"
                            style={{ background: `radial-gradient(circle at center, ${theme.primary}40, transparent)` }}
                          />
                          <div className="relative flex items-center gap-1.5">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            >
                              <svg className="w-3.5 h-3.5" style={{ color: theme.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </motion.div>
                            <div className="text-[8px] uppercase tracking-[0.2em] text-gray-500 font-bold">Priority</div>
                          </div>
                          <div className="relative text-lg sm:text-xl font-black" style={{ color: theme.primary, textShadow: `0 0 10px ${theme.glow}` }}>
                            {experience.priority || "High"}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-12 border-t border-[#2a2a20] relative">
              <div className={`absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent ${theme.topBorder} to-transparent`} />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="lg:col-span-2 space-y-10">
                  <section>
                    <div className="flex items-center gap-3 mb-6"><motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className={`w-2 h-2 rounded-full ${theme.dot}`} /><h3 className="text-gray-500 text-[11px] font-black uppercase tracking-[0.3em]">Role Overview</h3><div className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent" /></div>
                    <div className="relative p-6 rounded-2xl bg-linear-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm mb-6"><div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl" style={{ background: `linear-gradient(to bottom, ${theme.primary}, transparent)` }} /><p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium pl-4">{experience.workModeStatements}</p></div>
                    <div className="relative p-6 rounded-2xl bg-linear-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm"><div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-[#828277] to-transparent rounded-l-2xl" /><p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium pl-4">{experience.description}</p></div>
                  </section>
                  <section><div className="flex items-center gap-3 mb-6"><h3 className="text-gray-500 text-[11px] font-black uppercase tracking-[0.3em]">Core Competencies</h3><div className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent" /></div><div className="flex flex-wrap gap-3">{experience.skills.map((skill: string, i: number) => (<motion.span key={i} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4 + i * 0.05 }} whileHover={{ scale: 1.05, y: -2 }} className="group relative px-5 py-3 rounded-xl bg-linear-to-br from-[#1a1a15] to-[#0f0f0c] border border-[#2a2a20] text-gray-400 text-[11px] font-bold uppercase tracking-widest cursor-default overflow-hidden"><div className={`absolute inset-0 bg-linear-to-r ${theme.skillHover} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} /><div className={`absolute inset-0 border border-transparent ${theme.skillBorder} rounded-xl transition-all duration-300`} /><span className="relative group-hover:text-white transition-colors">{skill}</span></motion.span>))}</div></section>
                </motion.div>

                {/* ── LINKS BUTTON PART ── */}
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="space-y-6">
                  <div className="flex items-center gap-3 mb-4"><h3 className="text-gray-500 text-[11px] font-black uppercase tracking-[0.3em]">Verification</h3><div className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent" /></div>
                  <div className="flex flex-col gap-4">
                    {experience.links && experience.links.map((link, idx) => (
                      <motion.a
                        key={idx}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative flex items-center justify-between w-full px-6 py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest group overflow-hidden shadow-lg"
                      >
                        <div className={`absolute inset-0 bg-linear-to-r ${theme.button} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                        <span className="relative z-10 group-hover:text-white transition-colors">
                          {link.includes('facebook') ? 'Watch on Facebook' : link.includes('youtube') ? 'Watch on YouTube' : `View Link ${idx + 1}`}
                        </span>
                        <motion.svg className="w-5 h-5 relative z-10 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </motion.svg>
                      </motion.a>
                    ))}
                  </div>

                  <div className="pt-8 space-y-6 p-6 bg-linear-to-br from-white/5 to-transparent border border-white/10 rounded-2xl">
                    <div className="flex items-center justify-between group"><span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-500" />Industry</span><span className={`text-white text-xs font-bold ${theme.hoverText} transition-colors`}>{experience.industry}</span></div>
                    <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent" /><div className="flex items-center justify-between group"><span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-500" />Location</span><span className={`text-white text-xs font-bold ${theme.hoverText} transition-colors`}>{experience.location}</span></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};