import { motion, AnimatePresence } from 'framer-motion';
import { assets } from "../assets/datas/assets";

interface DownloadCvPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const DownloadCvPopup = ({ isOpen, onClose }: DownloadCvPopupProps) => {
  const cvUrl = assets.myCV;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 lg:p-10">

          {/* Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="relative w-full max-w-5xl h-[90vh] bg-[#0a0a0a] border border-[#2a2a20] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          >

            {/* Ambient glow — top-right corner like experience cards */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-64 h-64 bg-[#ed6a3e] blur-[100px] rounded-full z-0 pointer-events-none"
            />

            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="relative z-10 px-6 py-5 border-b border-[#2a2a20] flex justify-between items-center bg-[#0a0a0a]/80 backdrop-blur-sm"
            >
              {/* Left: Title block */}
              <div className="space-y-0.5">
                <div className="flex items-center gap-3">
                  {/* Decorative accent line */}
                  <span className="w-1 h-6 rounded-full bg-[#ed6a3e] block shrink-0" />
                  <div>
                    <h2 className="text-white font-black text-xl tracking-tighter uppercase leading-none">
                      Curriculum Vitae
                    </h2>
                    <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mt-0.5">
                      Tharusha Sandaruwan
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Actions */}
              <div className="flex items-center gap-3">
                {/* Download Button — CVButton style */}
                <motion.a
                  href={cvUrl}
                  download="Tharusha_Sandaruwan_CV.pdf"
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex items-center gap-3 px-2 py-2.5 bg-[#1a1a12] border border-[#4f4f48] rounded-xl hover:border-[#ed6a3e]/50 transition-all duration-500 overflow-hidden active:scale-95 shadow-lg shadow-black/20"
                >
                  {/* Background Hover Glow */}
                  <div className="absolute inset-0 bg-linear-to-r from-[#ed6a3e]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon Container */}
                  <div className="relative w-8 h-8 shrink-0 rounded-lg bg-black border border-[#38382c] flex items-center justify-center text-[#ed6a3e] group-hover:bg-[#ed6a3e] group-hover:text-white transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 12l4.5 4.5m0 0 4.5-4.5M12 3v13.5" />
                    </svg>
                  </div>

                  {/* Shine Sweep */}
                  <motion.div
                    animate={{ x: ["-100%", "150%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
                  />

                  {/* Text */}
                  <div className="relative text-left min-w-0 pr-1">
                    <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-[#ed6a3e] leading-none mb-1">
                      Resume
                    </span>
                    <span className="block text-white font-bold text-xs uppercase tracking-tight leading-none group-hover:translate-x-0.5 transition-transform duration-300">
                      Download CV
                    </span>
                  </div>

                  {/* Arrow reveal */}
                  <div className="relative mr-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-[#ed6a3e]">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.a>

                {/* Close Button */}
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-[#2a2a20] hover:border-[#ed6a3e]/40 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>

            {/* PDF Viewer Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="relative z-10 flex-1 bg-[#111111] overflow-hidden"
            >
              {/* Subtle top inner shadow for depth */}
              <div className="absolute top-0 left-0 right-0 h-4 bg-linear-to-b from-black/30 to-transparent z-10 pointer-events-none" />

              <iframe
                src={`${cvUrl}#toolbar=0`}
                className="w-full h-full border-none"
                title="CV Preview"
              />

              {/* Subtle bottom inner shadow */}
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-linear-to-t from-black/40 to-transparent z-10 pointer-events-none" />
            </motion.div>

            {/* Footer bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="relative z-10 px-6 py-3 border-t border-[#2a2a20] bg-[#0a0a0a]/80 backdrop-blur-sm flex items-center justify-between"
            >
              <p className="text-gray-600 text-[9px] uppercase tracking-[0.2em] font-bold">
                Preview Mode
              </p>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ed6a3e] animate-pulse" />
                <p className="text-gray-600 text-[9px] uppercase tracking-[0.2em] font-bold">
                  PDF Document
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DownloadCvPopup;