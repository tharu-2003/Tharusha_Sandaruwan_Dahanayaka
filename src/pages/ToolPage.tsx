import { useState } from 'react';

import { Navigation } from '../components/Navigation';

// Data tika categories walata wen karala thiyaganna
const toolsData = {
  frontend: [
    { name: "React", description: "Frontend Library", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Expo", description: "Mobile Platform", icon: "https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg" },
    { name: "TypeScript", description: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Tailwind CSS", description: "CSS Framework", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "Redux", description: "State Management", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  ],
  backend: [
    { name: "Java", description: "Programming Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Spring", description: "Java Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "Node.js", description: "Runtime", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MySQL", description: "SQL Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", description: "NoSQL Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  ],
  tools: [
    { name: "VS Code", description: "Editor", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "GitHub", description: "Version Control", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Figma", description: "Design Tool", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Docker", description: "Containers", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  ]
};

const ToolPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Search filter logic
  const handleSearch = (data: any[]) => {
    return data.filter(tool => 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const renderSection = (title: string, data: any[]) => {
    const filteredData = handleSearch(data);
    if (filteredData.length === 0) return null;

    return (
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-8 px-2">
          <h3 className="text-lg sm:text-xl font-black text-white uppercase italic tracking-widest">{title}</h3>
          <div className="h-px flex-1 bg-linear-to-r from-[#ed6a3e]/40 to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredData.map((tool, index) => (
            <div
              key={index}
              className="group relative flex items-center gap-4 p-4 rounded-2xl bg-[#0a0a0a] border border-[#2a2a20] hover:border-[#ed6a3e]/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#ed6a3e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 shrink-0 flex items-center justify-center rounded-xl bg-[#1a1a12] border border-white/5 group-hover:border-[#ed6a3e]/20 transition-all duration-500 group-hover:scale-105">
                <img src={tool.icon} alt={tool.name} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
              </div>
              <div className="relative">
                <h4 className="text-base sm:text-lg font-black text-white group-hover:text-[#ed6a3e] transition-colors uppercase tracking-tighter leading-none mb-1">{tool.name}</h4>
                <p className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white p-5 sm:p-10 md:p-16 lg:p-20 font-sans">
      <Navigation />

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 mt-20 lg:mt-3">
        {/* LEFT SIDE: Title & Search */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit space-y-8">
          <div>
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none uppercase">TECH</h2>
            <h2 className="text-6xl sm:text-7xl lg:text-8xl ghost-text font-black text-[#1a1a12] stroke-[#2a2a20] stroke-1 tracking-tighter leading-none uppercase">STACK</h2>
          </div>

          <div className="relative w-full max-w-md">
            <input 
              type="text"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1a1a12] border border-[#2a2a20] rounded-2xl px-6 py-4 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-[#ed6a3e] transition-all"
            />
          </div>
        </div>

        {/* RIGHT SIDE: Tools Grid */}
        <div className="w-full lg:w-2/3">
          {renderSection("Frontend & Mobile", toolsData.frontend)}
          {renderSection("Backend & Systems", toolsData.backend)}
          {renderSection("Development Tools", toolsData.tools)}
        </div>
      </div>
    </div>
  );
};

export default ToolPage;