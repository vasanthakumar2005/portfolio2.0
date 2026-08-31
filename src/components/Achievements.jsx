import React from 'react';

export const Achievements = () => {
  return (
    <section id="achievements">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">LEADERSHIP & DISCIPLINE</span>
          <h2 className="section-title">Key <span>Achievements</span></h2>
        </div>

        <div className="achieve-grid">
          <div className="glass-card achieve-card">
            <div className="achieve-icon">🏆</div>
            <div>
              <div className="achieve-title">INVICTUS Student Association Leader</div>
              <div className="achieve-desc">Core association leader at Dr. MCET organizing technical symposia, coding hackathons, and departmental workshops.</div>
            </div>
          </div>

          <div className="glass-card achieve-card">
            <div className="achieve-icon">🛡️</div>
            <div>
              <div className="achieve-title">TN Police Cyber Security Poster Presentation</div>
              <div className="achieve-desc">Awardee in Tamil Nadu Police Cyber Security poster competition communicating digital safety & anti-phishing hygiene.</div>
            </div>
          </div>

          <div className="glass-card achieve-card">
            <div className="achieve-icon">🏃</div>
            <div>
              <div className="achieve-title">Competitive Pole Vault Athlete</div>
              <div className="achieve-desc">Active collegiate pole vault athlete representing dedication, high physical discipline, mental resilience, and precision.</div>
            </div>
          </div>

          <div className="glass-card achieve-card">
            <div className="achieve-icon">🎬</div>
            <div>
              <div className="achieve-title">Social Media Management & Video Editing</div>
              <div className="achieve-desc">Editor and manager for digital media channels including <em>Arasiyal Seivom</em>, driving +15% audience growth via video assets.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
