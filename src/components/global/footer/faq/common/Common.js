import React from 'react';
import styles from './styles.module.css';
const Common = () =>{
  return(
    <div className={styles.bottomSection}>
    <div className={styles.registerButton}>
      <h1>Join us at ONE|Smart Class</h1>
      <button className={styles.btn}>Register Now</button>
    </div>
    <div className={styles.contactButton}>
      <h1>Have Questions?</h1>
      <button className={styles.btn}>Contact Us</button>
    </div>
  </div>
  )
}

export default Common;