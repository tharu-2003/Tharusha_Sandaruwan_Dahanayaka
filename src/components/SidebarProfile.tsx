export function SidebarProfile() {
  return (
    <div className="relative bg-white rounded-[32px] p-6 overflow-hidden flex flex-col items-center max-w-sm">
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
            src="../src/assets/myProfile.png"
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
        <p className="text-gray-500 text-sm max-w-xs mb-6">
          A Software Engineer who has developed countless innovative solutions.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {/* Dribbble */}
          <a
            href="#"
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#ed6a3e] hover:bg-[#ed6a3e] hover:text-white transition-all duration-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm7.938 5.563a10.13 10.13 0 0 1 2.312 6.312c-.344-.063-3.75-.75-7.188-.344-.063-.188-.125-.344-.188-.531-.188-.469-.406-.938-.625-1.406 3.813-1.563 5.5-3.781 5.688-4.031zm-1.031-1.156c-.156.219-1.688 2.313-5.375 3.688A47.29 47.29 0 0 0 9.937 1.72a10.104 10.104 0 0 1 8.97 2.687zM8.063 2.344c.375.563 1.938 2.906 3.625 5.031C6.375 8.5 1.5 8.469 1.031 8.469a10.156 10.156 0 0 1 7.032-6.125zm-6.313 9.719v-.313c.438.031 6.156.063 12-.938.344.656.656 1.344.938 2-.094.031-.219.063-.344.094-6.125 1.969-9.375 7.406-9.562 7.719a10.125 10.125 0 0 1-3.032-8.562zm4.438 9.687c.125-.219 2.5-4.969 8.125-6.656.031-.031.063-.031.094-.031a35.66 35.66 0 0 1 2.188 7.75 10.172 10.172 0 0 1-10.407-1.063zm12.219-.094a39.234 39.234 0 0 0-1.969-7.188c3.281-.531 6.156.344 6.5.438a10.098 10.098 0 0 1-4.531 6.75z" />
            </svg>
          </a>
          {/* Twitter */}
          <a
            href="#"
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#ed6a3e] hover:bg-[#ed6a3e] hover:text-white transition-all duration-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
            </svg>
          </a>
          {/* Instagram */}
          <a
            href="#"
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#ed6a3e] hover:bg-[#ed6a3e] hover:text-white transition-all duration-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          {/* YouTube */}
          <a
            href="#"
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#ed6a3e] hover:bg-[#ed6a3e] hover:text-white transition-all duration-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}