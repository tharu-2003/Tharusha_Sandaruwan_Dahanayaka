import { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experiencesData } from '../assets/datas/assets';
import { Navigation } from '../components/Navigation';
import { Pagination } from '../components/PaginationControls';
import { ExperiencePopup } from '../components/ExperiencePopup';

// 1. Experience Interface Definition
export interface Experience {
  _id: string;
  role: string;
  company: string;
  title: string;
  period: string;
  description: string;
  image: string[];
  skills: string[];
  location: string;
  industry: string;
  mode: "Work" | "Education";
  priority: "High" | "Medium" | "Low";
  workModeStatements: string;
  links: string[];
}

// 2. Card Image Slider Component (preserved from original)
const CardImageSlider = ({ images, company }: { images: string[], company: string }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="absolute inset-0 z-0 bg-[#0a0a0a] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={company}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700"
        />
      </AnimatePresence>

      {/* Gradient overlay — matches ProjectPage card style */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

      {/* Pill indicators */}
      {images && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
          {images.map((_, i) => (
            <motion.div
              key={i}
              animate={{
                width: i === index ? 16 : 4,
                backgroundColor: i === index ? "#ed6a3e" : "rgba(255,255,255,0.2)"
              }}
              className="h-1 rounded-full transition-all duration-500"
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ExperiencePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMode, setActiveMode] = useState<"All" | "Work" | "Education">("All");
  const [activePriority, setActivePriority] = useState<"All" | "High" | "Medium" | "Low">("All");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = (exp: Experience) => {
    setSelectedExp(exp);
    setIsPopupOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Quick filter buttons matching ProjectPage pattern
  const modeFilters = [
    { label: "All", value: "All" },
    { label: "Work", value: "Work" },
    { label: "Education", value: "Education" },
  ];

  const priorityFilters = [
    { label: "All", value: "All" },
    { label: "High", value: "High" },
    { label: "Medium", value: "Medium" },
    { label: "Low", value: "Low" },
  ];

  const filteredExperiences = useMemo(() => {
    let results = [...experiencesData];
    const priorityOrder: Record<string, number> = { "High": 1, "Medium": 2, "Low": 3 };

    if (activeMode !== "All") results = results.filter(exp => exp.mode === activeMode);
    if (activePriority !== "All") results = results.filter(exp => exp.priority === activePriority);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(exp =>
        exp.company.toLowerCase().includes(query) ||
        exp.role.toLowerCase().includes(query) ||
        exp.title.toLowerCase().includes(query) ||
        exp.skills.some(skill => skill.toLowerCase().includes(query))
      );
    }

    return results.sort((a, b) => {
      const priorityDiff = priorityOrder[a.priority] - priorityOrder[b.priority];
      if (priorityDiff !== 0) return priorityDiff;
      return b._id.localeCompare(a._id);
    });
  }, [searchQuery, activeMode, activePriority]);

  const totalPages = Math.ceil(filteredExperiences.length / itemsPerPage);
  const currentItems = filteredExperiences.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-black text-white p-5 sm:p-10 md:p-16 lg:p-20 font-sans selection:bg-[#ed6a3e]/30">
      <Navigation />
      <ExperiencePopup experience={selectedExp} isOpen={isPopupOpen} onClose={closePopup} />

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mt-20 lg:mt-3">

        {/* LEFT SIDE: Title, Search & Filters — mirrors ProjectPage layout exactly */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit space-y-8">

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
              className="text-4xl sm:text-6xl lg:text-6xl font-black tracking-tighter leading-none uppercase"
            >
              JOURNEY &
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="ghost-text text-[#1a1a12] stroke-[#2a2a20] stroke-1 text-4xl sm:text-6xl lg:text-6xl font-black block"
            >
              EXPERIENCE
            </motion.span>
          </motion.div>

          <div className="space-y-4">
            {/* Search Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative w-full max-w-md"
            >
              <input
                type="text"
                placeholder="Search archive..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                className="w-full bg-[#1a1a12] border border-[#2a2a20] rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#ed6a3e] transition-all"
              />
            </motion.div>

            {/* Mode Filter Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-2 max-w-md"
            >
              {modeFilters.map((filter, index) => (
                <motion.button
                  key={filter.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { setActiveMode(filter.value as any); setCurrentPage(1); }}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                    activeMode === filter.value
                      ? "bg-[#ed6a3e] border-[#ed6a3e] text-white shadow-lg shadow-[#ed6a3e]/20"
                      : "bg-[#1a1a12] border-[#2a2a20] text-gray-500 hover:border-gray-400 hover:text-gray-300"
                  }`}
                >
                  {filter.label}
                </motion.button>
              ))}
            </motion.div>

            {/* Priority Filter Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-2 max-w-md"
            >
              <p className="w-full text-[9px] font-black uppercase tracking-widest text-gray-600 mb-1">
                Priority Level
              </p>
              {priorityFilters.map((filter, index) => (
                <motion.button
                  key={filter.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.65 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { setActivePriority(filter.value as any); setCurrentPage(1); }}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                    activePriority === filter.value
                      ? "bg-white border-white text-black shadow-lg shadow-white/10"
                      : "bg-[#1a1a12] border-[#2a2a20] text-gray-500 hover:border-gray-400 hover:text-gray-300"
                  }`}
                >
                  {filter.label}
                </motion.button>
              ))}
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-gray-500 text-xs sm:text-sm font-medium uppercase tracking-[0.2em]"
          >
            Displaying {filteredExperiences.length} milestones
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="hidden lg:block"
          >
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          </motion.div>
        </div>

        {/* RIGHT SIDE: Experience Grid — mirrors ProjectPage card grid exactly */}
        <div className="lg:w-2/3">
          {currentItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {currentItems.map((exp, index) => (
                <motion.div
                  key={exp._id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => openPopup(exp)}
                  className="group relative cursor-pointer overflow-hidden rounded-3xl bg-[#1a1a12] border border-[#2a2a20] transition-all duration-500 hover:border-[#ed6a3e]/40 shadow-2xl h-60 sm:h-70 w-full"
                >
                  {/* Image Slider (preserved) */}
                  <CardImageSlider images={exp.image} company={exp.company} />

                  {/* Priority Glow Orb (preserved) */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute top-0 right-0 w-32 h-32 blur-[80px] rounded-full z-10 ${
                      exp.priority === "High" ? "bg-[#ed6a3e]" : exp.priority === "Medium" ? "bg-blue-500" : "bg-gray-500"
                    }`}
                  />

                  {/* Card Content — mirrors ProjectPage structure */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between z-20">
                    <div className="flex justify-between items-start">
                      {/* Period badge — same style as ProjectPage category badge */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                        className="px-3 py-1 rounded-2xl bg-black/40 backdrop-blur-md border border-white/5"
                      >
                        <span className="text-white text-[10px] font-black tracking-widest uppercase">
                          {exp.period}
                        </span>
                      </motion.div>

                      {/* Mode badge */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                        className="px-3 py-1 rounded-2xl bg-black/40 backdrop-blur-md border border-white/5"
                      >
                        <span className={`text-[10px] font-black tracking-widest uppercase ${
                          exp.mode === "Work" ? "text-red-500" : "text-white"
                        }`}>
                          {exp.mode}
                        </span>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                    >
                      <h3 className="text-2xl font-black text-white uppercase tracking-tighter group-hover:tracking-wider transition-all duration-500 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mb-3 opacity-80 group-hover:opacity-100 transition-opacity">
                        {exp.company}
                      </p>

                      {/* Skills as tag list — same pattern as ProjectPage tags */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.slice(0, 3).map((skill, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 + 0.5 + i * 0.05 }}
                            className="text-[9px] text-gray-500 font-bold uppercase tracking-widest border-b border-[#2a2a20] group-hover:border-[#ed6a3e]/40 transition-colors"
                          >
                            {skill} {i !== 2 && i !== exp.skills.length - 1 ? "•" : ""}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-20 border border-dashed border-[#2a2a20] rounded-3xl"
            >
              <p className="text-gray-600 uppercase tracking-widest font-bold">No results found.</p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:hidden mt-12 pb-10"
          >
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;