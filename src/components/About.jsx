import React from 'react';

export const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">BIOGRAPHY</span>
          <h2 className="section-title">About <span>Vasanthakumar D</span></h2>
        </div>
        <div className="about-grid">
          <div className="glass-card about-text-card">
            <p className="about-p">
              I am a final-year student pursuing a <strong>Bachelor of Technology in Artificial Intelligence and Data Science</strong> at <strong>Dr. Mahalingam College of Engineering and Technology (Anna University)</strong> with an academic CGPA of <strong>8.2 / 10</strong>.
            </p>
            <p className="about-p">
              My passion lies in extracting high-value intelligence from data and creating smart, user-friendly software applications. Equipped with practical internship experience in data analytics and digital marketing strategy, alongside guided technical projects in healthcare AI and document management portals.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-val">B.Tech AI & DS</div>
                <div className="highlight-lbl">Dr. MCET Student (2023–2027)</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-val">CGPA: 8.2 / 10</div>
                <div className="highlight-lbl">Academic Standing</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-val">Athlete & Leader</div>
                <div className="highlight-lbl">Pole Vault & INVICTUS</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-val">+15% Reach</div>
                <div className="highlight-lbl">Digital Analytics Impact</div>
              </div>
            </div>
          </div>

          <div className="about-cards-stack">
            <div className="glass-card pillar-card">
              <div className="pillar-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                </svg>
              </div>
              <div>
                <div className="pillar-title">Machine Learning & Deep Learning Student</div>
                <div className="pillar-desc">Building CNN and RNN models, OpenCV computer vision algorithms, and acoustic spectrogram classifications for real-world diagnostic applications.</div>
              </div>
            </div>

            <div className="glass-card pillar-card">
              <div className="pillar-icon" style={{ background: 'rgba(6, 182, 212, 0.15)', color: 'var(--accent-cyan)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
              </div>
              <div>
                <div className="pillar-title">Data Analytics & Power BI</div>
                <div className="pillar-desc">Transforming multi-source spreadsheets and SQL databases into interactive DAX dashboards and geographic market maps.</div>
              </div>
            </div>

            <div className="glass-card pillar-card">
              <div className="pillar-icon" style={{ background: 'rgba(139, 92, 246, 0.15)', color: 'var(--accent-purple)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <div>
                <div className="pillar-title">Full-Stack Web Systems & UX</div>
                <div className="pillar-desc">Designing clean, responsive user interfaces and backend architectures using HTML5, CSS3, JavaScript (ES6+), and MySQL.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
