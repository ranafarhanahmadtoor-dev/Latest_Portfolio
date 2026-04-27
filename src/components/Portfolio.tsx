import React from 'react';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'Agentic Workflow Engine',
      tag: 'Agentic AI',
      description: 'An autonomous system designed to orchestrate complex tasks using n8n and LLM agents.',
      emoji: '⛓️'
    },
    {
      title: 'Intelligent ERP Integration',
      tag: 'Full Stack',
      description: 'A modern ERP system with AI-driven predictive analytics and automated reporting.',
      emoji: '📊'
    },
    {
      title: 'Cybersecurity Sentinel',
      tag: 'Security',
      description: 'An AI-powered monitoring tool that detects anomalies and potential threats in real-time.',
      emoji: '🛡️'
    }
  ];

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className="text-gradient">Future Visions</h2>
          <p style={{ color: 'var(--text-dim)' }}>A glimpse into the upcoming projects and innovations.</p>
        </div>
        
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imagePlaceholder}>{project.emoji}</div>
              <div className={styles.cardContent}>
                <span className={styles.tag}>{project.tag}</span>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.link}>
                  View Project <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
