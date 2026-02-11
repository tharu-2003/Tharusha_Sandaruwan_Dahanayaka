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
    const range = window.innerWidth < 640 ? 1 : 2; // Mobile wala adu buttons pennanawa

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - range && i <= currentPage + range)) {
        pages.push(
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl border font-black text-xs sm:text-sm transition-all duration-300 ${
              currentPage === i
                ? 'bg-[#ed6a3e] border-[#ed6a3e] text-white shadow-lg shadow-[#ed6a3e]/20 scale-110'
                : 'border-[#2a2a20] text-gray-600 hover:border-gray-400 hover:text-white'
            }`}
          >
            {i}
          </button>
        );
      } else if (i === currentPage - range - 1 || i === currentPage + range + 1) {
        pages.push(<span key={i} className="text-gray-600 px-1 font-bold">...</span>);
      }
    }
    return pages;
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 border-t border-[#2a2a20] pt-10">
      <div className="flex items-center gap-3">
        {/* Previous Button */}
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="group p-3 sm:p-4 rounded-xl border border-[#2a2a20] disabled:opacity-10 hover:border-[#ed6a3e] transition-all"
        >
          <span className="text-gray-400 group-hover:text-[#ed6a3e] transition-colors">←</span>
        </button>

        {/* Dynamic Page Buttons */}
        <div className="flex gap-2 items-center">
          {renderPageButtons()}
        </div>

        {/* Next Button */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="group p-3 sm:p-4 rounded-xl border border-[#2a2a20] disabled:opacity-10 hover:border-[#ed6a3e] transition-all"
        >
          <span className="text-gray-400 group-hover:text-[#ed6a3e] transition-colors">→</span>
        </button>
      </div>
      
      {/* Page Info (Optional) */}
      <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">
        Page {currentPage} of {totalPages}
      </span>
    </div>
  );
};