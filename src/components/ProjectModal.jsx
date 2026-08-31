import React from 'react';
import { X, CheckCircle2, Layers, Cpu, Database, Github, ExternalLink } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
          <div>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '4px 12px',
                borderRadius: '20px',
                background: 'rgba(99, 102, 241, 0.25)',
                color: '#38bdf8',
                marginBottom: '8px',
                display: 'inline-block'
              }}
            >
              {project.categoryLabel}
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.2 }}>
              {project.title}
            </h2>
          </div>
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

        {/* Full Description */}
        <p style={{ color: '#cbd5e1', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '24px' }}>
          {project.fullDesc}
        </p>

        {/* Metrics Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px', marginBottom: '28px' }}>
          {project.metrics.map((m, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '16px', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>
                {m.value}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '4px' }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Layers size={18} style={{ color: '#06b6d4' }} />
            <span>Key Engineering Deliverables</span>
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {project.features.map((feat, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.95rem', color: '#cbd5e1' }}>
                <CheckCircle2 size={16} style={{ color: '#10b981', flexShrink: 0, marginTop: '3px' }} />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architectural Specs Box */}
        {project.architectureSpecs && (
          <div
            style={{
              background: 'rgba(7, 9, 14, 0.8)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              borderRadius: '14px',
              padding: '20px',
              marginBottom: '28px'
            }}
          >
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#818cf8', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Cpu size={16} />
              <span>Data Pipeline Architecture</span>
            </h4>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#38bdf8', lineHeight: 1.6, wordBreak: 'break-word' }}>
              {project.architectureSpecs.pipeline}
            </div>
            <div style={{ marginTop: '10px', fontSize: '0.85rem', color: '#94a3b8' }}>
              <strong>Validation Result:</strong> {project.architectureSpecs.accuracyDetails}
            </div>
          </div>
        )}

        {/* Tech Badges */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600, marginBottom: '10px' }}>Technologies Used:</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  padding: '5px 12px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '16px' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            style={{ flex: 1, justifyContent: 'center' }}
          >
            <Github size={18} />
            <span>Open Codebase</span>
          </a>
          <button
            onClick={onClose}
            className="btn btn-secondary"
            style={{ flex: 1, justifyContent: 'center' }}
          >
            Close Modal
          </button>
        </div>

      </div>
    </div>
  );
};
