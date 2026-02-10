import { Link } from "react-router-dom";

const stats = [
  { value: "+1", label: "YEARS OF", sublabel: "EXPERIENCE" },
  { value: "+15", label: "PROJECTS", sublabel: "COMPLETED" },
  { value: "+20", label: "WORLDWIDE", sublabel: "CLIENTS" },
];

export function AboutSection() {
  return (
    <section className="py-8 md:py-16">
      {/* Title */}
      <div className="mb-8 md:mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tighter leading-none">
          SOFTWARE
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl ghost-text font-black text-[#2a2a20] tracking-tight leading-tight">
          ENGINEER
        </h2>

        <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-lg mt-4 md:mt-6 leading-relaxed">
          Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
        </p>
      </div>

      {/* Stats */}
      <div className="flex items-start gap-6 sm:gap-8 md:gap-12 lg:gap-20 mb-8 md:mb-16">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-1 md:mb-2">
              {stat.value}
            </div>
            <div className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs text-gray-500 tracking-wider leading-tight uppercase">
              {stat.label}
            </div>
            <div className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs text-gray-500 tracking-wider leading-tight uppercase">
              {stat.sublabel}
            </div>
          </div>
        ))}
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {/* Orange Card */}
        <Link
          to="/experience"
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-44 sm:h-52 bg-[#ed6a3e] group transition-transform hover:scale-[1.02] duration-300"
        >
          {/* Geometric Pattern */}
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

          <div className="relative z-10 flex flex-col h-full">
            <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4">
              <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">
              DYNAMIC ANIMATION,
              <br />
              MOTION DESIGN
            </h3>

            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 border-2 border-white/40 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </Link>

        {/* Lime Card */}
        <Link
          to="/projects"
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-44 sm:h-52 bg-[#c4f445] group transition-transform hover:scale-[1.02] duration-300"
        >
          {/* Geometric Pattern */}
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

          <div className="relative z-10 flex flex-col h-full">
            <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4">
              <svg viewBox="0 0 24 24" fill="#1a1a12" className="w-full h-full">
                <path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1a1a12] leading-tight">
              FRAMER, FIGMA,
              <br />
              REACT
            </h3>

            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 border-2 border-black/40 rounded-lg flex items-center justify-center group-hover:bg-black/10 transition-colors">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}