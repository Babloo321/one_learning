import styles from './faqHeader.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
const FaqHeader = () =>{
  return(
    <ul className={styles.links}>
    <li><Link to="/faq" className={styles.link}>Faq's</Link></li>
      <li><Link to="/overview" className={styles.link}>Overview</Link></li>
      <li><Link to="/aboutprogram" className={styles.link}>About Program</Link></li>
      <li><Link to="/event" className={styles.link}>Next Event</Link></li>
      <li><Link to="/apply" className={styles.link}>Apply</Link></li>
    </ul>
  )
}

export default FaqHeader;