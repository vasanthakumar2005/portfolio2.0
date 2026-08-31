import React, { useState, useEffect } from 'react';

export const Hero = () => {
  const [typewriterText, setTypewriterText] = useState('');

  useEffect(() => {
    const words = [
      "AI & Data Science Student",
      "Final-Year B.Tech Student @ Dr. MCET",
      "Machine Learning Student",
      "AI-Powered Product Builder"
    ];

    let wordIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timeoutId;

    function type() {
      const currentWord = words[wordIdx];

      if (isDeleting) {
        setTypewriterText(currentWord.substring(0, charIdx - 1) + '|');
        charIdx--;
      } else {
        setTypewriterText(currentWord.substring(0, charIdx + 1) + '|');
        charIdx++;
      }

      let typeSpeed = isDeleting ? 35 : 75;

      if (!isDeleting && charIdx === currentWord.length) {
        typeSpeed = 2200;
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        typeSpeed = 400;
      }

      timeoutId = setTimeout(type, typeSpeed);
    }

    type();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-pill">
            <span className="hero-pill-dot"></span>
            <span>AI & DATA SCIENCE ENGINEER • BUILDING INTELLIGENT SYSTEMS</span>
          </div>
          <h1 className="hero-title">
            Building <span>AI Products</span> That Solve Real Problems
          </h1>
          <div className="hero-typewriter" id="typewriter">
            {typewriterText}
          </div>
          <p className="hero-description">
            Final-year B.Tech student in Artificial Intelligence & Data Science at Dr. MCET (CGPA 8.2/10). Passionate about machine learning algorithms, statistical data analytics, and intelligent web applications.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              Explore Projects
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="/resume.pdf" download="Vasanthakumar_D_Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-secondary">
              DOWNLOAD RESUME ↓
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-val">8.2</span>
              <span className="stat-label">Academic CGPA</span>
            </div>
            <div className="stat-item">
              <span className="stat-val">3+</span>
              <span className="stat-label">AI & Web Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-val">2</span>
              <span className="stat-label">Industry Internships</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
