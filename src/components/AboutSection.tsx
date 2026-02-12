import { Link } from "react-router-dom";
import { DashboardData } from "../assets/datas/assets";
import CVButton from "./CVButton"; 

const stats = [
  {
    value: `+${DashboardData.yearsOfExperience}`,
    label: "YEARS OF",
    sublabel: "EXPERIENCE",
  },
  {
    value: `+${DashboardData.projectsCount}`,
    label: "PROJECTS",
    sublabel: "COMPLETED",
  },
  {
    value: `+${DashboardData.technologiesCount}`,
    label: "MODERN",
    sublabel: "TECHNOLOGIES",
  },
];

export function AboutSection() {
  return (
    <section className="py-8 md:py-1">
      {/* Title */}
      <div className="mb-8 md:mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tighter leading-none">
          SOFTWARE
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl ghost-text font-black text-[#2a2a20] tracking-tight leading-tight uppercase">
          Engineer
        </h2>

        <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-lg mt-4 md:mt-6 leading-relaxed">
          Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
        </p>
      </div>

      {/* Stats & CV Button Wrapper */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 mb-12 md:mb-20">
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:flex sm:items-start gap-y-10 gap-x-6 sm:gap-8 md:gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 group-hover:text-[#ed6a3e] transition-colors duration-300">
                {stat.value}
              </div>
              
              <div className="space-y-0.5 sm:space-y-1">
                <div className="text-[10px] sm:text-[11px] lg:text-xs text-gray-400 font-bold tracking-[0.2em] uppercase leading-none">
                  {stat.label}
                </div>
                <div className="text-[9px] sm:text-[10px] lg:text-[11px] text-gray-600 font-medium tracking-widest uppercase leading-none">
                  {stat.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CV Button - Right side on Desktop */}
        <div className="w-full m-4 lg:w-auto shrink-0">
          <CVButton />
        </div>
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {/* Orange Card */}
        <Link 
          to="/experience" 
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-44 sm:h-52 bg-[#ed6a3e] group transition-transform hover:scale-[1.02] duration-300"
        >
          {/* Diagonal Pattern Background */}
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="orange-pattern"
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M0,50 L50,0 L100,50 L50,100 Z"
                    stroke="rgba(0,0,0,0.15)"
                    fill="none"
                    strokeWidth="2"
                  />
                  <circle cx="50" cy="50" r="30" stroke="rgba(0,0,0,0.1)" fill="none" strokeWidth="1.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#orange-pattern)" />
            </svg>
          </div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Icon */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4">
              <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            
            {/* Text */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight mb-auto">
              DYNAMIC ANIMATION,<br />MOTION DESIGN
            </h3>
            
            {/* Arrow Button */}
            <div className="flex justify-end">
              <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-white/50 transition-colors">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </Link>

        {/* Lime Card */}
        <Link 
          to="/projects" 
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-44 sm:h-52 bg-[#c4f445] group transition-transform hover:scale-[1.02] duration-300"
        >
          {/* Diagonal Pattern Background */}
          <div className="absolute inset-0 opacity-25">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="lime-pattern"
                  x="0"
                  y="0"
                  width="80"
                  height="80"
                  patternUnits="userSpaceOnUse"
                >
                  <line x1="0" y1="40" x2="80" y2="40" stroke="rgba(0,0,0,0.15)" strokeWidth="2"/>
                  <line x1="40" y1="0" x2="40" y2="80" stroke="rgba(0,0,0,0.15)" strokeWidth="2"/>
                  <circle cx="40" cy="40" r="25" stroke="rgba(0,0,0,0.1)" fill="none" strokeWidth="1.5"/>
                  <path d="M20,40 L40,20 L60,40 L40,60 Z" stroke="rgba(0,0,0,0.12)" fill="none" strokeWidth="1.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#lime-pattern)" />
            </svg>
          </div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Icon */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4">
              <svg viewBox="0 0 24 24" fill="#1a1a12" className="w-full h-full">
                <path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z" />
              </svg>
            </div>
            
            {/* Text */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1a1a12] leading-tight mb-auto">
              FRAMER, FIGMA,<br />WORDPRESS, REACTJS
            </h3>
            
            {/* Arrow Button */}
            <div className="flex justify-end">
              <div className="w-10 h-10 rounded-full border-2 border-[#1a1a12]/30 flex items-center justify-center group-hover:border-[#1a1a12]/50 transition-colors">
                <svg className="w-5 h-5 text-[#1a1a12]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}