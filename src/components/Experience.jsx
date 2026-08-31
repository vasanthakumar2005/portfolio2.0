import React from 'react';

export const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">CAREER PATH</span>
          <h2 className="section-title">Internship <span>Experience</span></h2>
        </div>

        <div className="timeline">
          
          {/* Netlush Technologies */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="glass-card timeline-card">
              <div className="timeline-date">16.06.2025 – 30.06.2025 &nbsp;•&nbsp; Palani, Tamil Nadu</div>
              <div className="timeline-role">Data Analyst Intern</div>
              <div className="timeline-company">Netlush Technologies</div>
              <ul className="timeline-bullets">
                <li>Collected, cleaned, and structured commercial survey data from over <strong>100+ retail storefronts</strong> using Excel and Google Sheets.</li>
                <li>Designed interactive <strong>Power BI dashboards</strong> mapping vendor turnover, competitor density, and geographic sales velocity.</li>
                <li>Delivered visual analytics reports that empowered client marketing managers to streamline regional distribution routes.</li>
              </ul>
            </div>
          </div>

          {/* Sorcee Clothing */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="glass-card timeline-card">
              <div className="timeline-date">01.05.2024 – 30.06.2024 &nbsp;•&nbsp; Pollachi, Tamil Nadu</div>
              <div className="timeline-role">Digital Marketing Intern</div>
              <div className="timeline-company">Sorcee Clothing Brand</div>
              <ul className="timeline-bullets">
                <li>Monitored social media campaign analytics, audience engagement demographics, and ad reach performance.</li>
                <li>Designed brand poster collateral using Canva and edited promotional short-form videos.</li>
                <li>Achieved a <strong>15% increase in online user engagement</strong> through data-backed content scheduling.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
