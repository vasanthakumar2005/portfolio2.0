import React from 'react';

export const Footer = () => {
  return (
    <footer>
      <div className="container footer-content">
        <div className="footer-text">
          &copy; 2026 <strong>VASANTHAKUMAR D</strong>. AI & Data Science Student Portfolio.
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <a href="https://linkedin.com/in/vasanthkumar083" target="_blank" rel="noreferrer" style={{ color: 'var(--text-subtle)', textDecoration: 'none' }}>LinkedIn</a>
          <a href="https://github.com/vasanthakumar2005" target="_blank" rel="noreferrer" style={{ color: 'var(--text-subtle)', textDecoration: 'none' }}>GitHub</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>Resume (PDF)</a>
        </div>
      </div>
    </footer>
  );
};

export const Toast = ({ show }) => {
  return (
    <div className={`toast ${show ? 'active' : ''}`} id="toast">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      <div>
        <div style={{ fontWeight: 700 }}>Message Sent!</div>
        <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>Thank you for reaching out. I'll get back to you shortly.</div>
      </div>
    </div>
  );
};
