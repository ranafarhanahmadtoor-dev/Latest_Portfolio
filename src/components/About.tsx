import React from 'react';
import styles from './About.module.css';

const About = () => {
  const skills = [
    { name: 'Artificial Intelligence', icon: '🤖' },
    { name: 'Agentic AI', icon: '🧠' },
    { name: 'n8n Automation', icon: '⚡' },
    { name: 'Full Stack Dev', icon: '💻' },
    { name: 'Cybersecurity', icon: '🛡️' },
    { name: 'Systems Architect', icon: '🏛️' },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className="text-gradient">Innovating at the Edge</h2>
          <p className={styles.text}>Crafting intelligent systems that bridge the gap between human intuition and machine efficiency.</p>
        </div>
        
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              I am Rana Farhan Ahmad Toor, an AI-Driven Full Stack Engineer and Agentic AI Architect based in Faisalabad, Pakistan. With a Bachelor's in Artificial Intelligence from the National University of Modern Languages (NUML), my focus is on building the next generation of autonomous systems.
            </p>
            <p>
              My expertise lies in developing complex workflow automations using n8n and designing agentic AI architectures that solve real-world problems. Currently, I contribute my skills as a Web Developer at Edify College of IT, where I blend modern web technologies with AI-driven logic.
            </p>
          </div>
          
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillCard}>
                <span className={styles.skillIcon}>{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
