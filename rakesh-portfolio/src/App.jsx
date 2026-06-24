import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import About from "./Components/About/About"
import Skills from "./Components/Skills/Skills"
import Projects from "./Components/Projects/Projects"
import Certification from "./Components/Certifications/Certification"
import Contact from "./Components/Contact/Contact"
function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certification />
        <Contact />
    </div>
  )
}

export default App