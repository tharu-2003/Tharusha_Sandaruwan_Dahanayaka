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
        <Link to="/experience" className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-44 sm:h-52 bg-[#ed6a3e] group transition-transform hover:scale-[1.02] duration-300">
            {/* ... Pattern and Content ... */}
            <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">DYNAMIC ANIMATION, <br /> MOTION DESIGN</h3>
                {/* Arrow icon */}
            </div>
        </Link>

        {/* Lime Card */}
        <Link to="/projects" className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-44 sm:h-52 bg-[#c4f445] group transition-transform hover:scale-[1.02] duration-300">
            {/* ... Pattern and Content ... */}
            <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1a1a12] leading-tight">FRAMER, FIGMA, <br /> REACT</h3>
                {/* Arrow icon */}
            </div>
        </Link>
      </div>
    </section>
  );
}