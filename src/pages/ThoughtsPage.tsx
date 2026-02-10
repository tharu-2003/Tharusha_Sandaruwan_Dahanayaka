
import { ThoughtsSection } from '../components/ThoughtsSection'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

const ThoughtsPage = () => {
  return (
    <>
        <main className="min-h-screen bg-red=600">
            <Navigation />
            <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <ThoughtsSection />
                <Footer />
            </div>
        </main>
    </>
  )
}

export default ThoughtsPage

