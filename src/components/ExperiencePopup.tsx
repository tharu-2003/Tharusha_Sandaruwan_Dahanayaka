import { motion, AnimatePresence } from 'framer-motion';

export interface Experience {
    _id: string; 
    role: string;
    company: string;
    period: string;
    description: string;
    image: string;
    skills: string[];
    location: string;
    industry: string;
    mode: "Work" | "Education";
    priority: "High" | "Medium" | "Low"; 
    workModeStatements: string; 
    links: string; 
}

interface ExperiencePopupProps {
  experience: Experience;
  isOpen: boolean;
  onClose: () => void;
}

// Priority type definition
type PriorityLevel = "High" | "Medium" | "Low";

// Theme interface
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
  if (!experience) return null;

  // Priority-based color themes with proper typing
  const priorityThemes: Record<PriorityLevel, PriorityTheme> = {
    High: {
      primary: '#ef4444', // Red
      secondary: '#dc2626',
      glow: 'rgba(239, 68, 68, 0.8)',
      gradient: 'from-red-500/30 to-transparent',
      orbGradient: 'from-red-500/30',
      badge: 'from-red-500/20 to-red-500/10 border-red-500/30 text-red-500',
      text: 'from-red-500 to-red-500/60',
      hover: 'from-red-500 to-red-500/60',
      button: 'from-red-500 to-red-500/80',
      hoverText: 'group-hover:text-red-500',
      scanLine: 'via-red-500/5',
      particle: 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]',
      corner: 'border-red-500/40',
      topBorder: 'via-red-500/50',
      skillHover: 'from-red-500/20',
      skillBorder: 'group-hover:border-red-500/50',
      dot: 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]',
    },
    Medium: {
      primary: '#f59e0b', // Amber/Orange
      secondary: '#d97706',
      glow: 'rgba(245, 158, 11, 0.8)',
      gradient: 'from-amber-500/30 to-transparent',
      orbGradient: 'from-amber-500/30',
      badge: 'from-amber-500/20 to-amber-500/10 border-amber-500/30 text-amber-500',
      text: 'from-amber-500 to-amber-500/60',
      hover: 'from-amber-500 to-amber-500/60',
      button: 'from-amber-500 to-amber-500/80',
      hoverText: 'group-hover:text-amber-500',
      scanLine: 'via-amber-500/5',
      particle: 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]',
      corner: 'border-amber-500/40',
      topBorder: 'via-amber-500/50',
      skillHover: 'from-amber-500/20',
      skillBorder: 'group-hover:border-amber-500/50',
      dot: 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]',
    },
    Low: {
      primary: '#10b981', // Green/Emerald
      secondary: '#059669',
      glow: 'rgba(16, 185, 129, 0.8)',
      gradient: 'from-emerald-500/30 to-transparent',
      orbGradient: 'from-emerald-500/30',
      badge: 'from-emerald-500/20 to-emerald-500/10 border-emerald-500/30 text-emerald-500',
      text: 'from-emerald-500 to-emerald-500/60',
      hover: 'from-emerald-500 to-emerald-500/60',
      button: 'from-emerald-500 to-emerald-500/80',
      hoverText: 'group-hover:text-emerald-500',
      scanLine: 'via-emerald-500/5',
      particle: 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]',
      corner: 'border-emerald-500/40',
      topBorder: 'via-emerald-500/50',
      skillHover: 'from-emerald-500/20',
      skillBorder: 'group-hover:border-emerald-500/50',
      dot: 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]',
    }
  };

  // Get theme with type safety
  const theme = priorityThemes[experience.priority as PriorityLevel] || priorityThemes.High;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 lg:p-12">
          {/* Enhanced Backdrop with animated gradients */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-linear-to-br from-black via-black/95 to-black/90 backdrop-blur-2xl"
          />

          {/* Floating animated orbs in background - Priority colored */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.03, 0.08, 0.03],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial ${theme.orbGradient} to-transparent rounded-full blur-3xl`}
            />
            <motion.div
              animate={{
                scale: [1.3, 1, 1.3],
                opacity: [0.03, 0.08, 0.03],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-radial from-[#828277]/30 to-transparent rounded-full blur-3xl"
            />
          </div>

          {/* Modal Content Wrapper */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto no-scrollbar bg-[#0a0a0a] border border-[#2a2a20] rounded-[2.5rem] shadow-2xl"
          >
            {/* Decorative corner accents - Priority colored */}
            <div className={`absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 ${theme.corner} rounded-tl-[2.5rem] pointer-events-none`} />
            <div className={`absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 ${theme.corner} rounded-br-[2.5rem] pointer-events-none`} />
            
            {/* Subtle glow effect around modal - Priority colored */}
            <div className={`absolute inset-0 rounded-[2.5rem] bg-linear-to-br ${theme.gradient} via-transparent ${theme.gradient} opacity-60 blur-2xl pointer-events-none`} />
            
            <div className="relative">
              {/* Close Button - Enhanced with priority color */}
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-linear-to-br from-[#2f2f28] to-[#1a1a15] border border-[#828277] flex items-center justify-center text-white transition-all duration-300 shadow-lg group"
                style={{
                  ['--hover-bg' as string]: theme.primary
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.primary;
                  e.currentTarget.style.borderColor = theme.primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '';
                  e.currentTarget.style.borderColor = '';
                }}
              >
                <div className={`absolute inset-0 rounded-full bg-linear-to-br ${theme.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 relative z-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Header Banner Layout */}
              <div className="flex flex-col lg:flex-row min-h-100">
                {/* LEFT: Image Section with enhanced effects */}
                <div className="w-full lg:w-[60%] h-72 sm:h-96 lg:h-auto overflow-hidden relative border-b lg:border-b-0 lg:border-r border-[#2a2a20]">
                  <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src={experience.image}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Multi-layer overlay - Priority colored */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent lg:hidden" />
                  <div className={`absolute inset-0 bg-linear-to-br `} />
                  
                  {/* Animated scan line - Priority colored */}
                  <motion.div
                    animate={{ y: ['-100%', '200%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                    className={`absolute inset-x-0 h-32 bg-linear-to-b from-transparent ${theme.scanLine} to-transparent pointer-events-none`}
                  />
                  
                  {/* Corner grid pattern - Priority colored */}
                  <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
                    <div className="grid grid-cols-8 gap-1 h-full">
                      {[...Array(64)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 0.5, 0] }}
                          transition={{ duration: 2, delay: i * 0.02, repeat: Infinity }}
                          className="w-full h-full rounded-sm"
                          style={{ backgroundColor: theme.primary }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Floating particles - Priority colored */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -30, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        opacity: [0, 0.4, 0],
                      }}
                      transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                      }}
                      className={`absolute w-1.5 h-1.5 ${theme.particle} rounded-full`}
                      style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${10 + Math.random() * 80}%`,
                      }}
                    />
                  ))}
                </div>

                {/* RIGHT: Essential Info with enhanced styling */}
                <div className="w-full lg:w-[40%] p-8 lg:p-12 flex flex-col justify-center bg-linear-to-br from-white/5 to-transparent relative overflow-hidden">
                  {/* Background pattern - Priority colored */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle, ${theme.primary} 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }} />
                  </div>
                  
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative z-10"
                  >
                    {/* Period badge with glow - Priority colored */}
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className={`relative inline-block px-5 py-2 rounded-full bg-linear-to-r ${theme.badge} text-[10px] font-black tracking-[0.2em] uppercase mb-6 overflow-hidden group cursor-default`}
                    >
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                      <span className="relative">{experience.period}</span>
                    </motion.span>
                    
                    {/* Company name with text shadow - Priority colored */}
                    <h2 
                      className="text-1xl sm:text-3xl font-black text-white uppercase tracking-tighter leading-tight mb-4"
                      style={{
                        textShadow: `0 0 10px ${theme.glow}`
                      }}
                    >
                      {experience.company}
                    </h2>
                    
                    {/* Role with gradient - Priority colored */}
                    <p className={`text-transparent bg-clip-text bg-linear-to-r ${theme.text} text-lg sm:text-xl font-bold tracking-tight mb-8`}>
                      {experience.role}
                    </p>
                    
                    {/* Compact Stats Bar with enhanced design */}
                    <div className="flex gap-8 border-t border-white/10 pt-6 relative">
                      <div className={`absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent ${theme.topBorder} to-transparent`} />
                      
                      <motion.div
                        whileHover={{ y: -2 }}
                        className="group cursor-default"
                      >
                        <div className={`text-2xl font-black bg-linear-to-br from-white to-gray-400 bg-clip-text text-transparent transition-all duration-300`}>
                          {experience.mode || "Work"}
                        </div>
                        <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">Mode</div>
                      </motion.div>
                      
                      <div className="w-px h-12 bg-linear-to-b from-transparent via-white/20 to-transparent" />
                      
                      <motion.div
                        whileHover={{ y: -2 }}
                        className="group cursor-default"
                      >
                        <div 
                          className={`text-2xl font-black transition-all duration-300`}
                          style={{ color: theme.primary }}
                        >
                          {experience.priority || "High"}
                        </div>
                        <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">Priority</div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Content Body Layout with enhanced spacing */}
            <div className="p-8 sm:p-12 border-t border-[#2a2a20] relative">
              {/* Top border glow - Priority colored */}
              <div className={`absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent ${theme.topBorder} to-transparent`} />
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
                
                {/* COLUMN 1 & 2: Experience Details */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="lg:col-span-2 space-y-10"
                >
                  <section>
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`w-2 h-2 rounded-full ${theme.dot}`}
                      />
                      <h3 className="text-gray-500 text-[11px] font-black uppercase tracking-[0.3em]">Role Overview</h3>
                      <div className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent" />
                    </div>
                    
                    {/* Work Mode Statement card - Priority colored accent */}
                    <div className="relative p-6 rounded-2xl bg-linear-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm mb-6">
                      <div 
                        className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
                        style={{
                          background: `linear-gradient(to bottom, ${theme.primary}, transparent)`
                        }}
                      />
                      <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium pl-4">
                        {experience.workModeStatements || "Leading technical implementation and system architecture."}
                      </p>
                    </div>
                    
                    {/* Description card with accent */}
                    <div className="relative p-6 rounded-2xl bg-linear-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm">
                      <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-[#828277] to-transparent rounded-l-2xl" />
                      <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium pl-4">
                        {experience.description || "Involved in full software development life cycle, from requirement analysis to deployment. Collaborating with cross-functional teams to deliver high-quality software solutions."}
                      </p>
                    </div>
                  </section>

                  <section>
                    <div className="flex items-center gap-3 mb-6">
                      <h3 className="text-gray-500 text-[11px] font-black uppercase tracking-[0.3em]">Core Competencies</h3>
                      <div className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent" />
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {experience.skills.map((skill: string, i: number) => (
                        <motion.span
                          key={i}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.4 + i * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="group relative px-5 py-3 rounded-xl bg-linear-to-br from-[#1a1a15] to-[#0f0f0c] border border-[#2a2a20] text-gray-400 text-[11px] font-bold uppercase tracking-widest cursor-default overflow-hidden"
                        >
                          <div className={`absolute inset-0 bg-linear-to-r ${theme.skillHover} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                          <div className={`absolute inset-0 border border-transparent ${theme.skillBorder} rounded-xl transition-all duration-300`} />
                          <span className="relative group-hover:text-white transition-colors">{skill}</span>
                        </motion.span>
                      ))}
                    </div>
                  </section>
                </motion.div>

                {/* COLUMN 3: Verification / Contact */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-gray-500 text-[11px] font-black uppercase tracking-[0.3em]">Verification</h3>
                    <div className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent" />
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    {/* Certificate button with enhanced effects - Priority colored */}
                    <motion.a
                      href={experience.links || "https://www.linkedin.com/in/tharusha-sandaruwan-dahanayaka/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative flex items-center justify-between w-full px-6 py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest group overflow-hidden shadow-lg"
                    >
                      <div className={`absolute inset-0 bg-linear-to-r ${theme.button} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                      <span className="relative z-10 group-hover:text-white transition-colors">View Certificate</span>
                      <motion.svg
                        className="w-5 h-5 relative z-10 group-hover:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </motion.svg>
                    </motion.a>
                    
                    {/* LinkedIn button - Priority colored hover */}
                    <motion.a
                      href={experience.links || "https://www.linkedin.com/in/tharusha-sandaruwan-dahanayaka/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative flex items-center justify-between w-full px-6 py-5 border-2 border-[#828277] text-white rounded-2xl font-black text-xs uppercase tracking-widest group overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-linear-to-r ${theme.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      <span className="relative z-10">Connect</span>
                      <motion.svg
                        className="w-5 h-5 relative z-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        whileHover={{ x: 3, y: -3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </motion.svg>
                    </motion.a>
                  </div>

                  {/* Company Info Card with enhanced design - Priority colored hovers */}
                  <div className="pt-8 space-y-6 p-6 bg-linear-to-br from-white/5 to-transparent border border-white/10 rounded-2xl">
                    <div className="flex items-center justify-between group">
                      <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                        Industry
                      </span>
                      <span className={`text-white text-xs font-bold ${theme.hoverText} transition-colors`}>{experience.industry || "Technology"}</span>
                    </div>
                    <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
                    <div className="flex items-center justify-between group">
                      <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                        Location
                      </span>
                      <span className={`text-white text-xs font-bold ${theme.hoverText} transition-colors`}>{experience.location || "Remote"}</span>
                    </div>
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