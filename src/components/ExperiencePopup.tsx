import { motion, AnimatePresence } from 'framer-motion';

interface ExperiencePopupProps {
  experience: any;
  isOpen: boolean;
  onClose: () => void;
}

export const ExperiencePopup = ({ experience, isOpen, onClose }: ExperiencePopupProps) => {
  if (!experience) return null;

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
            className="absolute inset-0 bg-linear-to-br from-black via-black/95 to-[#ed6a3e]/10 backdrop-blur-2xl"
          />

          {/* Floating animated orbs in background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.03, 0.08, 0.03],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-[#ed6a3e]/30 to-transparent rounded-full blur-3xl"
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
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#ed6a3e]/40 rounded-tl-[2.5rem] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#ed6a3e]/40 rounded-br-[2.5rem] pointer-events-none" />
            
            {/* Subtle glow effect around modal */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-linear-to-br from-[#ed6a3e]/10 via-transparent to-[#828277]/10 opacity-60 blur-2xl pointer-events-none" />
            
            <div className="relative">
              {/* Close Button - Enhanced */}
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-linear-to-br from-[#2f2f28] to-[#1a1a15] border border-[#828277] flex items-center justify-center text-white hover:bg-[#ed6a3e] hover:border-[#ed6a3e] transition-all duration-300 shadow-lg group"
              >
                <div className="absolute inset-0 rounded-full bg-linear-to-br from-[#ed6a3e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 relative z-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Header Banner Layout */}
              <div className="flex flex-col lg:flex-row min-h-87.5">
                {/* LEFT: Branding Section with enhanced effects */}
                <div className="w-full lg:w-[50%] p-8 lg:p-16 flex flex-col justify-center bg-[#1a1a12] border-b lg:border-b-0 lg:border-r border-[#2a2a20] relative overflow-hidden">
                  {/* Animated grid pattern background */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'linear-gradient(#ed6a3e 1px, transparent 1px), linear-gradient(90deg, #ed6a3e 1px, transparent 1px)',
                      backgroundSize: '30px 30px'
                    }} />
                  </div>
                  {/* Decorative Background Icon */}
                  <div className="absolute -bottom-10 -left-10 text-[200px] font-black text-white/5 pointer-events-none select-none">
                    {experience._id.slice(-2)}
                  </div>
                  
                  {/* Decorative Background Icon with glow */}
                  <motion.div
                    animate={{ 
                      opacity: [0.03, 0.08, 0.03],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -bottom-10 -left-10 text-[200px] font-black text-white/5 pointer-events-none select-none drop-shadow-[0_0_30px_rgba(237,106,62,0.2)]"
                  >
                    {experience._id.slice(-2)}
                  </motion.div>
                  
                  {/* Floating particles */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -20, 0],
                        x: [0, Math.random() * 10 - 5, 0],
                        opacity: [0, 0.3, 0],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                      className="absolute w-1 h-1 bg-[#ed6a3e] rounded-full"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                      }}
                    />
                  ))}
                  
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative z-10"
                  >
                    {/* Period badge with shimmer */}
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="relative inline-block px-5 py-2 rounded-full bg-linear-to-r from-[#ed6a3e]/20 to-[#ed6a3e]/10 border border-[#ed6a3e]/30 text-[#ed6a3e] text-[10px] font-black tracking-[0.2em] uppercase mb-6 overflow-hidden group cursor-default"
                    >
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                      <span className="relative">{experience.period}</span>
                    </motion.span>
                    
                    {/* Company name with glow */}
                    <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tighter leading-tight mb-4 drop-shadow-[0_0_30px_rgba(237,106,62,0.3)]">
                      {experience.company}
                    </h2>
                    
                    {/* Role with gradient */}
                    <p className="text-transparent bg-clip-text bg-linear-to-r from-[#ed6a3e] to-[#ed6a3e]/60 text-lg sm:text-xl font-bold tracking-tight">
                      {experience.role}
                    </p>
                  </motion.div>
                </div>

                {/* RIGHT: Quick Summary with enhanced design */}
                <div className="w-full lg:w-[50%] p-8 lg:p-12 flex flex-col justify-center bg-linear-to-br from-white/5 to-transparent relative overflow-hidden">
                  {/* Background dot pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }} />
                  </div>
                  
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-2 gap-8 relative z-10"
                  >
                    <motion.div
                      whileHover={{ y: -2 }}
                      className="group cursor-default"
                    >
                      <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">Role</div>
                      <div className="text-2xl font-black bg-linear-to-br from-white to-gray-400 bg-clip-text text-transparent group-hover:from-[#ed6a3e] group-hover:to-[#ed6a3e]/60 transition-all duration-300">
                        {experience.role || "Software Engineer"}
                      </div>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ y: -2 }}
                      className="group cursor-default"
                    >
                      <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">Mode</div>
                      <div className="text-2xl font-black bg-linear-to-br from-white to-gray-400 bg-clip-text text-transparent group-hover:from-[#ed6a3e] group-hover:to-[#ed6a3e]/60 transition-all duration-300">
                        {experience.mode || "Education"}
                      </div>
                    </motion.div>
                    
                    <div className="col-span-2 pt-6 border-t border-white/10 relative">
                      {/* Glowing top border */}
                      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#ed6a3e]/50 to-transparent" />
                      <div className="text-xl font-medium text-gray-400 leading-relaxed">
                        {experience.workModeStatements  || "Leading technical implementation and system architecture."}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Content Body Layout with enhanced spacing */}
            <div className="p-8 sm:p-12 border-t border-[#2a2a20] relative">
              {/* Top border glow */}
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#ed6a3e]/30 to-transparent" />
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
                
                {/* COLUMN 1 & 2: Experience Details */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="lg:col-span-2 space-y-10"
                >
                  <section>
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 bg-[#ed6a3e] rounded-full shadow-[0_0_10px_rgba(237,106,62,0.8)]"
                      />
                      <h3 className="text-gray-500 text-[11px] font-black uppercase tracking-[0.3em]">Responsibilities & Achievements</h3>
                      <div className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent" />
                    </div>
                    
                    {/* Description card with accent */}
                    <div className="relative p-6 rounded-2xl bg-linear-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm">
                      <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-[#ed6a3e] to-transparent rounded-l-2xl" />
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
                          transition={{ delay: 0.5 + i * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="group relative px-5 py-3 rounded-xl bg-linear-to-br from-[#1a1a15] to-[#0f0f0c] border border-[#2a2a20] text-gray-400 text-[11px] font-bold uppercase tracking-widest cursor-default overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-linear-to-r from-[#ed6a3e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute inset-0 border border-[#ed6a3e]/0 group-hover:border-[#ed6a3e]/50 rounded-xl transition-all duration-300" />
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
                  transition={{ delay: 0.5 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-gray-500 text-[11px] font-black uppercase tracking-[0.3em]">Verification</h3>
                    <div className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent" />
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <motion.a
                      href={ experience.links || "https://www.linkedin.com/in/tharusha-sandaruwan-dahanayaka/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative flex items-center justify-between w-full px-6 py-5 bg-white text-black rounded-2xl font-black text-[10px] uppercase tracking-widest group overflow-hidden shadow-lg"
                    >
                      <div className="absolute inset-0 bg-linear-to-r from-[#ed6a3e] to-[#ed6a3e]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                      <span className="relative z-10 group-hover:text-white transition-colors">Request Certificate</span>
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
                  </div>

                  {/* Company Info Card with enhanced design */}
                  <div className="pt-8 space-y-6 p-6 bg-linear-to-br from-white/5 to-transparent border border-white/10 rounded-2xl relative overflow-hidden">
                    {/* Subtle background pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                        backgroundSize: '15px 15px'
                      }} />
                    </div>
                    
                    <div className="flex items-center justify-between group relative z-10">
                      <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                        Industry
                      </span>
                      <span className="text-white text-xs font-bold uppercase tracking-tighter group-hover:text-[#ed6a3e] transition-colors">{experience.industry || "Software Development"}</span>
                    </div>
                    
                    <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent relative z-10" />
                    
                    <div className="flex items-center justify-between group relative z-10">
                      <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                        Location
                      </span>
                      <span className="text-white text-xs font-bold uppercase tracking-tighter group-hover:text-[#ed6a3e] transition-colors">{experience.location || "Sri Lanka"}</span>
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