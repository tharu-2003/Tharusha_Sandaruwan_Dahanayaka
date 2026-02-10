// import Link from "next/link";
import { Link } from "react-router-dom";

const thoughts = [
  {
    title: "Starting and Growing a Career in Web Design",
    excerpt:
      "As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development.",
    date: "Apr 8, 2022",
    readTime: "6min read",
    link: "#",
  },
  {
    title: "Create a Landing Page That Performs Great",
    excerpt:
      "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales—in other words they help you increase your revenue.",
    date: "Mar 15, 2022",
    readTime: "6min read",
    link: "#",
  },
  {
    title: "How Can Designers Prepare for the Future?",
    excerpt:
      "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales—in other words they help you increase your revenue.",
    date: "Feb 28, 2022",
    readTime: "6min read",
    link: "#",
  },
];

export function ThoughtsSection() {
  return (
    <section id="thoughts" className="py-16 px-4">
      {/* Title */}
      <div className="mb-16">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
          DESIGN
        </h2>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl ghost-text font-black text-[#2a2a20] tracking-tight leading-tight">
          THOUGHTS
        </h2>
      </div>

      {/* Blog Posts */}
      <div className="space-y-0">
        {thoughts.map((thought, index) => (
          <Link
            key={index}
            to={thought.link}
            className="flex items-start justify-between gap-6 group py-8 border-b border-[#2a2a20] hover:border-[#ed6a3e]/30 transition-all duration-300"
          >
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#ed6a3e] transition-colors mb-3">
                {thought.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4 leading-relaxed max-w-xl">
                {thought.excerpt}
              </p>
              <div className="flex items-center gap-6">
                <span className="text-xs sm:text-sm text-gray-500">{thought.date}</span>
                <span className="text-xs sm:text-sm text-gray-500">{thought.readTime}</span>
              </div>
            </div>

            {/* Arrow Icon */}
            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-[#ed6a3e] group-hover:bg-[#ed6a3e] group-hover:text-white transition-all duration-300">
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
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