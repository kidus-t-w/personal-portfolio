import About from "./components/About"
import Carousel from "./components/Carousel"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import ServicesSection from "./components/Services"
import Testimonial from "./components/Testemonial"

function App() {

  return (
    <div className="bg-gradient-to-r from-gray-800 to-black text-white">
      <Navbar />
      <Hero/>
      <Carousel/>
      <About />
      <Projects />
      <ServicesSection />
      <Experience />
      <Testimonial />
      <Contact />
      <footer className="bg-gradient-to-r from-gray-800 to-black text-center py-4">
      <p className="text-gray-400 text-sm">
        © 2024 copyright all rights reserved
      </p>
    </footer>
    </div>
  )
}

export default App
