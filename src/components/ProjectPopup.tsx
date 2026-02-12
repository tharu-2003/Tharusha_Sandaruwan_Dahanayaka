import { motion, AnimatePresence } from 'framer-motion';

interface ProjectPopupProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectPopup = ({ project, isOpen, onClose }: ProjectPopupProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12">
          {/* Enhanced Backdrop with animated gradients */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-[#ed6a3e]/10 backdrop-blur-2xl"
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
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#ed6a3e]/10 via-transparent to-[#828277]/10 opacity-60 blur-2xl pointer-events-none" />
            
            {/* Header Sticky Area */}
            <div className="relative">
              {/* Close Button - Enhanced */}
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-[#2f2f28] to-[#1a1a15] border border-[#828277] flex items-center justify-center text-white hover:bg-[#ed6a3e] hover:border-[#ed6a3e] transition-all duration-300 shadow-lg group"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ed6a3e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 relative z-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Main Banner Layout */}
              <div className="flex flex-col lg:flex-row min-h-[400px]">
                {/* LEFT: Image Section with enhanced effects */}
                <div className="w-full lg:w-[60%] h-72 sm:h-96 lg:h-auto overflow-hidden relative border-b lg:border-b-0 lg:border-r border-[#2a2a20]">
                  <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Multi-layer overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent lg:hidden" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ed6a3e]/5 via-transparent to-transparent" />
                  
                  {/* Animated scan line */}
                  <motion.div
                    animate={{ y: ['-100%', '200%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                    className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"
                  />
                  
                  {/* Corner grid pattern */}
                  <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
                    <div className="grid grid-cols-8 gap-1 h-full">
                      {[...Array(64)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 0.5, 0] }}
                          transition={{ duration: 2, delay: i * 0.02, repeat: Infinity }}
                          className="w-full h-full bg-[#ed6a3e] rounded-sm"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT: Essential Info with enhanced styling */}
                <div className="w-full lg:w-[40%] p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle, #ed6a3e 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }} />
                  </div>
                  
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative z-10"
                  >
                    {/* Category badge with glow */}
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="relative inline-block px-5 py-2 rounded-full bg-gradient-to-r from-[#ed6a3e]/20 to-[#ed6a3e]/10 border border-[#ed6a3e]/30 text-[#ed6a3e] text-[10px] font-black tracking-[0.2em] uppercase mb-6 overflow-hidden group cursor-default"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                      <span className="relative">{project.category}</span>
                    </motion.span>
                    
                    {/* Title with text shadow */}
                    <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-tight mb-6 drop-shadow-[0_0_30px_rgba(237,106,62,0.3)]">
                      {project.title}
                    </h2>
                    
                    {/* Compact Stats Bar with enhanced design */}
                    <div className="flex gap-8 border-t border-white/10 pt-6 relative">
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ed6a3e]/50 to-transparent" />
                      
                      <motion.div
                        whileHover={{ y: -2 }}
                        className="group cursor-default"
                      >
                        <div className="text-2xl font-black bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent group-hover:from-[#ed6a3e] group-hover:to-[#ed6a3e]/60 transition-all duration-300">
                          {project.timeline || "2024"}
                        </div>
                        <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">Timeline</div>
                      </motion.div>
                      
                      <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                      
                      <motion.div
                        whileHover={{ y: -2 }}
                        className="group cursor-default"
                      >
                        <div className="text-2xl font-black bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent group-hover:from-[#ed6a3e] group-hover:to-[#ed6a3e]/60 transition-all duration-300">
                          Full
                        </div>
                        <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">System</div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Content Body Layout with enhanced spacing */}
            <div className="p-8 sm:p-12 border-t border-[#2a2a20] relative">
              {/* Top border glow */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ed6a3e]/30 to-transparent" />
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
                
                {/* COLUMN 1 & 2: Main Story */}
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
                        className="w-2 h-2 bg-[#ed6a3e] rounded-full shadow-[0_0_10px_rgba(237,106,62,0.8)]"
                      />
                      <h3 className="text-gray-500 text-[11px] font-black uppercase tracking-[0.3em]">Project Insight</h3>
                      <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
                    </div>
                    
                    {/* Description card with subtle background */}
                    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm">
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#ed6a3e] to-transparent rounded-l-2xl" />
                      <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium pl-4">
                        {project.description || "Detailed project overview showing the core objectives and solutions implemented during the development cycle."}
                      </p>
                    </div>
                  </section>

                  <section>
                    <div className="flex items-center gap-3 mb-6">
                      <h3 className="text-gray-500 text-[11px] font-black uppercase tracking-[0.3em]">Built With</h3>
                      <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag: string, i: number) => (
                        <motion.span
                          key={i}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.4 + i * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="group relative px-5 py-3 rounded-xl bg-gradient-to-br from-[#1a1a15] to-[#0f0f0c] border border-[#2a2a20] text-gray-400 text-[11px] font-bold uppercase tracking-widest cursor-default overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-[#ed6a3e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute inset-0 border border-[#ed6a3e]/0 group-hover:border-[#ed6a3e]/50 rounded-xl transition-all duration-300" />
                          <span className="relative group-hover:text-white transition-colors">{tag}</span>
                        </motion.span>
                      ))}
                    </div>
                  </section>
                </motion.div>

                {/* COLUMN 3: Actions & Sidebar Details */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-gray-500 text-[11px] font-black uppercase tracking-[0.3em]">Deployment</h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    {/* GitHub button with enhanced effects */}
                    <motion.a
                      href={project.github || "#"}
                      target="_blank"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative flex items-center justify-between w-full px-6 py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest group overflow-hidden shadow-lg"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#ed6a3e] to-[#ed6a3e]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                      <span className="relative z-10 group-hover:text-white transition-colors">Source Code</span>
                      <motion.svg
                        className="w-5 h-5 relative z-10 group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.334-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </motion.svg>
                    </motion.a>

                    {/* Live demo button */}
                    {project.links?.live && ( // project.live වෙනුවට project.links?.live ලෙස වෙනස් කළා
                      <motion.a
                        href={project.links.live} // project.live වෙනුවට project.links.live
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative flex items-center justify-between w-full px-6 py-5 border-2 border-[#828277] text-white rounded-2xl font-black text-xs uppercase tracking-widest group overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#ed6a3e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10">Live Preview</span>
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
                    )}
                  </div>

                  {/* Meta Details List with enhanced design */}
                  <div className="pt-8 space-y-6 p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl">
                    <div className="flex items-center justify-between group">
                      <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                        Platform
                      </span>
                      <span className="text-white text-xs font-bold group-hover:text-[#ed6a3e] transition-colors">{project.platform || "Web / Mobile"}</span>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <div className="flex items-center justify-between group">
                      <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                        Role
                      </span>
                      <span className="text-white text-xs font-bold group-hover:text-[#ed6a3e] transition-colors">{project.role || "Lead Developer"}</span>
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