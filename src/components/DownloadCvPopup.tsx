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
        <div className="fixed inset-0 z-100 flex items-end sm:items-center justify-center sm:p-6 lg:p-10">

          {/* Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* Modal Container
              — mobile : slides up from bottom, rounded top corners only, full width
              — sm+    : centered card, rounded all sides, max-w constrained        */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="relative w-full sm:max-w-5xl h-[92dvh] sm:h-[90vh] bg-[#0a0a0a] border border-[#2a2a20] rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          >

            {/* Ambient glow orb */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#ed6a3e] blur-[80px] sm:blur-[100px] rounded-full z-0 pointer-events-none"
            />

            {/* Mobile drag handle pill */}
            <div className="sm:hidden flex justify-center pt-3 pb-1 relative z-10 shrink-0">
              <div className="w-10 h-1 rounded-full bg-[#2a2a20]" />
            </div>

            {/* ── HEADER ── */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="relative z-10 px-4 sm:px-6 py-3 sm:py-5 border-b border-[#2a2a20] bg-[#0a0a0a]/80 backdrop-blur-sm shrink-0"
            >
              <div className="flex items-center justify-between gap-3">

                {/* Left: Title */}
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <span className="w-1 h-5 sm:h-6 rounded-full bg-[#ed6a3e] block shrink-0" />
                  <div className="min-w-0">
                    <h2 className="text-white font-black text-base sm:text-xl tracking-tighter uppercase leading-none">
                      Curriculum Vitae
                    </h2>
                    <p className="text-gray-500 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold mt-0.5">
                      Tharusha Sandaruwan
                    </p>
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-2 sm:gap-3 shrink-0">

                  {/* Download Button */}
                  <motion.a
                    href={cvUrl}
                    download="Tharusha_Sandaruwan_CV.pdf"
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex items-center gap-2 sm:gap-3 px-2 py-2 sm:py-2.5 bg-[#1a1a12] border border-[#4f4f48] rounded-xl hover:border-[#ed6a3e]/50 transition-all duration-500 overflow-hidden active:scale-95 shadow-lg shadow-black/20"
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-linear-to-r from-[#ed6a3e]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Icon box */}
                    <div className="relative w-7 h-7 sm:w-8 sm:h-8 shrink-0 rounded-lg bg-black border border-[#38382c] flex items-center justify-center text-[#ed6a3e] group-hover:bg-[#ed6a3e] group-hover:text-white transition-all duration-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 12l4.5 4.5m0 0 4.5-4.5M12 3v13.5" />
                      </svg>
                    </div>

                    {/* Shine sweep */}
                    <motion.div
                      animate={{ x: ["-100%", "150%"] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
                    />

                    {/* Text label — hidden on mobile */}
                    <div className="relative text-left min-w-0 pr-1 hidden sm:block">
                      <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-[#ed6a3e] leading-none mb-1">
                        Resume
                      </span>
                      <span className="block text-white font-bold text-xs uppercase tracking-tight leading-none group-hover:translate-x-0.5 transition-transform duration-300">
                        Download CV
                      </span>
                    </div>

                    {/* Arrow — desktop only */}
                    <div className="relative mr-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-[#ed6a3e] hidden sm:block">
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
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-[#2a2a20] hover:border-[#ed6a3e]/40 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors shrink-0"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* Mobile-only hint strip */}
              <div className="sm:hidden mt-2 flex items-center gap-2">
                <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#ed6a3e]">Resume</span>
                <span className="w-1 h-1 rounded-full bg-[#2a2a20]" />
                <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-gray-600">
                  Tap the icon to save
                </span>
              </div>
            </motion.div>

            {/* ── PDF VIEWER ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="relative z-10 flex-1 bg-[#111111] overflow-hidden min-h-0"
            >
              <div className="absolute top-0 left-0 right-0 h-4 bg-linear-to-b from-black/30 to-transparent z-10 pointer-events-none" />

              <iframe
                src={`${cvUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full h-full border-none"
                title="CV Preview"
              />

              <div className="absolute bottom-0 left-0 right-0 h-6 bg-linear-to-t from-black/40 to-transparent z-10 pointer-events-none" />
            </motion.div>

            {/* ── FOOTER ── */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="relative z-10 px-4 sm:px-6 py-2.5 sm:py-3 border-t border-[#2a2a20] bg-[#0a0a0a]/80 backdrop-blur-sm flex items-center justify-between shrink-0"
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