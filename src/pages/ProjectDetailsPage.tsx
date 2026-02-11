import  { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

const ProjectDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [project, setProject] = useState<Project | undefined>(undefined);

  useEffect(()=>{
    setProject(projectsData.find((p) => p._id === id ))
  },[id])

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Project Not Found</h1>
        <button onClick={() => navigate('/')} className="mt-4 text-[#ed6a3e]">Go Home</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 sm:p-12 lg:p-20 font-sans">
      {/* Back Navigation */}
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 text-gray-500 hover:text-[#ed6a3e] transition-all mb-10 group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Page
      </button>

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <span className="text-[#ed6a3e] font-bold tracking-widest text-sm uppercase block mb-4">
            {project.category}
          </span>
          <h1 className="text-3xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none mb-6">
            {project.title}
          </h1>
          
          {/* Links Section */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a 
              href={project.links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-[#ed6a3e] hover:text-white transition-all"
            >
              GitHub Repository
            </a>
            {project.links.live && (
              <a 
                href={project.links.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 border border-white/20 text-white font-bold rounded-full hover:border-[#ed6a3e] hover:text-[#ed6a3e] transition-all"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="flex justify-center mb-16 px-4"> 
          {/* Width eka 'max-w-md' walata adu kara, Height eka 'h-[450px]' walata wedi kara */}
          <div className="w-full max-w-md h-50 sm:h-75 rounded-3xl overflow-hidden bg-[#1a1a12] shadow-2xl border border-[#2a2a20]">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-500"
            />
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 border-t border-[#2a2a20] pt-16">
          <div className="lg:col-span-2">
            <h3 className="text-gray-600 uppercase tracking-widest text-xs font-bold mb-6">About the project</h3>
            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed font-medium">
              {project.description}
            </p>
          </div>

          <div className="space-y-10">
            {/* Tech Stack */}
            <div>
              <h3 className="text-gray-600 uppercase tracking-widest text-xs font-bold mb-6">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-[#1a1a12] border border-[#2a2a20] text-gray-400 rounded-xl text-sm font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Platform Information */}
            <div>
              <h3 className="text-gray-600 uppercase tracking-widest text-xs font-bold mb-4">Role</h3>
              <p className="text-white font-medium">Lead Developer / Student at IJSE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;