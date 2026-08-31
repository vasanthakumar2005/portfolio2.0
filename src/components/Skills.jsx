import React from 'react';

export const Skills = () => {
  const originalSkills = [
    { icon: '🐍', name: 'Python', badge: 'Advanced Language' },
    { icon: '☕', name: 'Java', badge: 'Object-Oriented' },
    { icon: '⚡', name: 'JavaScript', badge: 'ES6+ Web Logic' },
    { icon: '🤖', name: 'Scikit-learn', badge: 'ML Models' },
    { icon: '🧠', name: 'TensorFlow / Keras', badge: 'Neural Networks' },
    { icon: '👁️', name: 'OpenCV', badge: 'Computer Vision' },
    { icon: '🔬', name: 'Deep Learning', badge: 'CNN & Audio AI' },
    { icon: '📊', name: 'Power BI', badge: 'DAX & Market Mapping' },
    { icon: '🗄️', name: 'SQL / MySQL', badge: 'Relational Database' },
    { icon: '📈', name: 'Advanced Excel', badge: 'Pivot & Data Cleaning' },
    { icon: '🔢', name: 'Pandas & NumPy', badge: 'Data Processing' },
    { icon: '🌿', name: 'Git & GitHub', badge: 'Version Control' },
    { icon: '💻', name: 'VS Code', badge: 'Development IDE' },
    { icon: '📓', name: 'Jupyter Notebook', badge: 'Data Science Labs' }
  ];

  const duplicateCopies = originalSkills.slice(0, 10);
  const marqueeItems = [...originalSkills, ...duplicateCopies];

  return (
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">PROFICIENCIES</span>
          <h2 className="section-title">Technical <span>Skills & Tools</span></h2>
        </div>

        <div className="marquee-container">
          <div className="marquee-track">
            {marqueeItems.map((skill, idx) => (
              <div key={idx} className="marquee-card">
                <div className="skill-icon-wrap">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-category-badge">{skill.badge}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
