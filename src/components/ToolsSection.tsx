import { Link, useNavigate } from "react-router-dom";

const tools = {
  frontend: [
    { name: "React", description: "Frontend Library", link: "#", icon: "../src/assets/images/react-icon.svg" },
    { name: "Expo", description: "React Native Platform", link: "#", icon: "../src/assets/images/expo-icon.png" },
    { name: "TypeScript", description: "Programming Language", link: "#", icon: "../src/assets/images/typescript-icon.svg" },
    { name: "JavaScript", description: "Programming Language", link: "#", icon: "../src/assets/images/javascript-icon.svg" },
    { name: "Tailwind CSS", description: "CSS Framework", link: "#", icon: "../src/assets/images/tailwind-icon.svg" },
    { name: "Bootstrap", description: "CSS Framework", link: "#", icon: "../src/assets/images/bootstrap-icon.svg" },
    { name: "HTML", description: "Markup Language", link: "#", icon: "../src/assets/images/html-icon.svg" },
    { name: "CSS", description: "Styling Language", link: "#", icon: "../src/assets/images/css-icon.svg" },
    { name: "Redux", description: "State Management", link: "#", icon: "../src/assets/images/redux-icon.svg" },
    { name: "jQuery", description: "JavaScript Library", link: "#", icon: "../src/assets/images/jquery-icon.svg" },
  ],
  backend: [
    { name: "Java", description: "Programming Language", link: "#", icon: "../src/assets/images/java-icon.svg" },
    { name: "Spring", description: "Java Framework", link: "#", icon: "../src/assets/images/spring-icon.svg" },
    { name: "Node.js", description: "Runtime Environment", link: "#", icon: "../src/assets/images/nodejs-icon.svg" },
    { name: "Express", description: "Node.js Framework", link: "#", icon: "../src/assets/images/express-icon.svg" },
    { name: "Python", description: "Programming Language", link: "#", icon: "../src/assets/images/python-icon.svg" },
    { name: "MongoDB", description: "NoSQL Database", link: "#", icon: "../src/assets/images/mongodb-icon.svg" },
    { name: "MySQL", description: "SQL Database", link: "#", icon: "../src/assets/images/mysql-icon.svg" },
    { name: "Docker", description: "Containerization", link: "#", icon: "../src/assets/images/docker-icon.svg" },
    { name: "Postman", description: "API Testing Tool", link: "#", icon: "../src/assets/images/postman-icon.svg" },
  ],
  tools: [
    { name: "IntelliJ IDEA", description: "Java IDE", link: "#", icon: "../src/assets/images/idea-icon.svg" },
    { name: "VS Code", description: "Code Editor", link: "#", icon: "../src/assets/images/vscode-icon.svg" },
    { name: "Figma", description: "Design Tool", link: "#", icon: "../src/assets/images/figma-icon.svg" },
    { name: "Git", description: "Version Control", link: "#", icon: "../src/assets/images/git-icon.svg" },
    { name: "GitHub", description: "Code Hosting", link: "#", icon: "../src/assets/images/github-icon.svg" },
    { name: "Canva", description: "Design Platform", link: "#", icon: "../src/assets/images/canva-icon.svg" },
  ],
};

export function ToolsSection() {
  const navigate = useNavigate();

  const renderToolGrid = (title: string, data: any[]) => (
    <div className="mb-20">
      <div className="flex items-center gap-4 mb-8 px-2">
        <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-widest italic">
          {title}
        </h3>
        <div className="h-px flex-1 bg-linear-to-r from-[#ed6a3e]/50 via-[#ed6a3e]/10 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {data.map((tool, index) => (
          <Link
            key={index}
            to={tool.link}
            className="group relative flex items-center gap-4 p-4 rounded-2xl bg-[#0a0a0a] border border-[#2a2a20] hover:border-[#ed6a3e]/40 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-[#ed6a3e]/5"
          >
            {/* Ambient Background Glow on Hover */}
            <div className="absolute inset-0 bg-linear-to-br from-[#ed6a3e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Icon Container - Always Colorful */}
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 flex items-center justify-center rounded-xl bg-[#1a1a12] border border-white/5 group-hover:border-[#ed6a3e]/20 transition-all duration-500 group-hover:scale-105 shadow-inner">
              <img 
                src={tool.icon} 
                alt={tool.name}
                // Grayscale classes ain kalaa - Defaultly colorful
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain transition-transform duration-500 group-hover:rotate-3"
              />
            </div>

            <div className="relative">
              <h4 className="text-base sm:text-lg font-black text-white group-hover:text-[#ed6a3e] transition-colors duration-300 uppercase tracking-tighter leading-none mb-1">
                {tool.name}
              </h4>
              <p className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest leading-tight">
                {tool.description}
              </p>
            </div>

            {/* Subtle Action Indicator */}
            <div className="absolute right-4 translate-x-2 opacity-0 group-hover:opacity-40 group-hover:translate-x-0 transition-all duration-500">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    
    <section id="tools" className="py-2 px-4 max-w-7xl mx-auto">
      {/* Main Title Section */}
      <div className="mb-8">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.8] uppercase">
          TECH
        </h2>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl ghost-text font-black text-[#1a1a12] stroke-[#2a2a20] stroke-1 tracking-tighter leading-[0.8] uppercase">
          STACK
        </h2>
      </div>

      {renderToolGrid("Frontend & Languages", tools.frontend)}
      {renderToolGrid("Backend & DevOps", tools.backend)}
      {renderToolGrid("Tools & IDEs", tools.tools)}

      {/* See All Projects Button */}
      <div className="mt-12 flex justify-center">
        <button 
          onClick={() => navigate('/tools')}
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
        </button>
      </div>
    </section>
  );
}