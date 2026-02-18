import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { experiencesData } from '../assets/datas/assets';
import { ExperiencePopup } from './ExperiencePopup';

export interface Experience {
    _id: string; 
    role: string;
    company: string;
    title: string;
    period: string;
    description: string;
    skills: string[];
    location: string;
    industry: string;
    mode: "Work" | "Education";
    priority: "High" | "Medium" | "Low"; 
    workModeStatements: string; 
    links: string[]; 
}

export function ExperienceSection() {
  const navigate = useNavigate();
  const [experiences, setExperiences] = useState<any[]>([]);

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
    const highPriorityExps = experiencesData.filter(exp => exp.priority === "High");
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

      {/* Title Section */}
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
            key={exp._id} 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            onClick={() => openPopup(exp)}
            className="group block pb-8 border-b border-[#2a2a20] hover:bg-[#1a1a12]/50 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="flex-1">
                {/* Enhanced Header Badges */}
                <div className="flex items-center gap-2 mb-3">
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className="relative text-[#ed6a3e] text-xs font-bold tracking-widest uppercase px-3 py-1.5 bg-[#ed6a3e]/10 border border-[#ed6a3e]/30 rounded-lg overflow-hidden"
                  >
                    {/* Shimmer Effect */}
                    <motion.div
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
                    />
                    <span className="relative">{exp.period}</span>
                  </motion.span>
                  
                  <motion.span 
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className={`text-[10px] px-3 py-1.5 border rounded-lg font-black uppercase tracking-widest transition-all ${
                      exp.mode === "Work" 
                        ? "border-[#ed6a3e]/30 text-[#ed6a3e] bg-[#ed6a3e]/5" 
                        : "border-blue-500/30 text-blue-400 bg-blue-500/5"
                    }`}
                  >
                    {exp.mode}
                  </motion.span>

                  {/* Priority Indicator with Glow */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative"
                  >
                    <div className={`w-2 h-2 rounded-full ${
                      exp.priority === "High" ? "bg-[#ed6a3e]" : 
                      exp.priority === "Medium" ? "bg-blue-500" : "bg-gray-500"
                    }`}>
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`absolute inset-0 rounded-full ${
                          exp.priority === "High" ? "bg-[#ed6a3e]" : 
                          exp.priority === "Medium" ? "bg-blue-500" : "bg-gray-500"
                        }`}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Enhanced Title with Gradient on Hover */}
                <motion.h3 
                  whileHover={{ x: 4 }}
                  className="text-2xl sm:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-[#ed6a3e] group-hover:to-[#ff8c5a] group-hover:bg-clip-text transition-all duration-300 mb-2"
                >
                  {exp.title}
                </motion.h3>

                {/* Role with Icon */}
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-[#ed6a3e]/60 group-hover:text-[#ed6a3e] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <motion.p 
                    whileHover={{ x: 2 }}
                    className="text-lg text-gray-300 font-medium"
                  >
                    {exp.role}
                  </motion.p>
                </div>
                
                {/* Description */}
                <p className="text-sm sm:text-base text-gray-500 mb-4 max-w-2xl leading-relaxed line-clamp-3">
                  {exp.description}
                </p>

                {/* Company with Icon and Divider */}
                <div className="flex items-center gap-2 mb-5 pb-4 border-b border-[#2a2a20]/50">
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <motion.p 
                    whileHover={{ x: 2 }}
                    className="text-sm sm:text-base text-gray-500 font-medium"
                  >
                    @ {exp.company}
                  </motion.p>
                </div>
                
                {/* Enhanced Skills Tags */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="flex flex-wrap gap-2"
                >
                  {exp.skills.map((skill: string, sIndex: number) => (
                    <motion.span 
                      key={sIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.15 + 0.6 + sIndex * 0.05 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="relative text-[10px] px-3 py-1.5 border border-[#2a2a20] bg-[#0a0a0a] text-gray-400 rounded-full group-hover:border-[#ed6a3e]/30 group-hover:text-gray-300 transition-all duration-300 overflow-hidden"
                    >
                      {/* Gradient Background on Hover */}
                      <span className="absolute inset-0 bg-linear-to-r from-[#ed6a3e]/0 via-[#ed6a3e]/5 to-[#ed6a3e]/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="relative font-semibold uppercase tracking-wider">{skill}</span>
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* Enhanced Step Indicator */}
              <div className="hidden md:flex flex-col items-end gap-2">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-[#2a2a20] group-hover:text-[#ed6a3e] transition-colors relative"
                >
                  <span className="text-4xl font-black">0{index + 1}</span>
                  {/* Decorative Circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    className="absolute -inset-2 border border-[#2a2a20] group-hover:border-[#ed6a3e]/30 rounded-full -z-10 transition-colors"
                  />
                </motion.div>

                {/* Arrow with Circle */}
                <motion.div
                  whileHover={{ x: 4, scale: 1.1 }}
                  className="w-10 h-10 rounded-full border border-[#2a2a20] group-hover:border-[#ed6a3e] group-hover:bg-[#ed6a3e] flex items-center justify-center transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Enhanced See All Button */}
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
          {/* Sliding Background */}
          <div className="absolute inset-0 bg-[#ed6a3e] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          
          {/* Shine Effect */}
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12"
          />
          
          <div className="relative flex items-center gap-3">
            <span className="text-sm font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors duration-300">
              See All Experience
            </span>
            <motion.svg 
              whileHover={{ x: 4 }}
              className="w-5 h-5 text-[#ed6a3e] group-hover:text-white transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </div>
        </motion.button>
      </motion.div>
    </section>
  );
}