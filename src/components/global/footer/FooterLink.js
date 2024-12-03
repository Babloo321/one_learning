// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const FooterLink = () => {
  return (
    <div className={styles.mainFooter}>
      <ul>
        <li><Link to='/about' className={styles.link}>About</Link></li>
        <li><Link to='/faq' className={styles.link}>FAQ</Link></li>
        <li><Link to='/contact' className={styles.link}>Contact</Link></li>
        <li><Link to='/pressrelease' className={styles.link}>Press Release</Link></li>
        <li><Link to='/handsontraining' className={styles.link}>Hands-on Training</Link></li>
        <li><Link to='/term&cond' className={styles.link}>Terms and Condition</Link></li>
        <li><Link to='/privacy&policy' className={styles.link}>Privacy Policy</Link></li>
        <li><Link to='/refund' className={styles.link}>Refund & Cancellation</Link></li>
      </ul>
    </div>
  );
};

export default FooterLink;
