

// import Link from "next/link";
import { Link } from "react-router-dom";


const experiences = [
  {
    company: "PixelForge Studios",
    role: "Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement.",
    period: "Jan 2020 - Present",
  },
  {
    company: "BlueWave Innovators",
    role: "Developed and implemented design strategies for new product lines, collaborated closely with engineers and product managers.",
    period: "Jun 2017 - Dec 2019",
  },
  {
    company: "TrendCraft Solutions",
    role: "Designed user interfaces for e-commerce platforms, focusing on enhancing usability and visual appeal.",
    period: "Mar 2015 - May 2017",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16">
      {/* Title */}
      <div className="mb-12">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight">
          12 YEARS OF
        </h2>
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black ghost-text tracking-tight">
          EXPERIENCE
        </h2>
      </div>

      {/* Experience List */}
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Link
            key={index}
            to="#"
            className="block group hover:bg-[#1a1a12] p-6 rounded-xl transition-colors duration-300"
          >
            <h3 className="text-lg font-semibold text-white group-hover:text-[#ed6a3e] transition-colors mb-2">
              {exp.company}
            </h3>
            <p className="text-sm text-gray-400 mb-3 leading-relaxed">
              {exp.role}
            </p>
            <span className="text-xs text-gray-500">{exp.period}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
