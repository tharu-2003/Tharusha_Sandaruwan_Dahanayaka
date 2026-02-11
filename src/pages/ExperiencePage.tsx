import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { experiencesData } from '../assets/datas/assets';
import { Navigation } from '../components/Navigation';
import { Pagination } from '../components/PaginationControls';

const ExperiencePage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; 

  // 1. Search Logic: Year, Company, Role saha Skills walin filter wenawa
  const filteredExperiences = useMemo(() => {
    const reversed = [...experiencesData].reverse();
    
    if (!searchQuery.trim()) return reversed;

    return reversed.filter(exp => {
      const query = searchQuery.toLowerCase();
      return (
        exp.company.toLowerCase().includes(query) ||
        exp.role.toLowerCase().includes(query) ||
        exp.period.toLowerCase().includes(query) ||
        exp.skills.some(skill => skill.toLowerCase().includes(query))
      );
    });
  }, [searchQuery]);

  // 2. Pagination Calculations
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

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-56 mt-4">
        
        {/* LEFT SIDE: Title & Search */}
        <div className="lg:w-1/3 lg:sticky lg:top-24 h-fit">
          <h1 className="text-5xl sm:text-7xl lg:text-7xl font-black tracking-tighter leading-none uppercase mb-10">
            MY <br />
            <span className="text-5xl sm:text-7xl lg:text-8xl ghost-text text-[#1a1a12] stroke-[#2a2a20] stroke-1 uppercase">JOURNEY</span>
          </h1>

          {/* Search Box */}
          <div className="mb-8">
             <input 
              type="text"
              placeholder="Search by year, company or role..."
              value={searchQuery}
              onChange={(e) => { 
                setSearchQuery(e.target.value); 
                setCurrentPage(1); 
              }}
              className="w-full bg-[#1a1a12] border border-[#2a2a20] rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#ed6a3e] transition-all"
            />
          </div>
          
          <p className="mt-6 text-gray-500 text-sm font-medium uppercase tracking-widest mb-10">
            {filteredExperiences.length} Milestones Recorded
          </p>

          {/* Pagination CALL (Desktop View) */}
          <div className="hidden lg:block">
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              setCurrentPage={setCurrentPage} 
            />
          </div>
        </div>

        {/* RIGHT SIDE: Experience List */}
        <div className="lg:w-2/3">
          {currentItems.length > 0 ? (
            <div className="grid grid-cols-1 gap-8">
              {currentItems.map((exp, index) => (
                <div
                  key={exp._id}
                  onClick={() => navigate(`/experience-details/${exp._id}`)}
                  className="group relative cursor-pointer overflow-hidden rounded-3xl bg-[#0a0a0a] border border-[#2a2a20] transition-all duration-500 hover:border-[#ed6a3e]/40 shadow-2xl h-60 sm:h-65 w-full max-w-137.5"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent pointer-events-none opacity-40 z-10" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#ed6a3e]/5 blur-[80px] rounded-full" />

                  <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                    <div className="flex justify-between items-start">
                      <div className="px-3 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/5">
                        <span className="text-[#ed6a3e] text-[10px] font-black tracking-widest uppercase">
                          {exp.period}
                        </span>
                      </div>
                      <div className="text-3xl font-black text-[#1a1a12] stroke-[#2a2a20] stroke-1">
                        0{indexOfFirstItem + index + 1}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter group-hover:text-[#ed6a3e] transition-colors duration-500">
                        {exp.company}
                      </h3>
                      <p className="text-gray-400 font-medium italic text-sm sm:text-base">
                        {exp.role}
                      </p>
                    </div>

                    <div className="flex justify-between items-end">
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
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
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-[#2a2a20] rounded-3xl">
               <p className="text-gray-600 uppercase tracking-widest font-bold">No results found.</p>
            </div>
          )}

          {/* Pagination CALL (Mobile View) */}
          <div className="lg:hidden mt-12 mb-10">
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

export default ExperiencePage;