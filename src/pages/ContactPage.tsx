import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '../components/Navigation';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/tharu-2003",
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/tharusha-sandaruwan-dahanayaka/",
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@tharusha_sandaruwan",
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
    },
    {
      name: "Email",
      isButton: true,
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-5 sm:p-10 md:p-16 lg:p-17 font-sans selection:bg-[#ed6a3e]/30">
      <Navigation />

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 mt-20 lg:mt-3">
        
        {/* LEFT SIDE: Title & Info (Sticky) */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit space-y-10">
          {/* Title with staggered animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-none uppercase"
            >
              LET'S
            </motion.h1>
            <motion.span 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="ghost-text text-[#1a1a12] stroke-[#2a2a20] stroke-1 uppercase text-4xl sm:text-7xl lg:text-8xl font-black block"
            >
              CONNECT
            </motion.span>
          </motion.div>

          <div className="space-y-6">
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-500 text-sm sm:text-base font-medium uppercase tracking-widest leading-relaxed"
            >
              Have a big idea or a brand to polish? <br /> 
              I'm ready to help you build it.
            </motion.p>
            
            {/* Email Address Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ x: 5 }}
              className="group cursor-pointer"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ed6a3e]">Direct Email</span>
              <p className="text-white font-bold text-xs sm:text-xl group-hover:text-[#ed6a3e] transition-colors duration-300">
                sandaruwantharusha968@gmail.com
              </p>
            </motion.div>

            {/* Availability Status */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-2"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ed6a3e]">Available for freelance</span>
              <div className="flex items-center gap-2 mt-2">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-green-500"
                />
                <span className="text-white font-bold text-xs uppercase tracking-widest">Open for new projects</span>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center gap-3 flex-wrap justify-start border-t border-[#2a2a20] pt-8"
          >
            {socialLinks.map((link, index) => (
              link.isButton ? (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                  className="w-10 h-10 rounded-full border border-[#2a2a20] flex items-center justify-center text-[#ed6a3e] hover:bg-[#ed6a3e] hover:text-white transition-all duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.button>
              ) : (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full border border-[#2a2a20] flex items-center justify-center text-[#ed6a3e] hover:bg-[#ed6a3e] hover:text-white transition-all duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              )
            ))}
          </motion.div>
        </div>

        {/* RIGHT SIDE: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full lg:w-2/3 mt-8"
        >
          <ContactForm formData={formData} setFormData={setFormData} />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;