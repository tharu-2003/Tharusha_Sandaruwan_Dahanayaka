import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, setCurrentPage }) => {
  if (totalPages <= 1) return null;

  const renderPageButtons = () => {
    const pages = [];
    const range = 1; 

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || 
        i === totalPages || 
        (i >= currentPage - range && i <= currentPage + range)
      ) {
        pages.push(
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            // Mobile wala w-8 h-8, desktop wala w-12 h-12 widiyata sizes wenas kalaa
            className={`w-8 h-8 sm:w-10 md:w-12 sm:h-10 md:h-12 rounded-lg sm:rounded-xl border font-black text-[10px] sm:text-xs md:text-sm transition-all duration-300 ${
              currentPage === i
                ? 'bg-[#ed6a3e] border-[#ed6a3e] text-white shadow-lg shadow-[#ed6a3e]/20 scale-110'
                : 'border-[#2a2a20] text-gray-600 hover:border-gray-400 hover:text-white'
            }`}
          >
            {i}
          </button>
        );
      } 
      else if (
        i === currentPage - range - 1 || 
        i === currentPage + range + 1
      ) {
        pages.push(
          <span key={i} className="text-gray-600 px-0.5 sm:px-1 font-bold select-none text-[10px] sm:text-sm">
            ...
          </span>
        );
      }
    }
    return pages;
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 border-t border-[#2a2a20] pt-6 sm:pt-10 mt-6 sm:mt-8">
      <div className="flex items-center gap-1.5 sm:gap-3">
        {/* Previous Button - Mobile size adjusted */}
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="group p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl border border-[#2a2a20] disabled:opacity-10 hover:border-[#ed6a3e] transition-all cursor-pointer disabled:cursor-not-allowed"
        >
          <span className="text-gray-400 group-hover:text-[#ed6a3e] text-xs sm:text-base">←</span>
        </button>

        {/* Dynamic Page Buttons */}
        <div className="flex gap-1 sm:gap-2 items-center">
          {renderPageButtons()}
        </div>

        {/* Next Button - Mobile size adjusted */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="group p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl border border-[#2a2a20] disabled:opacity-10 hover:border-[#ed6a3e] transition-all cursor-pointer disabled:cursor-not-allowed"
        >
          <span className="text-gray-400 group-hover:text-[#ed6a3e] text-xs sm:text-base">→</span>
        </button>
      </div>
      
      {/* Page Info - Mobile size adjusted */}
      <span className="text-[8px] sm:text-[10px] text-gray-600 font-bold uppercase tracking-widest sm:tracking-[0.2em] opacity-70">
        Page {currentPage} of {totalPages}
      </span>
    </div>
  );
};