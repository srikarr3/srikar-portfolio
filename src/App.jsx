import React, { useEffect, useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import MobileMenu from './components/MobileMenu';
import AccessibilityEnhancements from './components/AccessibilityEnhancements';
import Hero from './components/Hero';
import About from './components/About';
import Stack from './components/Stack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Playground from './components/Playground';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScroll(scrolled);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Custom Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full z-[100] pointer-events-none">
        <div
          className="h-1 bg-green-400 transition-all duration-200"
          style={{ width: `${scroll}%` }}
        />
      </div>
      {/* Accessibility Enhancements */}
      <AccessibilityEnhancements />
      {/* Desktop Navigation */}
      <Navigation />
      {/* Mobile Menu */}
      <MobileMenu />
      {/* Main Content */}
      <main id="main-content" role="main">
        {/* Hero Section */}
        <section id="hero" aria-label="Hero section">
          <Hero />
        </section>
        {/* About Section */}
        <section id="about" aria-label="About me">
          <About />
        </section>
        {/* Stack Section */}
        <section id="stack" aria-label="Technology stack">
          <Stack />
        </section>
        {/* Experience Section */}
        <section id="experience" aria-label="Work experience">
          <Experience />
        </section>
        {/* Projects Section */}
        <section id="projects" aria-label="Selected projects">
          <Projects />
        </section>
        {/* Playground Section */}
        <section id="playground" aria-label="Playground - Catch the Coffee game">
          <Playground />
        </section>
        {/* Contact Section */}
        <section id="contact" aria-label="Contact information">
          <Contact />
        </section>
      </main>
      {/* New Footer */}
      <Footer />
    </div>
  );
}

export default App;

