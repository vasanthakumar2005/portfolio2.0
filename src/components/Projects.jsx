import React from 'react';

export const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">PORTFOLIO SHOWCASE</span>
          <h2 className="section-title">Featured <span>Projects</span></h2>
        </div>

        <div className="projects-grid">
          
          {/* Project 1: LUNA */}
          <div className="glass-card project-card">
            <div className="project-media">
              <svg className="project-svg-bg" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="320" height="160" fill="#0f172a"/>
                
                {/* Header Bar */}
                <rect x="12" y="10" width="296" height="24" rx="6" fill="#1e293b" stroke="rgba(255,255,255,0.08)"/>
                <circle cx="24" cy="22" r="3.5" fill="#ef4444"/>
                <circle cx="35" cy="22" r="3.5" fill="#f59e0b"/>
                <circle cx="46" cy="22" r="3.5" fill="#10b981"/>
                <text x="62" y="25" fill="#94a3b8" fontSize="8" fontFamily="var(--font-mono)" fontWeight="600">IMAGE → MODEL → CLASSIFICATION</text>

                {/* Left Side: Diagnostic Scan Frame */}
                <rect x="12" y="42" width="160" height="106" rx="8" fill="#1e293b" stroke="rgba(255,255,255,0.1)"/>
                <line x1="20" y1="65" x2="164" y2="65" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                <line x1="20" y1="90" x2="164" y2="90" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                <line x1="20" y1="115" x2="164" y2="115" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                <line x1="60" y1="46" x2="60" y2="142" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                <line x1="110" y1="46" x2="110" y2="142" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                
                {/* Bounding Box / Target Scan */}
                <rect x="50" y="60" width="70" height="55" rx="4" fill="rgba(37,99,235,0.12)" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="4 2"/>
                <circle cx="85" cy="87.5" r="14" fill="rgba(2,132,199,0.2)" stroke="#0284c7" strokeWidth="1.5"/>
                <path d="M 50 66 L 50 60 L 56 60" stroke="#38bdf8" strokeWidth="2" fill="none"/>
                <path d="M 120 66 L 120 60 L 114 60" stroke="#38bdf8" strokeWidth="2" fill="none"/>
                <path d="M 50 109 L 50 115 L 56 115" stroke="#38bdf8" strokeWidth="2" fill="none"/>
                <path d="M 120 109 L 120 115 L 114 115" stroke="#38bdf8" strokeWidth="2" fill="none"/>
                <text x="52" y="55" fill="#38bdf8" fontSize="7" fontFamily="var(--font-mono)" fontWeight="700">REGION_OF_INTEREST</text>

                {/* Right Side: Model Pipeline & Classification */}
                <rect x="180" y="42" width="128" height="106" rx="8" fill="#1e293b" stroke="rgba(255,255,255,0.1)"/>
                <text x="190" y="58" fill="#64748b" fontSize="7" fontFamily="var(--font-mono)">PIPELINE STAGES</text>

                <rect x="190" y="64" width="108" height="20" rx="4" fill="rgba(37,99,235,0.15)" stroke="rgba(37,99,235,0.3)"/>
                <text x="196" y="77" fill="#38bdf8" fontSize="7.5" fontFamily="var(--font-mono)" fontWeight="600">INPUT: SCAN_DATA</text>

                <rect x="190" y="90" width="108" height="20" rx="4" fill="rgba(2,132,199,0.15)" stroke="rgba(2,132,199,0.3)"/>
                <text x="196" y="103" fill="#60a5fa" fontSize="7.5" fontFamily="var(--font-mono)" fontWeight="600">MODEL: RESNET50</text>

                <rect x="190" y="116" width="108" height="24" rx="4" fill="rgba(37,99,235,0.25)" stroke="#2563eb"/>
                <text x="196" y="131" fill="#ffffff" fontSize="8" fontFamily="var(--font-heading)" fontWeight="700">CLASSIFICATION READY</text>
              </svg>
            </div>
            <div className="project-body">
              <div>
                <div className="project-tags">
                  <span className="tag">Python</span>
                  <span className="tag">TensorFlow</span>
                  <span className="tag">OpenCV</span>
                  <span className="tag">Librosa</span>
                  <span className="tag">Multi-Modal AI</span>
                </div>
                <h3 className="project-title">L.U.N.A. — AI Multi-Modal Lung Disease Detection</h3>
                <p className="project-desc">
                  Multi-modal deep learning platform combining chest X-ray scans (ResNet50 CNN) with acoustic stethoscopic sound spectrograms for rapid diagnostic triage.
                </p>
                <ul className="project-features-list">
                  <li>94.2% diagnostic accuracy on validation radiology datasets.</li>
                  <li>Grad-CAM visual heatmaps for lesion interpretability.</li>
                  <li>Mel-Spectrogram audio feature extraction via Librosa.</li>
                </ul>
              </div>
              <div className="project-links">
                <a href="https://github.com/vasanthakumar2005" target="_blank" rel="noreferrer" className="btn btn-secondary btn-project">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  Codebase
                </a>
                <a href="portfolio_document.html#luna" target="_blank" rel="noreferrer" className="btn btn-doc btn-project">
                  Architecture Specs
                </a>
              </div>
            </div>
          </div>

          {/* Project 2: MCET Document Portal */}
          <div className="glass-card project-card">
            <div className="project-media">
              <svg className="project-svg-bg" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="320" height="160" fill="#0f172a"/>
                
                {/* Header Bar */}
                <rect x="12" y="10" width="296" height="24" rx="6" fill="#1e293b" stroke="rgba(255,255,255,0.08)"/>
                <circle cx="24" cy="22" r="3.5" fill="#ef4444"/>
                <circle cx="35" cy="22" r="3.5" fill="#f59e0b"/>
                <circle cx="46" cy="22" r="3.5" fill="#10b981"/>
                <text x="62" y="25" fill="#94a3b8" fontSize="8" fontFamily="var(--font-mono)" fontWeight="600">TEXT / DOC → ENGINE → CLASSIFICATION</text>

                {/* Left Side: Document Text & NLP Parser Panel */}
                <rect x="12" y="42" width="170" height="106" rx="8" fill="#1e293b" stroke="rgba(255,255,255,0.1)"/>
                <text x="22" y="58" fill="#38bdf8" fontSize="7.5" fontFamily="var(--font-mono)" fontWeight="700">DOCUMENT_INPUT.PDF</text>
                
                {/* Mock Text Lines with Token Highlights */}
                <rect x="22" y="68" width="110" height="6" rx="2" fill="#334155"/>
                <rect x="136" y="68" width="36" height="6" rx="2" fill="#2563eb"/>
                <rect x="22" y="80" width="45" height="6" rx="2" fill="#0284c7"/>
                <rect x="71" y="80" width="101" height="6" rx="2" fill="#334155"/>
                <rect x="22" y="92" width="120" height="6" rx="2" fill="#334155"/>
                <rect x="146" y="92" width="26" height="6" rx="2" fill="#38bdf8"/>
                <rect x="22" y="104" width="80" height="6" rx="2" fill="#334155"/>
                <rect x="106" y="104" width="66" height="6" rx="2" fill="#334155"/>

                <rect x="22" y="120" width="150" height="20" rx="4" fill="rgba(37,99,235,0.1)" stroke="rgba(37,99,235,0.25)"/>
                <text x="28" y="133" fill="#60a5fa" fontSize="7" fontFamily="var(--font-mono)">ENCRYPTED & AUTHENTICATED</text>

                {/* Right Side: Role & Sentiment/Category Distribution */}
                <rect x="190" y="42" width="118" height="106" rx="8" fill="#1e293b" stroke="rgba(255,255,255,0.1)"/>
                <text x="200" y="58" fill="#64748b" fontSize="7" fontFamily="var(--font-mono)">RBAC ACCESS ENGINE</text>

                <rect x="200" y="66" width="98" height="18" rx="4" fill="rgba(37,99,235,0.15)"/>
                <text x="206" y="78" fill="#38bdf8" fontSize="7" fontFamily="var(--font-mono)" fontWeight="600">STUDENT</text>

                <rect x="200" y="88" width="98" height="18" rx="4" fill="rgba(2,132,199,0.15)"/>
                <text x="206" y="100" fill="#60a5fa" fontSize="7" fontFamily="var(--font-mono)" fontWeight="600">FACULTY</text>

                <rect x="200" y="110" width="98" height="24" rx="4" fill="rgba(5,150,105,0.15)" stroke="rgba(5,150,105,0.3)"/>
                <text x="206" y="125" fill="#10b981" fontSize="7.5" fontFamily="var(--font-mono)" fontWeight="700">ADMIN CONTROL</text>
              </svg>
            </div>
            <div className="project-body">
              <div>
                <div className="project-tags">
                  <span className="tag">HTML5/CSS3</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">MySQL</span>
                  <span className="tag">RBAC Auth</span>
                </div>
                <h3 className="project-title">MCET Document Management Portal</h3>
                <p className="project-desc">
                  Centralized, high-security web portal built for Dr. Mahalingam College of Engineering & Technology (Guided by Dr. Arun Madhavan, Feb 2026).
                </p>
                <ul className="project-features-list">
                  <li>Role-Based Access Control (Students, Faculty, Admin).</li>
                  <li>Encrypted PDF document preview & upload pipeline.</li>
                  <li>Reduced institutional document retrieval time by 70%.</li>
                </ul>
              </div>
              <div className="project-links">
                <a href="https://github.com/vasanthakumar2005" target="_blank" rel="noreferrer" className="btn btn-secondary btn-project">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  Codebase
                </a>
                <a href="portfolio_document.html#mcet" target="_blank" rel="noreferrer" className="btn btn-doc btn-project">
                  System Workflow
                </a>
              </div>
            </div>
          </div>

          {/* Project 3: Market Mapping Dashboard */}
          <div className="glass-card project-card">
            <div className="project-media">
              <svg className="project-svg-bg" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="320" height="160" fill="#0f172a"/>
                
                {/* Header Bar */}
                <rect x="12" y="10" width="296" height="24" rx="6" fill="#1e293b" stroke="rgba(255,255,255,0.08)"/>
                <circle cx="24" cy="22" r="3.5" fill="#ef4444"/>
                <circle cx="35" cy="22" r="3.5" fill="#f59e0b"/>
                <circle cx="46" cy="22" r="3.5" fill="#10b981"/>
                <text x="62" y="25" fill="#94a3b8" fontSize="8" fontFamily="var(--font-mono)" fontWeight="600">DATA → ANALYSIS → FORECAST</text>

                {/* Main Graph Area */}
                <rect x="12" y="42" width="296" height="106" rx="8" fill="#1e293b" stroke="rgba(255,255,255,0.1)"/>
                
                {/* Gridlines */}
                <line x1="24" y1="65" x2="296" y2="65" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                <line x1="24" y1="90" x2="296" y2="90" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                <line x1="24" y1="115" x2="296" y2="115" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>

                {/* Historical Actual Sales Trend Line (Solid Blue) */}
                <path d="M 30 115 L 75 95 L 120 100 L 165 72 L 210 65" stroke="#2563eb" strokeWidth="2.5" fill="none"/>
                <circle cx="30" cy="115" r="3.5" fill="#38bdf8"/>
                <circle cx="75" cy="95" r="3.5" fill="#38bdf8"/>
                <circle cx="120" cy="100" r="3.5" fill="#38bdf8"/>
                <circle cx="165" cy="72" r="3.5" fill="#38bdf8"/>
                <circle cx="210" cy="65" r="3.5" fill="#38bdf8"/>

                {/* Forecast Trend Line (Dashed Cyan) */}
                <path d="M 210 65 L 255 52 L 290 48" stroke="#0284c7" strokeWidth="2.5" strokeDasharray="4 4" fill="none"/>
                <circle cx="255" cy="52" r="3" fill="#60a5fa"/>
                <circle cx="290" cy="48" r="3" fill="#60a5fa"/>

                {/* X-Axis Labels */}
                <text x="24" y="135" fill="#64748b" fontSize="7" fontFamily="var(--font-mono)">Q1</text>
                <text x="69" y="135" fill="#64748b" fontSize="7" fontFamily="var(--font-mono)">Q2</text>
                <text x="114" y="135" fill="#64748b" fontSize="7" fontFamily="var(--font-mono)">Q3</text>
                <text x="159" y="135" fill="#64748b" fontSize="7" fontFamily="var(--font-mono)">Q4</text>
                <text x="204" y="135" fill="#38bdf8" fontSize="7" fontFamily="var(--font-mono)" fontWeight="700">Q1 (FCST)</text>
                <text x="252" y="135" fill="#38bdf8" fontSize="7" fontFamily="var(--font-mono)" fontWeight="700">Q2 (FCST)</text>

                {/* Legend Badges */}
                <rect x="180" y="48" width="55" height="14" rx="3" fill="rgba(37,99,235,0.15)"/>
                <text x="184" y="58" fill="#38bdf8" fontSize="6.5" fontFamily="var(--font-mono)">― ACTUAL</text>

                <rect x="240" y="48" width="60" height="14" rx="3" fill="rgba(2,132,199,0.15)"/>
                <text x="244" y="58" fill="#60a5fa" fontSize="6.5" fontFamily="var(--font-mono)">-- FORECAST</text>
              </svg>
            </div>
            <div className="project-body">
              <div>
                <div className="project-tags">
                  <span className="tag">Power BI</span>
                  <span className="tag">DAX Measures</span>
                  <span className="tag">Excel</span>
                  <span className="tag">Market Analytics</span>
                </div>
                <h3 className="project-title">Market Mapping for CCTV Sales</h3>
                <p className="project-desc">
                  Comprehensive geographic and sales intelligence dashboard evaluating competitor density and hardware sales across 100+ CCTV retail stores.
                </p>
                <ul className="project-features-list">
                  <li>Cleaned survey data from 100+ retail vendors.</li>
                  <li>DAX calculations for regional market share & price tiering.</li>
                  <li>Directly optimized client marketing & distribution routes.</li>
                </ul>
              </div>
              <div className="project-links">
                <a href="portfolio_document.html#market" target="_blank" rel="noreferrer" className="btn btn-doc btn-project" style={{ width: '100%', textAlign: 'center' }}>
                  View Power BI Dashboard Report
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
