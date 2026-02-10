import { Footer } from '../components/Footer'
import { Navigation } from '../components/Navigation'
import { ContactSection } from '../components/ContactSection'

const ContactPage = () => {
  return (
    <>
        <main className="min-h-screen bg-red=600">
            <Navigation />
            <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <ContactSection />
                <Footer />
            </div>
        </main>
    </>
  )
}

export default ContactPage
