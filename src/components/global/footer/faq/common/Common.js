import React from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

const Common = ({smartClassJoin}) =>{
  
  const navigation = useNavigate();
  const haveQuestion = () => {
    navigation("/faq");
  }
  return(
    <div className={styles.bottomSection}>
    <div className={styles.registerButton}>
      <h1>Join us at ONE|Smart Class</h1>
      <button className={styles.btn} onClick={smartClassJoin}>Register Now</button>
    </div>
    <div className={styles.contactButton}>
      <h1>Have Questions?</h1>
      <button className={styles.btn} onClick={haveQuestion}>Contact Us</button>
    </div>
  </div>
  )
}

export default Common;