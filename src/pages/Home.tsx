import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Hero from '../sections/Hero'
import About from '../sections/About'
import Experience from '../sections/Experience'
import Skills from "../sections/Skills"
import Project from '../sections/Project'
import Contact from '../sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <Experience />
      <Skills/>
      <Project />
      <Contact />

      <Footer />
    </>
  )
}
