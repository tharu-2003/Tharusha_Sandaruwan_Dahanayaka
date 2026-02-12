import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { experiencesData } from '../assets/datas/assets';
import { Navigation } from '../components/Navigation';
import { Pagination } from '../components/PaginationControls';
import { ExperiencePopup } from '../components/ExperiencePopup';

const ExperiencePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMode, setActiveMode] = useState<"All" | "Work" | "Education">("All");
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

  // --- Priority Sorting Logic ---
  const filteredExperiences = useMemo(() => {
    // 1. මුලින්ම දත්ත Copy කරගන්න
    let results = [...experiencesData];

    // 2. Priority වලට අගයන් ලබාදීම (Sorting සඳහා)
    const priorityOrder: Record<string, number> = {
      "High": 1,
      "Medium": 2,
      "Low": 3
    };

    // 3. Mode අනුව Filter කිරීම (Work/Education)
    if (activeMode !== "All") {
      results = results.filter(exp => exp.mode === activeMode);
    }

    // 4. Search Query එක අනුව Filter කිරීම
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(exp => 
        exp.company.toLowerCase().includes(query) ||
        exp.role.toLowerCase().includes(query) ||
        exp.period.toLowerCase().includes(query) ||
        exp.skills.some(skill => skill.toLowerCase().includes(query))
      );
    }

    // 5. අවසාන පියවර: Priority අනුව Sort කිරීම (High ප්‍රමුඛතාවය මුලට)
    // සමාන Priority ඇත්නම් ID එක අනුව අලුත්ම එක පෙන්වයි
    return results.sort((a, b) => {
      const priorityDiff = priorityOrder[a.priority] - priorityOrder[b.priority];
      if (priorityDiff !== 0) return priorityDiff;
      return b._id.localeCompare(a._id); // Secondary sort by latest ID
    });
  }, [searchQuery, activeMode]);

  // Pagination calculations
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

      <ExperiencePopup 
        experience={selectedExp} 
        isOpen={isPopupOpen} 
        onClose={closePopup} 
      />

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-56 mt-4">
        
        {/* LEFT SIDE: Title & Search */}
        <div className="lg:w-1/3 lg:sticky lg:top-24 h-fit">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <motion.h1 className="text-5xl sm:text-7xl lg:text-7xl font-black tracking-tighter leading-none uppercase mb-2">MY</motion.h1>
            <motion.span className="text-5xl sm:text-7xl lg:text-8xl ghost-text text-[#1a1a12] stroke-[#2a2a20] stroke-1 uppercase block mb-10">JOURNEY</motion.span>
          </motion.div>

          {/* Search Box */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mb-8">
            <input 
              type="text"
              placeholder="Search by company or skill..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
              className="w-full bg-[#1a1a12] border border-[#2a2a20] rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#ed6a3e] transition-all"
            />
          </motion.div>

          {/* Quick Filter Buttons */}
          <motion.div className="flex flex-wrap gap-2 max-w-md overflow-x-auto no-scrollbar pb-2">
            {["All", "Work", "Education"].map((mode) => (
              <motion.button
                key={mode}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setActiveMode(mode as any); setCurrentPage(1); }}
                className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${
                  activeMode === mode ? "bg-[#ed6a3e] border-[#ed6a3e] text-white shadow-lg" : "bg-[#1a1a12] border-[#2a2a20] text-gray-500"
                }`}
              >
                {mode}
              </motion.button>
            ))}
          </motion.div>
          
          <motion.p className="mt-6 text-gray-500 text-sm font-medium uppercase tracking-widest mb-10">
            {filteredExperiences.length} Milestones | Sorted by Priority
          </motion.p>

          <div className="hidden lg:block">
            <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
          </div>
        </div>

        {/* RIGHT SIDE: Experience List */}
        <div className="lg:w-2/3">
          {currentItems.length > 0 ? (
            <div className="grid grid-cols-1 gap-8">
              {currentItems.map((exp, index) => (
                <motion.div
                  key={exp._id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                  onClick={() => openPopup(exp)}
                  className="group relative cursor-pointer overflow-hidden rounded-3xl bg-[#0a0a0a] border border-[#2a2a20] transition-all duration-500 hover:border-[#ed6a3e]/40 shadow-2xl h-60 sm:h-65 w-full max-w-137.5"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent pointer-events-none opacity-40 z-10" />
                  
                  {/* Dynamic Glow: Priority අනුව වෙනස් වේ */}
                  <div className={`absolute top-0 right-0 w-32 h-32 blur-[80px] rounded-full ${
                    exp.priority === "High" ? "bg-[#ed6a3e]/20" : 
                    exp.priority === "Medium" ? "bg-white/5" : "bg-transparent"
                  }`} />

                  <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                    <div className="flex justify-between items-start">
                      <div className="flex gap-2">
                        <div className="px-3 py-1 rounded-md bg-black/60 border border-white/5">
                          <span className="text-[#ed6a3e] text-[10px] font-black tracking-widest uppercase">{exp.period}</span>
                        </div>
                        {/* Priority Badge */}
                        <div className={`px-3 py-1 rounded-md bg-black/40 border border-white/5`}>
                           <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">{exp.priority} Priority</span>
                        </div>
                      </div>
                      <div className="text-3xl font-black text-[#1a1a12] stroke-[#2a2a20] stroke-1">
                        0{indexOfFirstItem + index + 1}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter group-hover:text-[#ed6a3e] transition-colors">{exp.company}</h3>
                      <p className="text-gray-400 font-medium italic text-sm sm:text-base">{exp.role}</p>
                    </div>

                    <div className="flex justify-between items-end">
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill: string, i: number) => (
                          <span key={i} className="text-[10px] text-gray-500 font-bold uppercase tracking-widest border-b border-[#2a2a20]">
                            {skill} {i !== exp.skills.length - 1 ? " |" : ""}
                          </span>
                        ))}
                      </div>
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#ed6a3e] transition-all">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-[#2a2a20] rounded-3xl">
              <p className="text-gray-600 uppercase tracking-widest font-bold">No matching results found.</p>
            </div>
          )}

          <div className="lg:hidden mt-12 mb-10">
            <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;