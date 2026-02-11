import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { experiencesData } from '../assets/datas/assets';

export interface Experience {
    _id: string; 
    role: string;
    company: string;
    period: string;
    description: string;
    skills: string[]; 
}

export function ExperienceSection() {
  const navigate = useNavigate();
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    // Array eke anthima items 3 ganna (-3 use karanna)
    setExperiences(experiencesData.slice(-3).reverse()); 
  }, []);
  
  return (
    <section id="experience" className="py-1 px-4">
      {/* Title */}
      <div className="mb-12">
        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-tight uppercase">
          JOURNEY &
        </h2>
        <h2 className="text-2xl sm:text-5xl lg:text-7xl font-black ghost-text text-[#2a2a20] tracking-tight leading-tight uppercase">
          EXPERIENCE
        </h2>
      </div>

      {/* Experience List */}
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            // Click karama page ekata navigate wenna methana onClick damma
            onClick={() => navigate(`/experience-details/${exp._id}`)}
            className="group block pb-8 border-b border-[#2a2a20] hover:bg-[#1a1a12]/50 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="flex-1">
                <span className="text-[#ed6a3e] text-xs font-bold tracking-widest uppercase mb-2 block">
                  {exp.period}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#ed6a3e] transition-colors mb-2">
                  {exp.company}
                </h3>
                <p className="text-lg text-gray-300 font-medium mb-3">
                  {exp.role}
                </p>
                {/* Description Section with Line Clamp */}
                <p className="text-sm sm:text-base text-gray-500 mb-6 max-w-2xl leading-relaxed line-clamp-3">
                  {exp.description}
                </p>
                
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, sIndex) => (
                    <span 
                      key={sIndex}
                      className="text-[10px] px-3 py-1 border border-[#2a2a20] text-gray-400 rounded-full group-hover:border-[#ed6a3e]/30 group-hover:text-gray-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Step Indicator */}
              <div className="hidden md:block text-[#2a2a20] group-hover:text-[#ed6a3e] transition-colors">
                <span className="text-4xl font-black">0{index + 1}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See All Experience Button */}
      <div className="mt-12 flex justify-center">
        <button 
          onClick={() => navigate('/experience')}
          className="group relative px-8 py-4 bg-[#1a1a12] border border-[#2a2a20] rounded-full overflow-hidden transition-all duration-500 hover:border-[#ed6a3e]/50 shadow-xl"
        >
          {/* Hover highlight effect */}
          <div className="absolute inset-0 bg-[#ed6a3e] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          
          <div className="relative flex items-center gap-3">
            <span className="text-sm font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors duration-300">
              See All Experience
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