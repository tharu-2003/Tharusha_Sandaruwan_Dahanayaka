import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { ProjectsSection } from "../components/ProjectsSection";
import { SidebarProfile } from "../components/SidebarProfile";
import { ContentsSection } from "../components/ContentsSection";
import { ToolsSection } from "../components/ToolsSection";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-[#14140c] text-white selection:bg-[#ed6a3e]/30">
      <Navigation />
      
      {/* Main Container */}
      <div className="pt-16 sm:pt-20 md:pt-24">
        {/* Mobile: Profile card centered at top */}
        <div className="lg:hidden px-3 sm:px-4 pb-8 sm:pb-10 md:pb-12">
          <div className="max-w-sm mx-auto">
            <SidebarProfile />
          </div>
        </div>

        {/* Desktop & Mobile Content Wrapper */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20">
            
            {/* Desktop: Sticky sidebar on left */}
            <aside className="hidden lg:block lg:w-72 xl:w-80 2xl:w-96 shrink-0">
              <div className="sticky top-24">
                <SidebarProfile />
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 min-w-0 space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-28 pb-12 sm:pb-14 md:pb-16">
              <AboutSection />
              <ProjectsSection />
              <ExperienceSection />
              <ToolsSection />
              <ContentsSection />
              <ContactSection />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;