import React from 'react';
import styles from './CareerJourney.module.css';

const CareerJourney = () => {
  const experiences = [
    {
      date: '2023 - 2024',
      title: 'Intermediate Studies',
      company: 'Punjab Group Of Colleges',
      description: 'Foundational studies in technology and science, paving the way for a career in AI.'
    },
    {
      date: '2023 - 2024',
      title: 'AI Engineering Student',
      company: 'National University of Modern Languages (NUML)',
      description: 'Specialized in Artificial Intelligence, focusing on Machine Learning and Agentic Architectures.'
    },
    {
      date: 'June 2024 - Present',
      title: 'AI Engineer',
      company: 'Edify College of IT (PVT) LTD.',
      description: 'Developing responsive web applications and integrating AI-driven features to enhance educational platforms.'
    }
  ];

  return (
    <section id="journey" className={styles.journey}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className="text-gradient">Professional Evolution</h2>
          <p style={{ color: 'var(--text-dim)' }}>The path of continuous learning and technological mastery.</p>
        </div>
        
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.item}>
              <span className={styles.date}>{exp.date}</span>
              <h3 className={styles.title}>{exp.title}</h3>
              <span className={styles.company}>{exp.company}</span>
              <p className={styles.description}>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerJourney;
