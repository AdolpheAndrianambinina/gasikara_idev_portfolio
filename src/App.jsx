import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'   
import Team from './components/Team.jsx'
import Testimonials from './components/Testimonials.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

export default function App(){
  return (
    <>
      <div className="bg-glow" />
      <Header />
      <main id="home">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Projects /> 
        <Testimonials />
        <Team />
        <CTA />
      </main>
      <Footer />
    </>
  )
}