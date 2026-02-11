import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { contentData } from '../assets/datas/assets'; 
import { Navigation } from '../components/Navigation';
import { Pagination } from '../components/PaginationControls';

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
  const itemsPerPage = 3; // 3 n 3nata slice wenawa

  // 1. Filter & Reverse Logic
  // Mulinma reverse karala ita passe filter karana eka thamaa hari kramaaya
  const filteredContents = useMemo(() => {
    const reversedData = [...contentData].reverse();
    // const reversedData = [...contentData].reverse();
    
    if (!searchQuery.trim()) return reversedData;

    return reversedData.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // 2. Pagination Calculations
  const totalPages = Math.ceil(filteredContents.length / itemsPerPage);
  
  // Current page eka total pages walata wada wedi nam (search nisa results adu unama) page 1 ta reset karanawa
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
  // Me page ekata adalawa pennanna ona items 3 vitharak slice karagannawa
  const currentItems = useMemo(() => {
    return filteredContents.slice(indexOfFirstItem, indexOfLastItem);
  }, [filteredContents, indexOfFirstItem, indexOfLastItem]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-black text-white p-5 sm:p-10 md:p-16 lg:p-20 font-sans selection:bg-[#ed6a3e]/30">
      <Navigation />

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 mt-20 lg:mt-3">
        
        {/* LEFT SIDE: Title & Search */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit space-y-8">
          <div>
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-black tracking-tighter leading-none uppercase">
              KNOWLEDGE <br />
              <span className="ghost-text text-[#1a1a12] stroke-[#2a2a20] stroke-1 uppercase">BASE</span>
            </h1>
          </div>

          <div className="relative w-full max-w-md">
            <input 
              type="text"
              placeholder="Search archive..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1); // Search karaddi page 1 ta yanna ona
              }}
              className="w-full bg-[#1a1a12] border border-[#2a2a20] rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#ed6a3e] transition-all"
            />
          </div>
          
          <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em]">
            Found {filteredContents.length} Shared Resources
          </p>

          {/* Desktop Pagination */}
          <div className="hidden lg:block">
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              setCurrentPage={setCurrentPage} 
            />
          </div>
        </div>

        {/* RIGHT SIDE: Content List (3 per page) */}
        <div className="lg:w-2/3">
          {currentItems.length > 0 ? (
            <div className="flex flex-col">
              {currentItems.map((item) => (
                <Link
                  key={item._id}
                  to={item.link}
                  target={item.category === "Video" ? "_blank" : "_self"}
                  className="group flex items-start justify-between gap-4 sm:gap-10 py-10 border-b border-[#2a2a20] hover:border-[#ed6a3e]/40 transition-all duration-500"
                >
                  <div className="flex-1">
                    {/* Category & Icon */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[#ed6a3e] group-hover:scale-110 transition-transform duration-300">
                        {item.category === "Video" ? <VideoIcon /> : <PostIcon />}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black">
                        {item.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#ed6a3e] transition-colors duration-300 mb-3 tracking-tight uppercase">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl mb-6 line-clamp-2 group-hover:text-gray-400 transition-colors">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-6 opacity-60">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.date}</span>
                      <span className="w-1 h-1 bg-[#2a2a20] rounded-full"></span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        {item.category === "Video" ? item.watchingTime : item.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Action Icon */}
                  <div className="mt-2">
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
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 border border-dashed border-[#2a2a20] rounded-3xl bg-[#0a0a0a]">
              <p className="text-gray-600 uppercase tracking-widest font-black text-xs">No matching results found</p>
            </div>
          )}

          {/* Mobile Pagination */}
          <div className="lg:hidden mt-12 pb-10">
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              setCurrentPage={setCurrentPage} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentsPage;