import { ExperienceSection } from "../components/ExperienceSection"
import { Footer } from "../components/Footer"
import { Navigation } from "../components/Navigation"

const ExperiencePage = () => {
  return (
    <>
        <main className="min-h-screen bg-red=600">
            <Navigation />
            <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <ExperienceSection />
                <Footer />
            </div>
        </main>
    </>
  )
}

export default ExperiencePage
