import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a href="mailto:toorabdullah88@gmail.com" className={styles.email}>
          toorabdullah88@gmail.com
        </a>
        <div className={styles.socials}>
          <a 
            href="https://www.linkedin.com/in/rana-farhan-ahmad-toor-4b2094328" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
          <a href="#" className={styles.link}>Twitter</a>
          <a href="#" className={styles.link}>GitHub</a>
        </div>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Rana Farhan Ahmad Toor. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
