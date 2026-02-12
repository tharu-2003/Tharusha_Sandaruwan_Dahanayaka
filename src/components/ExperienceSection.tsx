import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { experiencesData } from '../assets/datas/assets';
import { ExperiencePopup } from './ExperiencePopup';

export interface Experience {
    _id: string; 
    role: string;
    company: string;
    period: string;
    description: string;
    skills: string[];
    location: string;
    industry: string;
    mode: "Work" | "Education";
    priority: "High" | "Medium" | "Low"; 
    workModeStatements: string; 
    links: string; 
}

export function ExperienceSection() {
  const navigate = useNavigate();
  const [experiences, setExperiences] = useState<any[]>([]); // Any use kale interface eka update nisa

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

  useEffect(() => {
    // 1. මුලින්ම priority එක "High" අය පමණක් තෝරාගන්න
    const highPriorityExps = experiencesData.filter(exp => exp.priority === "High");
    
    // 2. අලුත්ම ඒවා උඩට එන ලෙස reverse කර අවසාන 3 ලබාගන්න
    // සටහන: Array එකේ අන්තිම 3 ගෙන reverse කිරීමෙන් අලුත්ම "High" priority ඒවා 3 ලැබේ.
    const latestHighPriority = [...highPriorityExps].reverse().slice(0, 3);
    
    setExperiences(latestHighPriority);
  }, []);

  return (
    <section id="experience" className="py-1 px-4">
      <ExperiencePopup 
        experience={selectedExp} 
        isOpen={isPopupOpen} 
        onClose={closePopup} 
      />

      {/* Title Section (දැනට ඇති පරිදිම පවතී) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-tight uppercase"
        >
          JOURNEY &
        </motion.h2>
        <motion.h2 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl sm:text-5xl lg:text-7xl font-black ghost-text text-[#2a2a20] tracking-tight leading-tight uppercase"
        >
          EXPERIENCE
        </motion.h2>
      </motion.div>

      {/* Experience List */}
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp._id} // index වෙනුවට අනන්‍ය _id එකක් පාවිච්චි කිරීම වඩාත් හොඳයි
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            onClick={() => openPopup(exp)}
            className="group block pb-8 border-b border-[#2a2a20] hover:bg-[#1a1a12]/50 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="flex-1">
                {/* Mode (Work/Education) Badge එකක් පෙන්වීම වැදගත් නිසා මෙතැනට එකතු කළා */}
                <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#ed6a3e] text-xs font-bold tracking-widest uppercase">
                    {exp.period}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 border border-[#2a2a20] text-gray-500 rounded uppercase font-black">
                    {exp.mode}
                    </span>
                </div>

                <motion.h3 
                  className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#ed6a3e] transition-colors mb-2"
                >
                  {exp.company}
                </motion.h3>
                <motion.p className="text-lg text-gray-300 font-medium mb-3">
                  {exp.role}
                </motion.p>
                
                <p className="text-sm sm:text-base text-gray-500 mb-6 max-w-2xl leading-relaxed line-clamp-3">
                  {exp.description}
                </p>
                
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill: string, sIndex: number) => (
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
          </motion.div>
        ))}
      </div>

      {/* See All Button (දැනට ඇති පරිදිම පවතී) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 flex justify-center"
      >
        <motion.button 
          onClick={() => navigate('/experience')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="group relative px-8 py-4 bg-[#1a1a12] border border-[#2a2a20] rounded-full overflow-hidden transition-all duration-500 hover:border-[#ed6a3e]/50 shadow-xl"
        >
          <div className="absolute inset-0 bg-[#ed6a3e] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          <div className="relative flex items-center gap-3">
            <span className="text-sm font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors duration-300">
              See All Experience
            </span>
            <svg className="w-5 h-5 text-[#ed6a3e] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </motion.button>
      </motion.div>
    </section>
  );
}