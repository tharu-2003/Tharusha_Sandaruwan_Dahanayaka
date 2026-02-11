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
      <div className="pt-20 md:pt-24">
        {/* Mobile: Profile card centered at top */}
        <div className="lg:hidden px-4 pb-12">
          <div className="max-w-sm mx-auto">
            <SidebarProfile />
          </div>
        </div>

        {/* Desktop & Mobile Content Wrapper */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-20">
            
            {/* Desktop: Sticky sidebar on left */}
            <aside className="hidden lg:block lg:w-80 xl:w-96 shrink-0">
              <div className="sticky top-24">
                <SidebarProfile />
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 min-w-0 space-y-20 md:space-y-28 pb-16">
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