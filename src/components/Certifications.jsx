import React from 'react';

export const Certifications = () => {
  return (
    <section id="certifications">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">VERIFIED CREDENTIALS</span>
          <h2 className="section-title">Industry <span>Certifications</span></h2>
        </div>

        <div className="cert-grid">
          {/* Cert 1 */}
          <div className="glass-card cert-card">
            <div>
              <span className="cert-badge">Verified Certification</span>
              <div className="cert-title">Tata Data Visualization</div>
              <div className="cert-issuer">Forage Virtual Internship &nbsp;•&nbsp; Dec 2024</div>
              <p className="cert-desc">
                Mastered executive dashboard design, business metric selection, data storytelling, and presenting visual analytics to senior leadership.
              </p>
            </div>
          </div>

          {/* Cert 2 */}
          <div className="glass-card cert-card">
            <div>
              <span className="cert-badge">Verified Simulation</span>
              <div className="cert-title">BCGX Data Science Simulation</div>
              <div className="cert-issuer">BCG Data Science Programme &nbsp;•&nbsp; Dec 2024</div>
              <p className="cert-desc">
                Executed customer churn exploratory data analysis, hypothesis testing, feature importance engineering, and predictive modeling.
              </p>
            </div>
          </div>

          {/* Cert 3 */}
          <div className="glass-card cert-card">
            <div>
              <span className="cert-badge" style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#38bdf8', borderColor: 'rgba(6, 182, 212, 0.3)' }}>Elite Classification</span>
              <div className="cert-title">NPTEL Entrepreneurship</div>
              <div className="cert-issuer">NPTEL / IIT Certification &nbsp;•&nbsp; Score: 63%</div>
              <p className="cert-desc">
                Graduated with Elite classification, studying startup business models, market dynamics, venture financing, and product feasibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
