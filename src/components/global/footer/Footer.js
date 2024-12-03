// src/components/Footer.js
import React, { useState } from 'react';
import styles from './footer.module.css';
import { Link } from 'react-router-dom';
import FooterLink from './FooterLink';
// import EmailIcon from '@mui/icons-material/Email';
// import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
// import BusinessIcon from '@mui/icons-material/Business';
const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubscription = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSuccess('Thank you for subscribing!');
    setEmail('');
    // Here you would typically handle the subscription logic (e.g., API call)
  };

  return (
    <>
    
    <footer className={styles.footer}>
    <FooterLink />
      <div className={styles.footerInner}>
      
        <div className={styles.container}>
          <div className={styles.column}>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/" className={styles.link}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/academy" className={styles.link}>
                  ONE|Learning Academy
                </Link>
              </li>
              <li>
                <Link to="/parnerwithus" className={styles.link}>
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link to="/community" className={styles.link}>
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>Contact Us</h3>
            <p>info@onelearninghealthcare.com</p>
            <p>+91 - 95192 84449</p>
            <p>
              Onelearning Edusphere pvt ltd C/O STPI Medtech, 3rd floor, old
              library building, SGPGI, Lucknow
            </p>
          </div>

          <div className={styles.column}>
            <h3 className={styles.heading}>Contact With Us</h3>
            <form
              onSubmit={handleSubscription}
              className={styles.newsletterForm}
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.emailInput}
              />
              <button type="submit" className={styles.subscribeButton}>
                Contact
              </button>
              {error && <p className={styles.error}>{error}</p>}
              {success && <p className={styles.success}>{success}</p>}
            </form>
          </div>

          <div className={styles.socialMedia}>
            <h3>Follow Us</h3>
            <div className={styles.icons}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.copyRight}>
          <p>
            &copy; {new Date().getFullYear()} One-Learning HealthCare. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </>
    
  );
};

export default Footer;
