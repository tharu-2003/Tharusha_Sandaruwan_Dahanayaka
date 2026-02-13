import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { experiencesData } from '../assets/datas/assets';
import { Navigation } from '../components/Navigation';
import { Pagination } from '../components/PaginationControls';
import { ExperiencePopup } from '../components/ExperiencePopup';

const ExperiencePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMode, setActiveMode] = useState<"All" | "Work" | "Education">("All");
  const [activePriority, setActivePriority] = useState<"All" | "High" | "Medium" | "Low">("All");
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; 

  const [selectedExp, setSelectedExp] = useState<any>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = (exp: any) => {
    setSelectedExp(exp);
    setIsPopupOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    document.body.style.overflow = 'unset';
  };

  const filteredExperiences = useMemo(() => {
    let results = [...experiencesData];
    const priorityOrder: Record<string, number> = { "High": 1, "Medium": 2, "Low": 3 };

    if (activeMode !== "All") {
      results = results.filter(exp => exp.mode === activeMode);
    }

    if (activePriority !== "All") {
      results = results.filter(exp => exp.priority === activePriority);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(exp => 
        exp.company.toLowerCase().includes(query) ||
        exp.role.toLowerCase().includes(query) ||
        exp.skills.some(skill => skill.toLowerCase().includes(query))
      );
    }

    return results.sort((a, b) => {
      const priorityDiff = priorityOrder[a.priority] - priorityOrder[b.priority];
      if (priorityDiff !== 0) return priorityDiff;
      return b._id.localeCompare(a._id); 
    });
  }, [searchQuery, activeMode, activePriority]);

  const totalPages = Math.ceil(filteredExperiences.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredExperiences.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-black text-white p-6 sm:p-12 lg:p-20 font-sans">
      <Navigation />
      <ExperiencePopup experience={selectedExp} isOpen={isPopupOpen} onClose={closePopup} />

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-56 mt-4">
        
        {/* LEFT SIDE: Controls */}
        <div className="lg:w-1/3 lg:sticky lg:top-24 h-fit space-y-8">
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
              className="text-5xl sm:text-7xl font-black tracking-tighter uppercase mb-2"
            >
              MY
            </motion.h1>
            <motion.span 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl sm:text-7xl lg:text-8xl ghost-text text-[#1a1a12] stroke-[#2a2a20] stroke-1 uppercase block"
            >
              JOURNEY
            </motion.span>
          </motion.div>

          <div className="space-y-6">
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
                className="w-full bg-[#1a1a12] border border-[#2a2a20] rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#ed6a3e] transition-all"
              />
            </motion.div>

            {/* Mode Filters (Work/Education) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {["All", "Work", "Education"].map((mode, index) => (
                <motion.button
                  key={mode}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { setActiveMode(mode as any); setCurrentPage(1); }}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
                    activeMode === mode ? "bg-[#ed6a3e] border-[#ed6a3e] text-white" : "bg-[#1a1a12] border-[#2a2a20] text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {mode}
                </motion.button>
              ))}
            </motion.div>

            {/* Priority Filter Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="space-y-2"
            >
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-600 ml-1">Filter by Priority</p>
              <div className="flex flex-wrap gap-2">
                {["All", "High", "Medium", "Low"].map((p, index) => (
                  <motion.button
                    key={p}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => { setActivePriority(p as any); setCurrentPage(1); }}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
                      activePriority === p 
                      ? "bg-white border-white text-black shadow-lg shadow-white/10" 
                      : "bg-[#0a0a0a] border-[#1a1a12] text-gray-600 hover:border-gray-500"
                    }`}
                  >
                    {p}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-gray-500 text-xs font-bold uppercase tracking-widest"
          >
            {filteredExperiences.length} Results Found
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="hidden lg:block pt-4"
          >
            <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
          </motion.div>
        </div>

        {/* RIGHT SIDE: List */}
        <div className="lg:w-2/3">
          {currentItems.length > 0 ? (
            <div className="grid grid-cols-1 gap-8">
              {currentItems.map((exp, index) => (
                <motion.div
                  key={exp._id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openPopup(exp)}
                  className="group relative cursor-pointer overflow-hidden rounded-3xl bg-[#0a0a0a] border border-[#2a2a20] transition-all duration-500 hover:border-[#ed6a3e]/40 shadow-2xl h-60 w-full max-w-137.5"
                >
                  <motion.div 
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute top-0 right-0 w-32 h-32 blur-[80px] rounded-full ${
                      exp.priority === "High" ? "bg-[#ed6a3e]" : exp.priority === "Medium" ? "bg-blue-500" : "bg-gray-500"
                    }`} 
                  />

                  <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                    <div className="flex justify-between items-start">
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                        className="flex gap-2"
                      >
                        <span className="px-3 py-1 rounded-md bg-black/60 border border-white/5 text-[#ed6a3e] text-[10px] font-black uppercase tracking-widest">
                          {exp.period}
                        </span>
                        <motion.span 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.15 + 0.3, type: "spring" }}
                          className={`px-3 py-1 rounded-md bg-black/40 border border-white/5 text-[9px] font-bold uppercase tracking-widest ${
                            exp.priority === 'High' ? 'text-white' : 'text-gray-500'
                          }`}
                        >
                          {exp.priority}
                        </motion.span>
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                        className="text-3xl font-black text-[#1a1a12] stroke-[#2a2a20] stroke-1"
                      >
                        0{indexOfFirstItem + index + 1}
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                    >
                      <h3 className="text-2xl sm:text-3xl font-black text-white uppercase group-hover:text-[#ed6a3e] transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-gray-400 italic text-sm">{exp.role}</p>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.4 }}
                      className="flex flex-wrap gap-2"
                    >
                      {exp.skills.map((skill: string, i: number) => (
                        <motion.span 
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.15 + 0.5 + i * 0.05 }}
                          className="text-[10px] text-gray-500 font-bold uppercase tracking-widest border-b border-[#2a2a20]"
                        >
                          {skill} {i !== exp.skills.length - 1 ? "|" : ""}
                        </motion.span>
                      ))}
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
              className="text-center py-20 border border-dashed border-[#2a2a20] rounded-3xl"
            >
              <p className="text-gray-600 uppercase tracking-widest font-bold">No results matching your filters.</p>
            </motion.div>
          )}

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:hidden mt-10"
          >
            <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;