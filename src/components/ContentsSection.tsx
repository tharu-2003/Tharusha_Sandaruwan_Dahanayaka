import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { contentData } from "../assets/datas/assets";

// Icons set eka (Categories walata anuwa wenas wenna)
const VideoIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/></svg>
);

const PostIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2zM14 4v4h4" /></svg>
);

export interface Content {
    _id: string; 
    title: string;
    description: string;
    date: string;
    category: "Video" | "Post"; 
    link: string;
    watchingTime?: string; 
    readTime?: string;    
}

export function ContentsSection() {
  const navigate = useNavigate();
  const MotionLink = motion(Link);
  const [contents, setContents] = useState<Content[]>([]);

  useEffect(() => {
    // Array eke anthima items 3 ganna (-3 use karanna)
    setContents(contentData.slice(-3).reverse()); 
  }, []);
  
  return (
    <section id="contents" className="py-2 px-4 sm:px-6">
      {/* Title Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-none uppercase"
        >
          KNOWLEDGE
        </motion.h2>
        <motion.h2 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl sm:text-5xl lg:text-6xl ghost-text font-black text-[#1a1a12] stroke-[#2a2a20] stroke-1 tracking-tighter leading-none uppercase"
        >
          BASE
        </motion.h2>
      </motion.div>

      {/* Content List */}
      <div className="max-w-5xl">
        {contents.map((item, index) => (
          <MotionLink
            key={item._id}
            to={item.link}
            target={item.category === "Video" ? "_blank" : "_self"}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ x: 10 }}
            // Mobile වලදී py-6 සහ Desktop වලදී py-10 ලෙස වෙනස් කළා
            className="group flex items-start justify-between gap-3 sm:gap-10 py-6 sm:py-10 border-b border-[#2a2a20] hover:border-[#ed6a3e]/40 transition-all duration-500"
          >
            <div className="flex-1 min-w-0"> {/* min-w-0 දැම්මා long text overflow නොවෙන්න */}
              
              {/* Category & Icon */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                className="flex items-center gap-2 mb-2 sm:mb-4"
              >
                <motion.span 
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#ed6a3e]"
                >
                  {item.category === "Video" ? <VideoIcon /> : <PostIcon />}
                </motion.span>
                <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black">
                  {item.category}
                </span>
              </motion.div>
              
              {/* Title: Mobile size adu kala sm:text-3xl damma */}
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                className="text-lg sm:text-3xl font-black text-white group-hover:text-[#ed6a3e] transition-colors duration-300 mb-2 sm:mb-3 tracking-tight uppercase leading-tight"
              >
                {item.title}
              </motion.h3>
              
              {/* Description: Mobile wala line-clamp-2 damma space ithuru karන්න */}
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.4 }}
                className="text-gray-500 text-xs sm:text-base leading-relaxed max-w-2xl mb-4 sm:mb-6 line-clamp-2 group-hover:text-gray-400 transition-colors"
              >
                {item.description}
              </motion.p>

              {/* Info Section */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
                className="flex items-center gap-3 sm:gap-6"
              >
                <span className="text-[8px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.date}</span>
                <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[#2a2a20] rounded-full"></span>
                <span className="text-[8px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {item.category === "Video" ? item.watchingTime : item.readTime}
                </span>
              </motion.div>
            </div>

            {/* Action Icon: Mobile size poddak adu kala */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="mt-1 sm:mt-2"
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-[#2a2a20] flex items-center justify-center text-[#ed6a3e] group-hover:bg-[#ed6a3e] group-hover:text-white group-hover:border-[#ed6a3e] transition-all duration-500 shadow-xl">
                <svg
                  className="w-3 h-3 sm:w-5 sm:h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </motion.div>
          </MotionLink>
        ))}
      </div>

      {/* See All Experience Button */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 flex justify-center"
      >
        <motion.button 
          onClick={() => navigate('/contents')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="group relative px-8 py-4 bg-[#1a1a12] border border-[#2a2a20] rounded-full overflow-hidden transition-all duration-500 hover:border-[#ed6a3e]/50 shadow-xl"
        >
          {/* Hover highlight effect */}
          <div className="absolute inset-0 bg-[#ed6a3e] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          
          <div className="relative flex items-center gap-3">
            <span className="text-sm font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors duration-300">
              See All Contents
            </span>
            <svg 
              className="w-5 h-5 text-[#ed6a3e] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </motion.button>
      </motion.div>
    </section>
  );
}