// import Link from "next/link";
import { Link } from "react-router-dom";

const tools = {
  frontend: [
    {
      name: "React",
      description: "Frontend Library",
      link: "#",
      icon: "https://skillicons.dev/icons?i=react",
    },
    {
      name: "TypeScript",
      description: "Programming Language",
      link: "#",
      icon: "https://skillicons.dev/icons?i=typescript",
    },
    {
      name: "JavaScript",
      description: "Programming Language",
      link: "#",
      icon: "https://skillicons.dev/icons?i=javascript",
    },
    {
      name: "Tailwind CSS",
      description: "CSS Framework",
      link: "#",
      icon: "https://skillicons.dev/icons?i=tailwind",
    },
    {
      name: "Bootstrap",
      description: "CSS Framework",
      link: "#",
      icon: "https://skillicons.dev/icons?i=bootstrap",
    },
    {
      name: "HTML",
      description: "Markup Language",
      link: "#",
      icon: "https://skillicons.dev/icons?i=html",
    },
    {
      name: "CSS",
      description: "Styling Language",
      link: "#",
      icon: "https://skillicons.dev/icons?i=css",
    },
    {
      name: "Redux",
      description: "State Management",
      link: "#",
      icon: "https://skillicons.dev/icons?i=redux",
    },
    {
      name: "jQuery",
      description: "JavaScript Library",
      link: "#",
      icon: "https://skillicons.dev/icons?i=jquery",
    },
  ],
  backend: [
    {
      name: "Java",
      description: "Programming Language",
      link: "#",
      icon: "https://skillicons.dev/icons?i=java",
    },
    {
      name: "Spring",
      description: "Java Framework",
      link: "#",
      icon: "https://skillicons.dev/icons?i=spring",
    },
    {
      name: "Node.js",
      description: "Runtime Environment",
      link: "#",
      icon: "https://skillicons.dev/icons?i=nodejs",
    },
    {
      name: "Express",
      description: "Node.js Framework",
      link: "#",
      icon: "https://skillicons.dev/icons?i=express",
    },
    {
      name: "Python",
      description: "Programming Language",
      link: "#",
      icon: "https://skillicons.dev/icons?i=python",
    },
    {
      name: "MongoDB",
      description: "NoSQL Database",
      link: "#",
      icon: "https://skillicons.dev/icons?i=mongodb",
    },
    {
      name: "MySQL",
      description: "SQL Database",
      link: "#",
      icon: "https://skillicons.dev/icons?i=mysql",
    },
    {
      name: "Docker",
      description: "Containerization",
      link: "#",
      icon: "https://skillicons.dev/icons?i=docker",
    },
  ],
  tools: [
    {
      name: "IntelliJ IDEA",
      description: "Java IDE",
      link: "#",
      icon: "https://skillicons.dev/icons?i=idea",
    },
    {
      name: "VS Code",
      description: "Code Editor",
      link: "#",
      icon: "https://skillicons.dev/icons?i=vscode",
    },
    {
      name: "Figma",
      description: "Design Tool",
      link: "#",
      icon: "https://skillicons.dev/icons?i=figma",
    },
    {
      name: "Git",
      description: "Version Control",
      link: "#",
      icon: "https://skillicons.dev/icons?i=git",
    },
    {
      name: "GitHub",
      description: "Code Hosting",
      link: "#",
      icon: "https://skillicons.dev/icons?i=github",
    },
  ],
};

export function ToolsSection() {
  return (
    <section id="tools" className="py-1 px-4">
      {/* Title */}
      <div className="mb-16">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
          TECH
        </h2>
        <h2 className="text-5xl sm:text-6xl lg:text-7xl ghost-text font-black text-[#2a2a20] tracking-tight leading-tight">
          STACK
        </h2>
      </div>

      {/* Frontend & Languages */}
      <div className="mb-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Frontend & Languages
        </h3>

        {/* Simple gradient line */}
        <div className="h-px bg-linear-to-r from-transparent via-white/30 to-transparent mb-6"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.frontend.map((tool, index) => (
            <Link
              key={index}
              to={tool.link}
              className="flex items-center gap-4 group hover:bg-[#1a1a12]/50 p-2 rounded-xl transition-all duration-300"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                <img 
                  src={tool.icon} 
                  alt={tool.name}
                  className="w-14 h-14 sm:w-16 sm:h-16"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#ed6a3e] transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">{tool.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Backend & DevOps */}
      <div className="mb-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Backend & DevOps
        </h3>

        {/* Simple gradient line */}
        <div className="h-px bg-linear-to-r from-transparent via-white/30 to-transparent mb-6"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.backend.map((tool, index) => (
            <Link
              key={index}
              to={tool.link}
              className="flex items-center gap-4 group hover:bg-[#1a1a12]/50 p-2 rounded-xl transition-all duration-300"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                <img 
                  src={tool.icon} 
                  alt={tool.name}
                  className="w-14 h-14 sm:w-16 sm:h-16"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#ed6a3e] transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">{tool.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tools & IDEs */}
      <div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Tools & IDEs
        </h3>

        {/* Simple gradient line */}
        <div className="h-px bg-linear-to-r from-transparent via-white/30 to-transparent mb-6"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.tools.map((tool, index) => (
            <Link
              key={index}
              to={tool.link}
              className="flex items-center gap-4 group hover:bg-[#1a1a12]/50 p-2 rounded-xl transition-all duration-300"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                <img 
                  src={tool.icon} 
                  alt={tool.name}
                  className="w-14 h-14 sm:w-16 sm:h-16"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#ed6a3e] transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">{tool.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}