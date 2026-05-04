import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Versions from './components/Versions'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <Versions />
      <Footer />
    </div>
  )
}
