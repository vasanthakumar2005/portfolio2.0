import React from 'react';
import { X, Printer, Download, FileText, CheckCircle2, GraduationCap, Briefcase, Award } from 'lucide-react';
import { personalInfo, experiences, certifications, projects } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '900px' }} onClick={(e) => e.stopPropagation()}>
        
        {/* Header Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <FileText size={24} style={{ color: '#38bdf8' }} />
            <div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
                Executive Resume & Architectural Specs
              </h2>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                ATS-Optimized PDF Format &nbsp;•&nbsp; 2026 Edition
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={() => window.print()}
              className="btn btn-primary"
              style={{ padding: '8px 16px', fontSize: '0.82rem' }}
            >
              <Printer size={16} />
              <span>Export PDF / Print</span>
            </button>
            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                padding: '8px',
                borderRadius: '50%',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Document Body */}
        <div style={{ background: '#ffffff', color: '#0f172a', padding: '32px', borderRadius: '12px', fontFamily: 'sans-serif' }}>
          
          {/* Top Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '2px solid #0f172a', paddingBottom: '16px', marginBottom: '20px' }}>
            <div>
              <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                {personalInfo.name}
              </h1>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#2563eb', marginTop: '2px' }}>
                {personalInfo.degree}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#475569', marginTop: '2px' }}>
                {personalInfo.institution} (CGPA: {personalInfo.cgpa})
              </div>
            </div>

            <div style={{ textAlign: 'right', fontSize: '0.85rem', color: '#334155', lineHeight: 1.5 }}>
              <div><strong>Email:</strong> {personalInfo.email}</div>
              <div><strong>Phone:</strong> {personalInfo.phone}</div>
              <div><strong>Location:</strong> {personalInfo.location}</div>
              <div><strong>LinkedIn:</strong> {personalInfo.linkedin}</div>
            </div>
          </div>

          {/* Executive Summary */}
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', marginBottom: '8px' }}>
              Executive Summary
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.5 }}>
              {personalInfo.bio}
            </p>
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', marginBottom: '8px' }}>
              Technical Core Competencies
            </h3>
            <div style={{ fontSize: '0.88rem', color: '#334155', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <div><strong>Languages:</strong> Python, Java, JavaScript (ES6+), SQL</div>
              <div><strong>AI & Machine Learning:</strong> TensorFlow, Scikit-learn, OpenCV, Librosa</div>
              <div><strong>Analytics & BI:</strong> Power BI, DAX Measures, Advanced Excel, Pandas</div>
              <div><strong>Web Systems:</strong> React.js, HTML5/CSS3, MySQL, RBAC Security</div>
            </div>
          </div>

          {/* Internship Experience */}
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', marginBottom: '8px' }}>
              Internship Experience
            </h3>
            {experiences.map((exp) => (
              <div key={exp.id} style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.95rem', color: '#0f172a' }}>
                  <span>{exp.role} — {exp.company}</span>
                  <span style={{ fontSize: '0.85rem', color: '#64748b' }}>{exp.period}</span>
                </div>
                <ul style={{ paddingLeft: '18px', fontSize: '0.88rem', color: '#334155', marginTop: '4px' }}>
                  {exp.highlights.map((h, idx) => (
                    <li key={idx} style={{ marginBottom: '3px' }}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', marginBottom: '8px' }}>
              Featured Projects
            </h3>
            {projects.map((proj) => (
              <div key={proj.id} style={{ marginBottom: '10px' }}>
                <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#0f172a' }}>
                  {proj.title} <span style={{ fontWeight: 400, color: '#2563eb' }}>({proj.tech.join(', ')})</span>
                </div>
                <div style={{ fontSize: '0.86rem', color: '#334155' }}>
                  {proj.fullDesc}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', marginBottom: '8px' }}>
              Verified Certifications
            </h3>
            <div style={{ fontSize: '0.88rem', color: '#334155' }}>
              {certifications.map((c) => (
                <div key={c.id} style={{ marginBottom: '4px' }}>
                  • <strong>{c.title}</strong> ({c.issuer}, {c.date})
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={onClose} className="btn btn-secondary">
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
