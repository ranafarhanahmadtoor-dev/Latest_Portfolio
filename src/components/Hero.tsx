'use client';

import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundShapes}>
        <div className={`${styles.shape} ${styles.shape1}`}></div>
        <div className={`${styles.shape} ${styles.shape2}`}></div>
      </div>
      
      <div className={`${styles.heroContent} animate-fade`}>
        <h1 className={styles.title}>
          <span className="text-gradient">Rana Farhan Ahmad Toor</span>
        </h1>
        <p className={styles.subtitle}>
          AI-Driven Full Stack Engineer | Agentic AI Architect | Workflow Automation & AI Systems
        </p>
        <div 
          className={styles.cta}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Explore My Journey
        </div>

      </div>
    </section>
  );
};

export default Hero;
