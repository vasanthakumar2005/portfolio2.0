import React, { useState } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { ResumeBanner } from './components/ResumeBanner';
import { Contact } from './components/Contact';
import { Footer, Toast } from './components/Footer';

export function App() {
  const [showToast, setShowToast] = useState(false);

  const triggerToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  return (
    <>
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Achievements />
      <ResumeBanner />
      <Contact onShowToast={triggerToast} />
      <Toast show={showToast} />
      <Footer />
    </>
  );
}

export default App;
