import { motion } from 'framer-motion';

// onClick prop එක එකතු කළා
const CVButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick} // handleViewCV වෙනුවට onClick භාවිතා කරයි
      className="group relative flex items-center gap-3 px-2 py-3 bg-[#1a1a12] border border-[#4f4f48] rounded-xl hover:border-[#ed6a3e]/50 transition-all duration-500 overflow-hidden w-full max-w-47.5 sm:max-w-52.5 active:scale-95 shadow-lg shadow-black/20"
    >
      {/* Background Hover Glow */}
      <div className="absolute inset-0 bg-linear-to-r from-[#ed6a3e]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Small Icon Container */}
      <div className="relative w-8 h-8 shrink-0 rounded-lg bg-black border border-[#38382c] flex items-center justify-center text-[#ed6a3e] group-hover:bg-[#ed6a3e] group-hover:text-white transition-all duration-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
      </div>

      {/* Shine Effect */}
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12"
      />

      {/* Text Section */}
      <div className="relative text-left min-w-0">
        <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-[#ed6a3e] leading-none mb-1">
          Resume
        </span>
        <span className="block text-white font-bold text-xs sm:text-sm uppercase tracking-tight leading-none group-hover:translate-x-0.5 transition-transform duration-300">
          View CV
        </span>
      </div>

      {/* Tiny Arrow */}
      <div className="relative ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-[#ed6a3e]">
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
};

export default CVButton;