"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Certifications.module.css';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<any>(null);

  const certifications = [
    {
      title: 'Agentic AI Specialist',
      issuer: 'Agentic AI',
      tag: 'AI Engineering',
      image: '/certificates/agentic-ai.png',
      date: 'Recent',
    },
    {
      title: 'Introduction to Modern AI',
      issuer: 'CISCO',
      tag: 'Artificial Intelligence',
      image: '/certificates/modern-ai.png',
      date: 'Recent',
    },
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'CISCO',
      tag: 'Cybersecurity',
      image: '/certificates/intro-cyber-security.png',
      date: 'Recent',
    }
  ];

  return (
    <section id="certifications" className={styles.certifications}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className="text-gradient">Professional Certifications</h2>
          <p style={{ color: 'var(--text-dim)' }}>
            Continuous learning and mastery of emerging technologies. Click on a certificate to view it in full size.
          </p>
        </div>
        
        <div className={styles.grid}>
          {certifications.map((cert, index) => (
            <div key={index} className={styles.card} onClick={() => setSelectedCert(cert)}>
              <div className={styles.imageWrapper}>
                <Image
                  src={cert.image}
                  alt={`${cert.title} Certificate`}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.tag}>{cert.tag}</span>
                <h3 className={styles.title}>{cert.title}</h3>
                <p className={styles.issuer}>{cert.issuer}</p>
                <div className={styles.date}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  {cert.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCert && (
        <div className={styles.modalOverlay} onClick={() => setSelectedCert(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setSelectedCert(null)}>×</button>
            <img 
              src={selectedCert.image} 
              alt={selectedCert.title} 
              className={styles.modalImage}
            />
            <h3 className={styles.modalTitle}>{selectedCert.title}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
