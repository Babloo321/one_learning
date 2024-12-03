import React from 'react'
import styles from './styles.module.css'
import { useLocation } from 'react-router-dom';
function BecomeMember() {
  const location = useLocation();
  const { details } = location.state || {};
  console.log(details);
  console.log(details.heading)
  console.log(details.text)
  return (
    <div className={styles.container}>
      {/* Details Container */}
      <div className={styles.detailsContainer}>
        <h1 className={styles.heading}>{details.heading}</h1>
        <p className={styles.text}>{details.text}</p>
      </div>

      {/* Form Container */}
      <div className={styles.formContainer}>
      <p>Apply For Sales Partner</p>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="country">Country</label>
            <input type="text" id="country" name="country" placeholder="Enter your country" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" placeholder="Enter your city" />
          </div>
          <button type="submit" className={styles.submitButton}>
            Send
          </button>
        </form>
      </div>

    </div>
  )
}

export default BecomeMember