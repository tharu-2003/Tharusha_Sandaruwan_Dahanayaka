import { Link } from "react-router-dom";

export function SidebarProfile() {
  

  return (
    <div className="relative bg-white rounded-4xl p-6 overflow-hidden flex flex-col items-center max-w-sm">
      {/* Decorative Dashed Line - Top Left */}
      <svg className="absolute top-0 left-0 w-24 h-24" viewBox="0 0 120 120">
        <path 
          d="M10,120 Q40,60 80,40 T120,0" 
          stroke="#ed6a3e" 
          strokeWidth="3" 
          strokeDasharray="12 8" 
          fill="none" 
        />
      </svg>

      {/* Decorative Dashed Line - Bottom Right */}
      <svg className="absolute bottom-0 right-0 w-24 h-24" viewBox="0 0 120 120">
        <path 
          d="M110,0 Q80,60 40,80 T0,120" 
          stroke="#ed6a3e" 
          strokeWidth="3" 
          strokeDasharray="12 8" 
          fill="none" 
        />
      </svg>

      <div className="flex flex-col items-center text-center relative z-10">
        {/* Profile Image */}
        <div className="relative w-48 h-60 mb-4 rounded-2xl overflow-hidden">
          <img
            src="../src/assets/images/myProfile.png"
            alt="Tharusha Sandaruwan"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-2xl font-bold text-black mb-1">
          Tharusha
        </h1>
        <div className="flex items-center gap-2 mb-4">
          <h1 className="text-2xl font-bold text-black">
            Sandaruwan
          </h1>
          {/* Fire Icon */}
          <div className="w-8 h-8 bg-[#ed6a3e] rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-xs leading-relaxed max-w-xs mb-6">
          Full Stack Developer | MERN Stack | Python | Java • Spring Boot • React | UI/UX & Data Analytics
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          {/* GitHub */}
          <a
            href="https://github.com/tharu-2003"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#ed6a3e] hover:bg-[#ed6a3e] hover:text-white transition-all duration-200"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/tharusha-sandaruwan-dahanayaka/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#ed6a3e] hover:bg-[#ed6a3e] hover:text-white transition-all duration-200"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@tharusha_sandaruwan"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#ed6a3e] hover:bg-[#ed6a3e] hover:text-white transition-all duration-200"
            aria-label="YouTube"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>

          {/* Email */}
          <Link
            to="/contact" 
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#ed6a3e] hover:bg-[#ed6a3e] hover:text-white transition-all duration-300"
            aria-label="Contact Me"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </Link>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=100069591377491"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#ed6a3e] hover:bg-[#ed6a3e] hover:text-white transition-all duration-200"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          {/* Medium */}
          <a
            href="https://medium.com/@sandaruwantharusha968"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#ed6a3e] hover:bg-[#ed6a3e] hover:text-white transition-all duration-200"
            aria-label="Medium"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}