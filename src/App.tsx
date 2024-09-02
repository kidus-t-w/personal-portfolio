import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

function App() {

  return (
    <div className="bg-gradient-to-r from-gray-800 to-black text-white">
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
