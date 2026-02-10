// import Link from "next/link";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Damas",
    description: "Free Framer Template",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
    link: "#",
  },
  {
    title: "Bayt",
    description: "Real Estate Framer Template",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop",
    link: "#",
  },
  {
    title: "NajmAI",
    description: "SaaS Framer Template",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop",
    link: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-4">
      {/* Title */}
      <div className="mb-16">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
          RECENT
        </h2>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl ghost-text font-black text-[#2a2a20] tracking-tight leading-tight">
          PROJECTS
        </h2>
      </div>

      {/* Projects List */}
      <div className="space-y-0">
        {projects.map((project, index) => (
          <Link
            key={index}
            to={project.link}
            className="flex items-center justify-between gap-3 sm:gap-6 group py-6 sm:py-8 border-b border-[#2a2a20] hover:border-[#ed6a3e]/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 sm:gap-6">
              <div className="w-16 h-16 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0 bg-white shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-2xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1 group-hover:text-[#ed6a3e] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-500">{project.description}</p>
              </div>
            </div>

            {/* Arrow Icon */}
            <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[#ed6a3e] group-hover:bg-[#ed6a3e] group-hover:text-white transition-all duration-300">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M7 17L17 7M17 7H7M17 7v10"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}