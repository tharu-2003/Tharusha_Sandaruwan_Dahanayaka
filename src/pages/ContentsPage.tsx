import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { contentData } from '../assets/datas/assets'; 
import { Navigation } from '../components/Navigation';
import { Pagination } from '../components/PaginationControls';
import { ContentPopup } from '../components/ContentPopup';

export interface Content {
    _id: string; 
    title: string;
    description: string;
    date: string;
    category: "Video" | "Post"; 
    link: string;
    noteImage?: string;
    watchingTime?: string; 
    readTime?: string;    
}

const VideoIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/></svg>
);

const PostIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2zM14 4v4h4" /></svg>
);

const ContentsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<"All" | "Post" | "Video">("All");
  const itemsPerPage = 4;

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

  const filteredContents = useMemo(() => {
    let results = [...contentData].reverse();
    if (activeCategory !== "All") results = results.filter(item => item.category === activeCategory);
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      );
    }
    return results;
  }, [searchQuery, activeCategory]);

  const totalPages = Math.ceil(filteredContents.length / itemsPerPage);
  const currentItems = filteredContents.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 font-sans selection:bg-[#ed6a3e]/30">
      <Navigation />
      <ContentPopup content={selectedContent} isOpen={isPopupOpen} onClose={closeContent} />

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 mt-20 lg:mt-5">
        
        {/* LEFT SIDE: Title & Filters */}
        <div className="lg:w-1/3 lg:sticky lg:top-24 h-fit space-y-4 sm:space-y-6 md:space-y-8">

          {/* Title: outer y-fade → h1 slides from left → span slides from right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase mb-1"
            >
              KNOWLEDGE
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl ghost-text text-[#1a1a12] stroke-[#2a2a20] stroke-1 uppercase block leading-none"
            >
              BASE
            </motion.span>
          </motion.div>

          <div className="space-y-3 sm:space-y-4 md:space-y-6">

            {/* Search Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <input 
                type="text"
                placeholder="Search archive..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                className="w-full bg-[#1a1a12] border border-[#2a2a20] rounded-xl sm:rounded-2xl px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base text-white focus:border-[#ed6a3e] outline-none transition-all"
              />
            </motion.div>

            {/* Category Filter Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {(["All", "Post", "Video"] as const).map((mode, index) => (
                <motion.button
                  key={mode}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { setActiveCategory(mode); setCurrentPage(1); }}
                  className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest border transition-all duration-300 ${
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
          
          {/* Result count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-gray-500 text-xs font-bold uppercase tracking-widest"
          >
            {filteredContents.length} items found
          </motion.p>

          {/* Desktop Pagination */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="hidden lg:block pt-4"
          >
            <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
          </motion.div>
        </div>

        {/* RIGHT SIDE: Content Grid */}
        <div className="lg:w-2/3">
          {currentItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              {currentItems.map((item, index) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => openContent(item)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl bg-[#43433e] border border-[#74746b] transition-all duration-500 hover:border-[#ed6a3e]/40 shadow-2xl h-56 sm:h-64 md:h-70 w-full"
                >
                  {/* Background Image — scale 1.1→1 on mount + zoom on hover */}
                  <div className="absolute inset-0 z-0">
                    <motion.img
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                      src={
                        item.category === "Video" 
                          ? `https://img.youtube.com/vi/${
                              item.link.includes("youtu.be/") 
                                ? item.link.split("youtu.be/")[1].split("?")[0] 
                                : item.link.includes("v=") 
                                  ? item.link.split("v=")[1].split("&")[0] 
                                  : item.link.split("embed/")[1]?.split("?")[0]
                            }/maxresdefault.jpg` 
                          : item.noteImage || 'https://via.placeholder.com/600x400/1a1a12/ffffff?text=Note'
                      }
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-20 group-hover:opacity-40"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (item.category === "Video" && !target.src.includes('mqdefault')) {
                          target.src = target.src.replace('maxresdefault', 'mqdefault');
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
                  </div>

                  {/* Glow */}
                  <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 blur-[60px] sm:blur-[80px] rounded-full z-10 opacity-20 ${item.category === "Video" ? "bg-red-500" : "bg-[#ed6a3e]"}`} />

                  {/* Content */}
                  <div className="absolute inset-0 p-4 sm:p-5 md:p-6 flex flex-col justify-between z-20">

                    {/* Top badges — slide in from left */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                      className="flex justify-between items-start gap-2"
                    >
                      <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                        <span className="px-2.5 sm:px-3 py-1 rounded-xl sm:rounded-2xl bg-black/50 backdrop-blur-md border border-white/5 text-[#ed6a3e] text-[9px] sm:text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 sm:gap-2">
                          {item.category === "Video" ? <VideoIcon /> : <PostIcon />}
                          {item.category}
                        </span>
                        <span className="px-2.5 sm:px-3 py-1 rounded-xl sm:rounded-2xl bg-black/40 border border-white/5 text-[8px] sm:text-[9px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">{item.date}</span>
                      </div>
                    </motion.div>

                    {/* Bottom content — slide up */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                    >
                      <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white uppercase tracking-tighter group-hover:tracking-wider transition-all duration-500 mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-[10px] sm:text-xs mb-3 sm:mb-4 line-clamp-2 leading-relaxed">{item.description}</p>
                      
                      <div className="flex items-center justify-between pt-2 border-t border-white/5">
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                          className="text-[9px] sm:text-[10px] text-[#ed6a3e] font-black uppercase tracking-widest"
                        >
                          {item.category === "Video" ? item.watchingTime : item.readTime}
                        </motion.span>
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#ed6a3e] transition-all">
                          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </div>
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
              className="text-center py-16 sm:py-20 md:py-24 border border-dashed border-[#2a2a20] rounded-2xl sm:rounded-3xl"
            >
              <p className="text-gray-600 uppercase tracking-widest font-black text-xs">No matching results found.</p>
            </motion.div>
          )}

          {/* Mobile Pagination */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:hidden mt-8 sm:mt-10 pb-8 sm:pb-10"
          >
            <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContentsPage;