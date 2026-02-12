import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { contentData } from '../assets/datas/assets'; 
import { Navigation } from '../components/Navigation';
import { Pagination } from '../components/PaginationControls';
import { ContentPopup } from '../components/ContentPopup';

// Icons set eka (Categories walata anuwa wenas wenna)
const VideoIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/></svg>
);

const PostIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2zM14 4v4h4" /></svg>
);

const ContentsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Popup state
  const [selectedContent, setSelectedContent] = useState<any>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openContent = (content: any) => {
    setSelectedContent(content);
    setIsPopupOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeContent = () => {
    setIsPopupOpen(false);
    document.body.style.overflow = 'unset';
  };

  // 1. Filter & Reverse Logic
  const filteredContents = useMemo(() => {
    const reversedData = [...contentData].reverse();
    
    if (!searchQuery.trim()) return reversedData;

    return reversedData.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // 2. Pagination Calculations
  const totalPages = Math.ceil(filteredContents.length / itemsPerPage);
  
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
  const currentItems = useMemo(() => {
    return filteredContents.slice(indexOfFirstItem, indexOfLastItem);
  }, [filteredContents, indexOfFirstItem, indexOfLastItem]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-black text-white p-5 sm:p-10 md:p-16 lg:p-20 font-sans selection:bg-[#ed6a3e]/30">
      <Navigation />

      <ContentPopup 
        content={selectedContent} 
        isOpen={isPopupOpen} 
        onClose={closeContent} 
      />

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 mt-20 lg:mt-3">
        
        {/* LEFT SIDE: Title & Search */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit space-y-8">
          {/* Title with staggered animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-6xl lg:text-6xl font-black tracking-tighter leading-none uppercase"
            >
              KNOWLEDGE
            </motion.h1>
            <motion.span 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="ghost-text text-[#1a1a12] stroke-[#2a2a20] stroke-1 uppercase text-4xl sm:text-6xl lg:text-6xl font-black block"
            >
              BASE
            </motion.span>
          </motion.div>

          {/* Search Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative w-full max-w-md"
          >
            <input 
              type="text"
              placeholder="Search archive..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-[#1a1a12] border border-[#2a2a20] rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#ed6a3e] transition-all"
            />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em]"
          >
            Found {filteredContents.length} Shared Resources
          </motion.p>

          {/* Desktop Pagination */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="hidden lg:block"
          >
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              setCurrentPage={setCurrentPage} 
            />
          </motion.div>
        </div>

        {/* RIGHT SIDE: Content List (3 per page) */}
        <div className="lg:w-2/3">
          {currentItems.length > 0 ? (
            <div className="flex flex-col">
              {currentItems.map((item, index) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <div
                    onClick={() => openContent(item)}
                    className="group flex items-start justify-between gap-4 sm:gap-10 py-10 border-b border-[#2a2a20] hover:border-[#ed6a3e]/40 transition-all duration-500 cursor-pointer"
                  >
                    <div className="flex-1">
                      {/* Category & Icon */}
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                        className="flex items-center gap-2 mb-4"
                      >
                        <span className="text-[#ed6a3e] group-hover:scale-110 transition-transform duration-300">
                          {item.category === "Video" ? <VideoIcon /> : <PostIcon />}
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black">
                          {item.category}
                        </span>
                      </motion.div>
                      
                      <motion.h3 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                        className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#ed6a3e] transition-colors duration-300 mb-3 tracking-tight uppercase"
                      >
                        {item.title}
                      </motion.h3>
                      
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.15 + 0.4 }}
                        className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl mb-6 line-clamp-2 group-hover:text-gray-400 transition-colors"
                      >
                        {item.description}
                      </motion.p>

                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
                        className="flex items-center gap-6 opacity-60"
                      >
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.date}</span>
                        <span className="w-1 h-1 bg-[#2a2a20] rounded-full"></span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                          {item.category === "Video" ? item.watchingTime : item.readTime}
                        </span>
                      </motion.div>
                    </div>

                    {/* Action Icon */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      className="mt-2"
                    >
                      <div className="w-12 h-12 rounded-full border border-[#2a2a20] flex items-center justify-center text-[#ed6a3e] group-hover:bg-[#ed6a3e] group-hover:text-white group-hover:border-[#ed6a3e] transition-all duration-500 shadow-xl group-hover:shadow-[#ed6a3e]/20">
                        <svg
                          className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-24 border border-dashed border-[#2a2a20] rounded-3xl bg-[#0a0a0a]"
            >
              <p className="text-gray-600 uppercase tracking-widest font-black text-xs">No matching results found</p>
            </motion.div>
          )}

          {/* Mobile Pagination */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:hidden mt-12 pb-10"
          >
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              setCurrentPage={setCurrentPage} 
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContentsPage;