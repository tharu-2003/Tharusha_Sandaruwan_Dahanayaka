import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../assets/datas/assets';
import { Navigation } from '../components/Navigation';
import { Pagination } from '../components/PaginationControls';
import { ProjectPopup } from '../components/ProjectPopup';

const ProjectPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openProject = (project: any) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setIsPopupOpen(false);
    document.body.style.overflow = 'unset';
  };

  // 1. Categories List
  const quickFilters = [
    { label: "All", value: "" },
    { label: "Web", value: "Web" },
    { label: "Frontend", value: "Frontend" },
    { label: "Full Stack", value: "Full Stack" },
    { label: "Mobile", value: "Mobile" },
    { label: "Desktop", value: "Desktop" },
    { label: "Backend", value: "Backend" },
    { label: "Game", value: "Game" },
    { label: "Data", value: "Data Science Project" },
  ];

  // 2. Search Logic
  const filteredProjects = useMemo(() => {
    const reversed = [...projectsData].reverse();
    return reversed.filter(project => 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery]);

  // 3. Pagination Calculations
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

      <ProjectPopup 
        project={selectedProject} 
        isOpen={isPopupOpen} 
        onClose={closeProject} 
      />

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mt-20 lg:mt-3">
        
        {/* LEFT SIDE: Title, Search & Filters */}
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
              SELECTED
            </motion.h1>
            <motion.span 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="ghost-text text-[#1a1a12] stroke-[#2a2a20] stroke-1 text-4xl sm:text-6xl lg:text-6xl font-black block"
            >
              WORKS
            </motion.span>
          </motion.div>

          <div className="space-y-4">
            {/* Search Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative w-full max-w-md"
            >
              <input 
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full bg-[#1a1a12] border border-[#2a2a20] rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#ed6a3e] transition-all"
              />
            </motion.div>

            {/* Quick Filter Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-2 max-w-md overflow-x-auto no-scrollbar pb-2"
            >
              {quickFilters.map((filter, index) => (
                <motion.button
                  key={filter.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSearchQuery(filter.value);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                    (searchQuery === filter.value) || (filter.label === "All" && searchQuery === "")
                      ? "bg-[#ed6a3e] border-[#ed6a3e] text-white shadow-lg shadow-[#ed6a3e]/20"
                      : "bg-[#1a1a12] border-[#2a2a20] text-gray-500 hover:border-gray-400 hover:text-gray-300"
                  }`}
                >
                  {filter.label}
                </motion.button>
              ))}
            </motion.div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-gray-500 text-xs sm:text-sm font-medium uppercase tracking-[0.2em]"
          >
            Displaying {filteredProjects.length} results
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="hidden lg:block"
          >
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              setCurrentPage={setCurrentPage} 
            />
          </motion.div>
        </div>

        {/* RIGHT SIDE: Projects Grid */}
        <div className="lg:w-2/3">
          {currentProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {currentProjects.map((project, index) => (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => openProject(project)}
                  className="group relative cursor-pointer overflow-hidden rounded-3xl bg-[#1a1a12] border border-[#2a2a20] transition-all duration-500 hover:border-[#ed6a3e]/40 shadow-2xl h-60 sm:h-70 w-full"
                >
                  <div className="absolute inset-0 z-0">
                    <motion.img
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-30 group-hover:opacity-50"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
                  </div>

                  <div className="absolute inset-0 p-6 flex flex-col justify-between z-20">
                    <div className="flex justify-between items-start">
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                        className="px-3 py-1 rounded-2xl bg-black/40 backdrop-blur-md border border-white/5"
                      >
                        <span className="text-white text-[10px] font-black tracking-widest uppercase">
                          {project.category}
                        </span>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                    >
                      <h3 className="text-2xl font-black text-white uppercase tracking-tighter group-hover:tracking-wider transition-all duration-500 mb-3">
                        {project.title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <motion.span 
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 + 0.5 + i * 0.05 }}
                            className="text-[9px] text-gray-500 font-bold uppercase tracking-widest border-b border-[#2a2a20] group-hover:border-[#ed6a3e]/40 transition-colors"
                          >
                            {tag} {i !== project.tags.length - 1 ? "•" : ""}
                          </motion.span>
                        ))}
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
              className="text-center py-20 border border-dashed border-[#2a2a20] rounded-3xl"
            >
              <p className="text-gray-600 uppercase tracking-widest font-bold">No projects found.</p>
            </motion.div>
          )}

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

export default ProjectPage;