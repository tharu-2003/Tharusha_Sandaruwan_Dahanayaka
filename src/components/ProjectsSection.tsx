import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../assets/datas/assets';

export interface Project {
    _id: string; 
    title: string;
    category: string; 
    description: string;
    image: string;   
    tags: string[];   
    links: {
        github: string;
        live?: string;
    };
}

export function ProjectsSection() {
  
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Array eke anthima items 3 ganna (-3 use karanna)
    setProjects(projectsData.slice(-3).reverse()); 
  }, []);

  return (
    <section id="projects" className="py-1 px-4">
      {/* Title */}
      <div className="mb-16">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight uppercase">
          RECENT
        </h2>
        <h2 className="text-3xl sm:text-6xl lg:text-7xl ghost-text font-black text-[#2a2a20] tracking-tight leading-tight uppercase">
          PROJECTS
        </h2>
      </div>

      {/* Projects List */}
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <div
            key={project._id}
            onClick={() => navigate(`/projects-details/${project._id}`)}
            className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 py-6 sm:py-8 border-b border-[#2a2a20] hover:border-[#ed6a3e]/30 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              {/* Project Image - Responsive size */}
              <div className="w-full sm:w-28 sm:h-28 md:w-32 md:h-32 aspect-video sm:aspect-square rounded-2xl overflow-hidden shrink-0 bg-[#1a1a12] shadow-lg border border-[#2a2a20]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
              </div>

              {/* Project Details */}
              <div className="flex-1">
                <span className="text-[10px] uppercase tracking-widest text-[#ed6a3e] font-bold mb-1 block">
                  {project.category}
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1.5 sm:mb-1 group-hover:text-[#ed6a3e] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 line-clamp-2 sm:line-clamp-1 max-w-xl mb-4 sm:mb-2">
                  {project.description}
                </p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, tIndex) => (
                    <span key={tIndex} className="text-[10px] text-gray-500 border border-[#2a2a20] px-2.5 py-1 rounded-md bg-[#0a0a0a]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Arrow Icon - Desktop wala vitharak lassanata penna hari, mobile eke size adjust kalaa */}
            <div className="self-end sm:self-center shrink-0 w-10 h-10 rounded-full border border-[#2a2a20] flex items-center justify-center text-[#ed6a3e] group-hover:bg-[#ed6a3e] group-hover:text-white transition-all duration-300">
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M7 17L17 7M17 7H7M17 7v10"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* See All Projects Button */}
      <div className="mt-12 flex justify-center">
        <button 
          onClick={() => navigate('/projects')}
          className="group relative px-8 py-4 bg-[#1a1a12] border border-[#2a2a20] rounded-full overflow-hidden transition-all duration-500 hover:border-[#ed6a3e]/50 shadow-xl"
        >
          {/* Hover highlight effect */}
          <div className="absolute inset-0 bg-[#ed6a3e] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          
          <div className="relative flex items-center gap-3">
            <span className="text-sm font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors duration-300">
              See All Projects
            </span>
            <svg 
              className="w-5 h-5 text-[#ed6a3e] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
}