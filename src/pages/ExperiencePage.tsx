import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { experiencesData } from '../assets/datas/assets';
import { Navigation } from '../components/Navigation';
import { Pagination } from '../components/PaginationControls';
import { ExperiencePopup } from '../components/ExperiencePopup';

export interface Experience {
    _id: string; 
    role: string;
    company: string;
    period: string;
    description: string;
    image: string;
    skills: string[];
    location: string;
    industry: string;
    mode: "Work" | "Education";
    priority: "High" | "Medium" | "Low"; 
    workModeStatements: string; 
    links: string; 
}

const ExperiencePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMode, setActiveMode] = useState<"All" | "Work" | "Education">("All");
  const [activePriority, setActivePriority] = useState<"All" | "High" | "Medium" | "Low">("All");
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

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
    <div className="min-h-screen bg-black text-white p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 font-sans selection:bg-[#ed6a3e]/30">
      <Navigation />
      <ExperiencePopup experience={selectedExp} isOpen={isPopupOpen} onClose={closePopup} />

      {/* Main Container: Stacked on Mobile, Row on Desktop */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 mt-20 lg:mt-5">
        
        {/* LEFT SIDE: Controls */}
        <div className="lg:w-1/3 lg:sticky lg:top-24 h-fit space-y-4 sm:space-y-6 md:space-y-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-black tracking-tighter uppercase mb-1">JOURNEY &</h1>
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl ghost-text text-[#1a1a12] stroke-[#2a2a20] stroke-1 uppercase block leading-none">EXPERIENCE</span>
          </motion.div>

          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            {/* Search Box */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <input 
              type="text"
                placeholder="Search milestones..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                className="w-full bg-[#1a1a12] border border-[#2a2a20] rounded-xl sm:rounded-2xl px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-[#ed6a3e] transition-all"
            />
            </motion.div>

            {/* Mode Filters */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="flex flex-wrap gap-2">
              {["All", "Work", "Education"].map((mode) => (
                <button
                  key={mode}
                  onClick={() => { setActiveMode(mode as any); setCurrentPage(1); }}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest border transition-all ${
                    activeMode === mode ? "bg-[#ed6a3e] border-[#ed6a3e] text-white shadow-lg shadow-[#ed6a3e]/20" : "bg-[#1a1a12] border-[#2a2a20] text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {mode}
                </button>
              ))}
            </motion.div>

            {/* Priority Filter */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }} className="space-y-2 sm:space-y-3">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-600 ml-1">Sort by Priority</p>
              <div className="flex flex-wrap gap-2">
                {["All", "High", "Medium", "Low"].map((p) => (
                  <button
                    key={p}
                    onClick={() => { setActivePriority(p as any); setCurrentPage(1); }}
                    className={`px-3 sm:px-4 py-1.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest border transition-all ${
                      activePriority === p 
                      ? "bg-white border-white text-black shadow-lg shadow-white/10" 
                      : "bg-[#0a0a0a] border-[#1a1a12] text-gray-600 hover:border-gray-500"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </motion.div>
            </div>
          
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="text-gray-500 text-xs font-bold uppercase tracking-widest">
            {filteredExperiences.length} Milestones Found
          </motion.p>

          <div className="hidden lg:block pt-4">
            <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
          </div>
        </div>

        {/* RIGHT SIDE: Experience Grid */}
        <div className="lg:w-2/3">
          {currentItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              {currentItems.map((exp, index) => (
                <motion.div
                  key={exp._id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => openPopup(exp)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl bg-[#1a1a12] border border-[#2a2a20] transition-all duration-500 hover:border-[#ed6a3e]/40 shadow-2xl h-56 sm:h-64 md:h-70 w-full"
                >
                  {/* Background Layer */}
                  <div className="absolute inset-0 z-0">
                    <motion.img
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6 }}
                      src={exp.image} 
                      alt={exp.company}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-20 group-hover:opacity-40"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
                  </div>

                  {/* Priority Glow Animation */}
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute top-0 right-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 blur-[60px] sm:blur-[70px] md:blur-[80px] rounded-full z-10 ${
                    exp.priority === "High" ? "bg-[#ed6a3e]" : exp.priority === "Medium" ? "bg-blue-500" : "bg-gray-500"
                    }`} 
                  />

                  {/* Content Layer */}
                  <div className="absolute inset-0 p-4 sm:p-5 md:p-6 flex flex-col justify-between z-20">
                    <div className="flex justify-between items-start gap-2">
                      <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                        <span className="px-2.5 sm:px-3 py-1 rounded-xl sm:rounded-2xl bg-black/50 backdrop-blur-md border border-white/5 text-[#ed6a3e] text-[9px] sm:text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                        {exp.period}
                      </span>
                        <span className={`px-2.5 sm:px-3 py-1 rounded-xl sm:rounded-2xl bg-black/40 backdrop-blur-md border border-white/5 text-[8px] sm:text-[9px] font-bold uppercase tracking-widest ${
                          exp.priority === 'High' ? 'text-white' : 'text-gray-400'
                        }`}>
                          {exp.priority}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white uppercase tracking-tighter group-hover:tracking-wider transition-all duration-500 mb-1">
                        {exp.company}
                      </h3>
                      <p className="text-[#ed6a3e] font-medium italic text-[10px] sm:text-xs mb-2 sm:mb-3">
                        {exp.role}
                      </p>
                      
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {exp.skills.map((skill, i) => (
                          <span key={i} className="text-[8px] sm:text-[9px] text-gray-500 font-bold uppercase tracking-widest border-b border-[#2a2a20] group-hover:border-[#ed6a3e]/40 transition-colors">
                            {skill} {i !== exp.skills.length - 1 ? "•" : ""}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16 sm:py-20 md:py-24 border border-dashed border-[#2a2a20] rounded-2xl sm:rounded-3xl">
              <p className="text-gray-600 uppercase tracking-widest font-black text-xs">No matching milestones found.</p>
            </motion.div>
          )}

          <div className="lg:hidden mt-8 sm:mt-10 pb-8 sm:pb-10">
            <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;