import React from 'react';

export const ResumeBanner = () => {
  return (
    <section>
      <div className="container">
        <div className="resume-banner">
          <h3>Looking for my Complete Resume & Portfolio Document?</h3>
          <p>Download the fully structured, ATS-friendly PDF document containing in-depth project architecture diagrams, dataset breakdowns, and academic credentials.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" download="Vasanthakumar_D_Resume.pdf" className="btn btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              View & Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
