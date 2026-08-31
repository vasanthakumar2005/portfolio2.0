import React, { useState } from 'react';

export const Contact = ({ onShowToast }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: '', email: '', subject: '', message: '' });
    if (onShowToast) {
      onShowToast();
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">GET IN TOUCH</span>
          <h2 className="section-title">Contact <span>Me</span></h2>
        </div>

        <div className="contact-grid">
          <div className="glass-card contact-info-card">
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>Let's discuss a project or opportunity</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '30px' }}>
                Open for AI & Data Science opportunities, Machine Learning internships, and full-stack AI product development roles.
              </p>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <div className="contact-lbl">Email Address</div>
                  <a href="mailto:dvasanthakumarduraisamy@gmail.com" className="contact-val">dvasanthakumarduraisamy@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <div className="contact-lbl">Phone</div>
                  <a href="tel:+919345285202" className="contact-val">+91 93452 85202</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </div>
                <div>
                  <div className="contact-lbl">LinkedIn</div>
                  <a href="https://linkedin.com/in/vasanthkumar083" target="_blank" rel="noreferrer" className="contact-val">linkedin.com/in/vasanthkumar083</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </div>
                <div>
                  <div className="contact-lbl">GitHub</div>
                  <a href="https://github.com/vasanthakumar2005" target="_blank" rel="noreferrer" className="contact-val">github.com/vasanthakumar2005</a>
                </div>
              </div>
            </div>
          </div>

          <form className="glass-card contact-form" id="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                className="form-input"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className="form-input"
                required
                placeholder="john@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                className="form-input"
                required
                placeholder="AI Project Collaboration"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="form-input"
                required
                placeholder="Write your message here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Send Message
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
