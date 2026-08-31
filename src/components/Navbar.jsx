import React, { useState, useEffect } from 'react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'certifications', 'achievements', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'achievements', label: 'Achievements' }
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <a href="#hero" className="logo">
        VASANTHAKUMAR D
      </a>
      <nav>
        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} id="nav-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-nav-cta">
              Resume (PDF)
            </a>
          </li>
        </ul>
      </nav>
      <button
        className={`nav-toggle ${mobileMenuOpen ? 'active' : ''}`}
        id="nav-toggle"
        aria-label="Toggle Navigation Menu"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};
