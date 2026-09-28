import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Security from './components/Security';
import OpenSource from './components/OpenSource';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Learning from './components/Learning';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      {/* Subtle background grid (fixed, decorative) */}
      <div className="bg-grid" aria-hidden="true" />

      <Navbar />

      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Security />
        <div className="section-divider" />
        <OpenSource />
        <div className="section-divider" />
        <Education />
        <div className="section-divider" />
        <Certifications />
        <div className="section-divider" />
        <Learning />
        <div className="section-divider" />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
