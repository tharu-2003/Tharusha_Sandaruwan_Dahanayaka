
import { ContentsSection } from '../components/ContentsSection'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

const ContentsPage = () => {
  return (
    <>
        <main className="min-h-screen bg-red=600">
            <Navigation />
            <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <ContentsSection />
                <Footer />
            </div>
        </main>
    </>
  )
}

export default ContentsPage

