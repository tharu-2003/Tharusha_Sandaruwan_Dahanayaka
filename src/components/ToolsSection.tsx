import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toolsData } from "../assets/datas/assets";

export interface ToolItem {
  name: string;
  description: string;
  link: string;
  icon: string;
}

export interface ToolsDataType {
  frontend: ToolItem[];
  backend: ToolItem[];
  tools: ToolItem[];
}

export function ToolsSection() {
  const navigate = useNavigate();
  const MotionLink = motion(Link);
    
  const [tools, setTools] = useState<ToolsDataType | null>(null);

  useEffect(() => {
    // Array eke anthima items 3 ganna (-3 use karanna)
    setTools(toolsData); 
  }, []);

  const renderToolGrid = (title: string, data: any[], sectionIndex: number) => (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
      className="mb-20"
    >
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: sectionIndex * 0.1 + 0.2 }}
        className="flex items-center gap-4 mb-8 px-2"
      >
        <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-widest italic">
          {title}
        </h3>
        <div className="h-px flex-1 bg-linear-to-r from-[#ed6a3e]/50 via-[#ed6a3e]/10 to-transparent"></div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {data.map((tool, index) => (
          <MotionLink
            key={index}
            to={tool.link}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: sectionIndex * 0.1 + 0.3 + index * 0.05 }}
            whileHover={{ scale: 1.03, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex items-center gap-4 p-4 rounded-2xl bg-[#0a0a0a] border border-[#2a2a20] hover:border-[#ed6a3e]/40 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-[#ed6a3e]/5"
          >
            {/* Ambient Background Glow on Hover */}
            <div className="absolute inset-0 bg-linear-to-br from-[#ed6a3e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Icon Container - Always Colorful */}
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 flex items-center justify-center rounded-xl bg-[#1a1a12] border border-white/5 group-hover:border-[#ed6a3e]/20 transition-all duration-500 group-hover:scale-105 shadow-inner"
            >
              <img 
                src={tool.icon} 
                alt={tool.name}
                // Grayscale classes ain kalaa - Defaultly colorful
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain transition-transform duration-500 group-hover:rotate-3"
              />
            </motion.div>

            <div className="relative">
              <h4 className="text-base sm:text-lg font-black text-white group-hover:text-[#ed6a3e] transition-colors duration-300 uppercase tracking-tighter leading-none mb-1">
                {tool.name}
              </h4>
              <p className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest leading-tight">
                {tool.description}
              </p>
            </div>

            {/* Subtle Action Indicator */}
            <motion.div 
              initial={{ x: 10, opacity: 0 }}
              whileHover={{ x: 0, opacity: 0.4 }}
              transition={{ duration: 0.3 }}
              className="absolute right-4"
            >
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.div>
          </MotionLink>
        ))}
      </div>
    </motion.div>
  );

  return (
    
    <section id="tools" className="py-2 px-4 max-w-7xl mx-auto">
      {/* Main Title Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.8] uppercase"
        >
          TECH
        </motion.h2>
        <motion.h2 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl sm:text-6xl lg:text-7xl ghost-text font-black text-[#1a1a12] stroke-[#2a2a20] stroke-1 tracking-tighter leading-[0.8] uppercase"
        >
          STACK
        </motion.h2>
      </motion.div>

      {renderToolGrid("Frontend & Languages", tools?.frontend ?? [], 0)}
      {renderToolGrid("Backend & DevOps", tools?.backend ?? [], 1)}
      {renderToolGrid("Tools & IDEs", tools?.tools ?? [], 2)}


      {/* See All Projects Button */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 flex justify-center"
      >
        <motion.button 
          onClick={() => navigate('/tools')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="group relative px-8 py-4 bg-[#1a1a12] border border-[#2a2a20] rounded-full overflow-hidden transition-all duration-500 hover:border-[#ed6a3e]/50 shadow-xl"
        >
          {/* Hover highlight effect */}
          <div className="absolute inset-0 bg-[#ed6a3e] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          
          <div className="relative flex items-center gap-3">
            <span className="text-sm font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors duration-300">
              See All Tools
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