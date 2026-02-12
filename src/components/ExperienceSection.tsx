import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
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
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            // Click karama page ekata navigate wenna methana onClick damma
            onClick={() => navigate(`/experience-details/${exp._id}`)}
            className="group block pb-8 border-b border-[#2a2a20] hover:bg-[#1a1a12]/50 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="flex-1">
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                  className="text-[#ed6a3e] text-xs font-bold tracking-widest uppercase mb-2 block"
                >
                  {exp.period}
                </motion.span>
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                  className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#ed6a3e] transition-colors mb-2"
                >
                  {exp.company}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.4 }}
                  className="text-lg text-gray-300 font-medium mb-3"
                >
                  {exp.role}
                </motion.p>
                {/* Description Section with Line Clamp */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
                  className="text-sm sm:text-base text-gray-500 mb-6 max-w-2xl leading-relaxed line-clamp-3"
                >
                  {exp.description}
                </motion.p>
                
                {/* Skills Tags */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.6 }}
                  className="flex flex-wrap gap-2"
                >
                  {exp.skills.map((skill, sIndex) => (
                    <motion.span 
                      key={sIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.15 + 0.7 + sIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="text-[10px] px-3 py-1 border border-[#2a2a20] text-gray-400 rounded-full group-hover:border-[#ed6a3e]/30 group-hover:text-gray-300 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* Step Indicator */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                className="hidden md:block text-[#2a2a20] group-hover:text-[#ed6a3e] transition-colors"
              >
                <span className="text-4xl font-black">0{index + 1}</span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* See All Experience Button */}
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
        </motion.button>
      </motion.div>
    </section>
  );
}