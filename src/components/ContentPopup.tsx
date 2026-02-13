import { motion, AnimatePresence } from 'framer-motion';
import { getYouTubeEmbedUrl } from '../assets/datas/assets';

interface ContentPopupProps {
  content: any;
  isOpen: boolean;
  onClose: () => void;
}

export interface Content {
    _id: string; 
    title: string;
    description: string;
    date: string;
    category: "Video" | "Post"; 
    link: string;
    noteImage?: string; // Image for Posts
    watchingTime?: string; 
    readTime?: string;    
}

export const ContentPopup = ({ content, isOpen, onClose }: ContentPopupProps) => {
  if (!content) return null;

  const isVideo = content.category === "Video";

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
            
            {/* Header Sticky Area */}
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

              {/* Main Banner Layout */}
              <div className="flex flex-col lg:flex-row min-h-100">
                {/* LEFT: Media Section (Video/Image) */}
                <div className="w-full lg:w-[60%] h-72 sm:h-96 lg:h-auto overflow-hidden relative border-b lg:border-b-0 lg:border-r border-[#2a2a20]">
                  {isVideo && content.link ? (
                    <div className="w-full h-full relative">
                      <iframe
                        src={getYouTubeEmbedUrl(content.link)}
                        title={content.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <div className="absolute inset-0 bg-linear-to-br from-[#ed6a3e]/5 via-transparent to-transparent pointer-events-none" />
                    </div>
                  ) : (
                    /* Post එකක් නම් මෙතන ක්‍රියාත්මක වේ */
                    <div className="w-full h-full relative bg-[#0a0a0a] flex items-center justify-center group/media">
                      {/* Background Note Image */}
                      {content.noteImage ? (
                        <motion.img 
                          initial={{ scale: 1.1, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          src={content.noteImage}
                          alt={content.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/media:scale-105"
                        />
                      ) : (
                        /* Image එකක් නැතිනම් පෙන්වන Icon එක */
                        <motion.div
                          animate={{ opacity: [0.05, 0.1, 0.05] }}
                          transition={{ duration: 5, repeat: Infinity }}
                          className="absolute text-[200px] text-[#ed6a3e]/10"
                        >
                          <svg fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2zM14 4v4h4" />
                          </svg>
                        </motion.div>
                      )}

                      {/* Overlay Gradients */}
                      <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent" />
                      <div className="absolute inset-0 bg-linear-to-br from-[#ed6a3e]/10 via-transparent to-transparent" />


                      {/* Corner Grid Decoration */}
                      <div className="absolute bottom-6 left-6 w-20 h-20 opacity-20 pointer-events-none">
                        <div className="grid grid-cols-4 gap-1 h-full">
                          {[...Array(16)].map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-[#ed6a3e] rounded-full" />
                          ))}
                        </div>
                      </div>

                      {/* Animated Scan Line */}
                      <motion.div
                        animate={{ y: ['-100%', '200%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-x-0 h-32 bg-linear-to-b from-transparent via-[#ed6a3e]/10 to-transparent pointer-events-none"
                      />
                    </div>
                  )}
                </div>

                {/* RIGHT: Essential Info */}
                <div className="w-full lg:w-[40%] p-8 lg:p-12 flex flex-col justify-center bg-linear-to-br from-white/5 to-transparent relative overflow-hidden">
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
                    {/* Category badge with icon and glow */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-linear-to-r from-[#ed6a3e]/20 to-[#ed6a3e]/10 border border-[#ed6a3e]/30 text-[#ed6a3e] text-[10px] font-black tracking-[0.2em] uppercase mb-6 overflow-hidden group cursor-default"
                    >
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                      <motion.span 
                        className="relative"
                        animate={{ rotate: isVideo ? [0, 360] : 0 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        {isVideo ? (
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/>
                          </svg>
                        ) : (
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2zM14 4v4h4" />
                          </svg>
                        )}
                      </motion.span>
                      <span className="relative">{content.category}</span>
                    </motion.div>
                    
                    {/* Title with text shadow */}
                    <h2 className="text-3xl sm:text-3xl font-black text-white uppercase tracking-tighter leading-tight mb-6 drop-shadow-[0_0_30px_rgba(237,106,62,0.3)]">
                      {content.title}
                    </h2>
                    
                    {/* Compact Stats Bar */}
                    <div className="flex gap-8 border-t border-white/10 pt-6 relative">
                      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#ed6a3e]/50 to-transparent" />
                      
                      <motion.div
                        whileHover={{ y: -2 }}
                        className="group cursor-default"
                      >
                        <div className="text-2xl font-black bg-linear-to-br from-white to-gray-400 bg-clip-text text-transparent group-hover:from-[#ed6a3e] group-hover:to-[#ed6a3e]/60 transition-all duration-300">
                          {content.date}
                        </div>
                        <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">Published</div>
                      </motion.div>
                      
                      <div className="w-px h-12 bg-linear-to-b from-transparent via-white/20 to-transparent" />
                      
                      <motion.div
                        whileHover={{ y: -2 }}
                        className="group cursor-default"
                      >
                        <div className="text-2xl font-black bg-linear-to-br from-white to-gray-400 bg-clip-text text-transparent group-hover:from-[#ed6a3e] group-hover:to-[#ed6a3e]/60 transition-all duration-300">
                          {isVideo ? content.watchingTime : content.readTime}
                        </div>
                        <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">
                          {isVideo ? "Duration" : "Read Time"}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Content Body Layout */}
            <div className="p-8 sm:p-12 border-t border-[#2a2a20] relative">
              {/* Top border glow */}
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#ed6a3e]/30 to-transparent" />
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
                
                {/* COLUMN 1 & 2: Main Content */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="lg:col-span-2 space-y-10"
                >
                  {/* Description Section */}
                  <section>
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 bg-[#ed6a3e] rounded-full shadow-[0_0_10px_rgba(237,106,62,0.8)]"
                      />
                      <h3 className="text-gray-500 text-[11px] font-black uppercase tracking-[0.3em]">
                        {isVideo ? "Video Overview" : "Article Summary"}
                      </h3>
                      <div className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent" />
                    </div>
                    
                    {/* Description card */}
                    <div className="relative p-6 rounded-2xl bg-linear-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm">
                      <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-[#ed6a3e] to-transparent rounded-l-2xl" />
                      <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium pl-4">
                        {content.description}
                      </p>
                    </div>
                  </section>

                  {/* Full Content (if available) */}
                  {content.fullContent && (
                    <section>
                      <div className="flex items-center gap-3 mb-6">
                        <h3 className="text-gray-500 text-[11px] font-black uppercase tracking-[0.3em]">Full Content</h3>
                        <div className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent" />
                      </div>
                      
                      <div className="relative p-6 rounded-2xl bg-linear-to-br from-[#1a1a15] to-[#0f0f0c] border border-[#2a2a20]">
                        <div className="prose prose-invert max-w-none">
                          <div className="text-gray-400 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                            {content.fullContent}
                          </div>
                        </div>
                      </div>
                    </section>
                  )}

                  {/* Tags/Topics */}
                  {content.tags && content.tags.length > 0 && (
                    <section>
                      <div className="flex items-center gap-3 mb-6">
                        <h3 className="text-gray-500 text-[11px] font-black uppercase tracking-[0.3em]">Topics</h3>
                        <div className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent" />
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        {content.tags.map((tag: string, i: number) => (
                          <motion.span
                            key={i}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4 + i * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="group relative px-5 py-3 rounded-xl bg-linear-to-br from-[#1a1a15] to-[#0f0f0c] border border-[#2a2a20] text-gray-400 text-[11px] font-bold uppercase tracking-widest cursor-default overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-linear-to-r from-[#ed6a3e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute inset-0 border border-[#ed6a3e]/0 group-hover:border-[#ed6a3e]/50 rounded-xl transition-all duration-300" />
                            <span className="relative group-hover:text-white transition-colors">{tag}</span>
                          </motion.span>
                        ))}
                      </div>
                    </section>
                  )}
                </motion.div>

                {/* COLUMN 3: Actions & Sidebar */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-gray-500 text-[11px] font-black uppercase tracking-[0.3em]">Access</h3>
                    <div className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent" />
                  </div>
                  
                  {/* Action Button */}
                  <motion.a
                    href={content.link}
                    target={isVideo ? "_blank" : "_self"}
                    rel={isVideo ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative flex items-center justify-between w-full px-6 py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest group overflow-hidden shadow-lg"
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-[#ed6a3e] to-[#ed6a3e]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                    <span className="relative z-10 group-hover:text-white transition-colors flex items-center gap-2">
                      {isVideo ? (
                        <>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                          Watch Now
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                          Read Article
                        </>
                      )}
                    </span>
                    <motion.svg
                      className="w-5 h-5 relative z-10 group-hover:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      whileHover={{ x: 3, y: -3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </motion.svg>
                  </motion.a>

                  {/* Meta Details */}
                  <div className="pt-8 space-y-6 p-6 bg-linear-to-br from-white/5 to-transparent border border-white/10 rounded-2xl">
                    <div className="flex items-center justify-between group">
                      <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                        Type
                      </span>
                      <span className="text-white text-xs font-bold group-hover:text-[#ed6a3e] transition-colors">
                        {isVideo ? "Video Content" : "Written Article"}
                      </span>
                    </div>
                    <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
                    <div className="flex items-center justify-between group">
                      <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                        Format
                      </span>
                      <span className="text-white text-xs font-bold group-hover:text-[#ed6a3e] transition-colors">
                        {isVideo ? "Multimedia" : "Text"}
                      </span>
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