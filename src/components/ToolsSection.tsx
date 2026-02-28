import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toolsData } from "../assets/datas/assets";
import { IconGlobe } from "./IconGlobe";

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
  const [tools, setTools] = useState<ToolsDataType | null>(null);

  useEffect(() => {
    setTools(toolsData);
  }, []);

  // සියලුම tools එකම array එකකට එකතු කිරීම
  const allTools = useMemo(() => {
    if (!tools) return [];
    return [...tools.frontend, ...tools.backend, ...tools.tools];
  }, [tools]);

  return (
    <section id="tools" className="py-24 px-4 max-w-7xl mx-auto overflow-hidden">
      {/* Main Title Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
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

      {/* ── ICON GLOBE ── */}
      <IconGlobe icons={allTools.map((t) => t.icon)} speed={1} />

      {/* See All Tools Button */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20 flex justify-center"
      >
        <motion.button 
          onClick={() => navigate('/tools')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="group relative px-8 py-4 bg-[#1a1a12] border border-[#2a2a20] rounded-full overflow-hidden transition-all duration-500 hover:border-[#ed6a3e]/50 shadow-xl"
        >
          <div className="absolute inset-0 bg-[#ed6a3e] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12"
          />

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