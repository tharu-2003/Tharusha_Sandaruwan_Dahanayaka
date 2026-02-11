import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../assets/datas/assets';
import { Navigation } from '../components/Navigation';
import { Pagination } from '../components/PaginationControls';


const ProjectPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // 1. Search Logic
  const filteredProjects = useMemo(() => {
    const reversed = [...projectsData].reverse();
    return reversed.filter(project => 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery]);

  // 2. Pagination Calculations
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-black text-white p-5 sm:p-10 md:p-16 lg:p-20 font-sans selection:bg-[#ed6a3e]/30">
      <Navigation />

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mt-20 lg:mt-3">
        
        {/* LEFT SIDE: Title & Search */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit space-y-8">
          <div>
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-black tracking-tighter leading-none uppercase">
              SELECTED <br />
              <span className="ghost-text text-[#1a1a12] stroke-[#2a2a20] stroke-1">WORKS</span>
            </h1>
          </div>

          <div className="relative w-full max-w-md">
            <input 
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full bg-[#1a1a12] border border-[#2a2a20] rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#ed6a3e] transition-all"
            />
          </div>
          
          <p className="text-gray-500 text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">
            Displaying {filteredProjects.length} results
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

        {/* RIGHT SIDE: Projects Grid */}
        <div className="lg:w-2/3">
          {currentProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {currentProjects.map((project) => (
                <div
                  key={project._id}
                  onClick={() => navigate(`/projects-details/${project._id}`)}
                  className="group relative cursor-pointer overflow-hidden rounded-3xl bg-[#1a1a12] border border-[#2a2a20] transition-all duration-500 hover:border-[#ed6a3e]/40 shadow-2xl h-[240px] sm:h-[280px] w-full"
                >
                  <div className="absolute inset-0 z-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-30 group-hover:opacity-50"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
                  </div>

                  <div className="absolute inset-0 p-6 flex flex-col justify-between z-20">
                    <div className="flex justify-between items-start">
                      <div className="px-3 py-1 rounded-2xl bg-black/40 backdrop-blur-md border border-white/5">
                        <span className="text-white text-[10px] font-black tracking-widest uppercase">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter group-hover:tracking-wider transition-all duration-500">
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-[#2a2a20] rounded-3xl">
              <p className="text-gray-600 uppercase tracking-widest font-bold">No projects found.</p>
            </div>
          )}

          {/* Pagination CALL (Mobile View) */}
          <div className="lg:hidden mt-12 pb-10">
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              setCurrentPage={setCurrentPage} 
            />
          </div>
        </div>
      </div>

      <footer className="mt-32 border-t border-[#2a2a20] pt-20 text-center pb-10">
        <h2 onClick={() => navigate('/contact')} className="text-4xl sm:text-6xl font-black text-white hover:text-[#ed6a3e] cursor-pointer transition-all duration-500 uppercase italic">
          Let's Build Together →
        </h2>
      </footer>
    </div>
  );
};

export default ProjectPage;