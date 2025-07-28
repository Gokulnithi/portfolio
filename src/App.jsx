import React from 'react'
import Hero from './Sections/Hero'
import Navbar from './components/Navbar'
import Showcase from './Sections/Showcase'
import Logosection from './Sections/Logosection'
import FeatureCards from './Sections/FeatureCards'
import Experience from './Sections/Experience'
import Techstack from './Sections/Techstack'
import Testimonials from './Sections/Testimonials'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'
const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Showcase />
    <Logosection />
    <FeatureCards />
    <Experience />
    <Techstack />
    <Testimonials />
    <Contact/>
    <Footer />
    </>
  )
}

export default App
