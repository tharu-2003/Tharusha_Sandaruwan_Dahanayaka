// import Link from "next/link";
import { Link } from "react-router-dom";

const contents = [
    {
        _id: "1", // Content ekata unique identifier ekak damma
        title: "How to Build a Real-time Chat App",
        description:
        "Me video eken mama kiyala denawa React saha Firebase use karala real-time chat application ekak hadana widiya step-by-step.",
        date: "Feb 11, 2026",
        category: "Video",
        watchingTime: "18min watch",
        link: "https://youtube.com/your-video-link",
    },
    {
        _id: "2",
        title: "My Experience with Java and Spring Boot",
        description:
        "Software engineering igena ganna kenekuta Java backend development kiyanne godak watina skill ekak. Me mage experience eka.",
        date: "Feb 08, 2026",
        category: "Post",
        readTime: "6min read",
        link: "/blog/java-experience",
    },
    {
        _id: "3",
        title: "React Native Debugging Tips",
        description:
        "React Native apps develop karaddi ena common errors saha ewa solve karaganna lesima widi me video eken balanna puluwan.",
        date: "Jan 30, 2026",
        category: "Video",
        watchingTime: "12min watch",
        link: "https://youtube.com/debugging-video",
    },
];

export function ContentsSection() {
  return (
    <section id="contents" className="py-1 px-4">
      {/* Title */}
      <div className="mb-10">
        <h2 className="text-2xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
          KNOWLEDGE
        </h2>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl ghost-text font-black text-[#2a2a20] tracking-tight leading-tight">
          BASE
        </h2>
      </div>

      {/* Blog Posts & Videos */}
      <div className="space-y-0">
        {contents.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="flex items-start justify-between gap-6 group py-8 border-b border-[#2a2a20] hover:border-[#ed6a3e]/30 transition-all duration-300"
          >
            <div className="flex-1">
              {/* Category Tag (Optional) */}
              <span className="text-[10px] uppercase tracking-widest text-[#ed6a3e] font-bold mb-2 block">
                {item.category}
              </span>
              
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#ed6a3e] transition-colors mb-3">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4 leading-relaxed max-w-xl">
                {item.description}
              </p>
              <div className="flex items-center gap-6">
                <span className="text-xs sm:text-sm text-gray-500">{item.date}</span>
                {/* Check category and show Watching Time or Read Time */}
                <span className="text-xs sm:text-sm text-gray-500">
                  {item.category === "Video" ? item.watchingTime : item.readTime}
                </span>
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