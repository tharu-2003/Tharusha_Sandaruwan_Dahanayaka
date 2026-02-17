import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '../components/Navigation';
import { toolsData } from '../assets/datas/assets';

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

const quickFilters = [
  { label: "All",      value: "All"      },
  { label: "Frontend", value: "Frontend" },
  { label: "Backend",  value: "Backend"  },
  { label: "Tools",    value: "Tools"    },
];

const ToolPage = () => {
  const [searchQuery, setSearchQuery]     = useState("");
  const [activeFilter, setActiveFilter]   = useState("All");
  const [tools, setTools]                 = useState<ToolsDataType | null>(null);

  useEffect(() => {
    setTools(toolsData);
  }, []);

  const handleSearch = (data: any[]) =>
    data.filter(tool =>
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // Determine which sections are visible based on the active filter
  const show = (section: "Frontend" | "Backend" | "Tools") =>
    activeFilter === "All" || activeFilter === section;

  const renderSection = (title: string, data: any[], sectionIndex: number) => {
    const filteredData = handleSearch(data);
    if (filteredData.length === 0) return null;

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
        className="mb-16"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: sectionIndex * 0.2 + 0.2 }}
          className="flex items-center gap-4 mb-8 px-2"
        >
          <h3 className="text-lg sm:text-xl font-black text-white uppercase italic tracking-widest">{title}</h3>
          <div className="h-px flex-1 bg-linear-to-r from-[#ed6a3e]/40 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredData.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative flex items-center gap-4 p-4 rounded-2xl bg-[#0a0a0a] border border-[#2a2a20] hover:border-[#ed6a3e]/30 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#ed6a3e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative w-12 h-12 sm:w-16 sm:h-16 shrink-0 flex items-center justify-center rounded-xl bg-[#1a1a12] border border-white/5 group-hover:border-[#ed6a3e]/20 transition-all duration-500"
              >
                <img src={tool.icon} alt={tool.name} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                className="relative"
              >
                <h4 className="text-base sm:text-lg font-black text-white group-hover:text-[#ed6a3e] transition-colors uppercase tracking-tighter leading-none mb-1">{tool.name}</h4>
                <p className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest">{tool.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white p-5 sm:p-10 md:p-16 lg:p-20 font-sans">
      <Navigation />

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 mt-20 lg:mt-3">

        {/* LEFT SIDE: Title, Search & Filters */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit space-y-8">

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none uppercase"
            >
              TECH
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl sm:text-7xl lg:text-8xl ghost-text font-black text-[#1a1a12] stroke-[#2a2a20] stroke-1 tracking-tighter leading-none uppercase"
            >
              STACK
            </motion.h2>
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
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1a1a12] border border-[#2a2a20] rounded-2xl px-6 py-4 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-[#ed6a3e] transition-all"
              />
            </motion.div>

            {/* Quick Filter Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-2 max-w-md"
            >
              {quickFilters.map((filter, index) => (
                <motion.button
                  key={filter.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                    activeFilter === filter.value
                      ? "bg-[#ed6a3e] border-[#ed6a3e] text-white shadow-lg shadow-[#ed6a3e]/20"
                      : "bg-[#1a1a12] border-[#2a2a20] text-gray-500 hover:border-gray-400 hover:text-gray-300"
                  }`}
                >
                  {filter.label}
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Result count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-gray-500 text-xs sm:text-sm font-medium uppercase tracking-[0.2em]"
          >
            {[
              show("Frontend") ? (tools?.frontend ?? []) : [],
              show("Backend")  ? (tools?.backend  ?? []) : [],
              show("Tools")    ? (tools?.tools    ?? []) : [],
            ]
              .flat()
              .filter(t =>
                t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                t.description.toLowerCase().includes(searchQuery.toLowerCase())
              ).length}{" "}
            tools found
          </motion.p>
        </div>

        {/* RIGHT SIDE: Tools Sections */}
        <div className="w-full lg:w-2/3">
          {show("Frontend") && renderSection("Frontend & Mobile", tools?.frontend ?? [], 0)}
          {show("Backend")  && renderSection("Backend & Systems",  tools?.backend  ?? [], 1)}
          {show("Tools")    && renderSection("Development Tools",  tools?.tools    ?? [], 2)}
        </div>
      </div>
    </div>
  );
};

export default ToolPage;