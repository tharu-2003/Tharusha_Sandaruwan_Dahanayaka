import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { contentData } from '../assets/datas/assets'; 
import { Navigation } from '../components/Navigation';
import { Pagination } from '../components/PaginationControls';
import { ContentPopup } from '../components/ContentPopup';

const VideoIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/></svg>
);

const PostIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2zM14 4v4h4" /></svg>
);

const ContentsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<"All" | "Post" | "Video">("All"); // NEW: Category state
  const itemsPerPage = 3;

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

  // 1. Updated Filter Logic
  const filteredContents = useMemo(() => {
    let results = [...contentData].reverse();

    if (activeCategory !== "All") {
      results = results.filter(item => item.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      );
    }

    return results;
  }, [searchQuery, activeCategory]);

  const totalPages = Math.ceil(filteredContents.length / itemsPerPage);
  
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredContents.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-black text-white p-5 sm:p-10 md:p-16 lg:p-20 font-sans selection:bg-[#ed6a3e]/30">
      <Navigation />
      <ContentPopup content={selectedContent} isOpen={isPopupOpen} onClose={closeContent} />

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 mt-20 lg:mt-3">
        
        {/* LEFT SIDE: Title, Search & Filter Buttons */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit space-y-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-black tracking-tighter leading-none uppercase">KNOWLEDGE</h1>
            <span className="ghost-text text-[#1a1a12] stroke-[#2a2a20] stroke-1 uppercase text-4xl sm:text-6xl lg:text-6xl font-black block">BASE</span>
          </motion.div>

          <div className="space-y-5">
            {/* Search Box */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <input 
                type="text"
                placeholder="Search archive..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                className="w-full bg-[#1a1a12] border border-[#2a2a20] rounded-2xl px-6 py-4 text-white focus:border-[#ed6a3e] outline-none transition-all"
              />
            </motion.div>

            {/* NEW: Filter Buttons (All, Post, Video) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-2 max-w-md"
            >
              {["All", "Post", "Video"].map((mode, index) => (
                <motion.button
                  key={mode}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveCategory(mode as any); 
                    setCurrentPage(1);
                  }}
                  className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                    activeCategory === mode
                      ? "bg-[#ed6a3e] border-[#ed6a3e] text-white shadow-lg shadow-[#ed6a3e]/20"
                      : "bg-[#1a1a12] border-[#2a2a20] text-gray-500 hover:border-gray-400 hover:text-gray-300"
                  }`}
                >
                  {mode}
                </motion.button>
              ))}
            </motion.div>
          </div>
          
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em]">
            Displaying {filteredContents.length} {activeCategory === "All" ? "" : activeCategory} items
          </motion.p>

          <div className="hidden lg:block">
            <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
          </div>
        </div>

        {/* RIGHT SIDE: Content List */}
        <div className="lg:w-2/3">
          {currentItems.length > 0 ? (
            <div className="flex flex-col">
              {currentItems.map((item, index) => (
                <motion.div key={item._id} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.15 }}>
                  <div onClick={() => openContent(item)} className="group flex items-start justify-between gap-4 sm:gap-10 py-10 border-b border-[#2a2a20] hover:border-[#ed6a3e]/40 transition-all duration-500 cursor-pointer">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-[#ed6a3e]">{item.category === "Video" ? <VideoIcon /> : <PostIcon />}</span>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black">{item.category}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#ed6a3e] transition-colors mb-3 uppercase tracking-tight">{item.title}</h3>
                      <p className="text-gray-500 text-sm sm:text-base leading-relaxed line-clamp-2 mb-6 group-hover:text-gray-400">{item.description}</p>
                      <div className="flex items-center gap-6 opacity-60">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.date}</span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.category === "Video" ? item.watchingTime : item.readTime}</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-[#2a2a20] flex items-center justify-center text-[#ed6a3e] group-hover:bg-[#ed6a3e] group-hover:text-white transition-all duration-500">
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 border border-dashed border-[#2a2a20] rounded-3xl"><p className="text-gray-600 uppercase tracking-widest font-black text-xs">No matching results found</p></div>
          )}

          <div className="lg:hidden mt-12 pb-10">
            <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentsPage;