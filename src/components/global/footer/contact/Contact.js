import React, { useState } from 'react';
import styles from './styles.module.css';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dogLegs: '',
    phone: '',
    subject: '',
    comment: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with data: ${JSON.stringify(formData)}`);
  };

  return (
    <div className={styles.contactContainer}>



      <div className={styles.poster}>
        <h1>Need Help?</h1>
        <p>GET HEALTHCARE LEARNING SOLUTIONS WITH ONE LEARNING</p>
      </div>

      <div className={styles.communication}>
        <div className={styles.info}>
        <PhoneEnabledIcon />
          <h3>Call Us 24x7</h3>
          <p>+91 - 95192 84449</p>
        </div>
        <div className={styles.info}>
        <EmailIcon />
          <h3>Write Us</h3>
          <p>info@onelearninghealthcare.com</p>
        </div>
        <div className={styles.info}>
        
          <h3>Address</h3>
          <p>
            Onelearning Edusphere pvt ltd C/O STPI Medtech, 3rd floor, old
            library building, SGPGI, Lucknow
          </p>
        </div>
      </div>

      <div className={styles.contactUs}>
      <h2>Send Us Message</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="legs">How many legs does a dog have?</label>
                    <input
                        type="text"
                        id="legs"
                        name="legs"
                        value={formData.legs}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="comment">Comment or Message</label>
                    <textarea
                        id="comment"
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className={styles.submitButton}>
                    Send Message
                </button>
            </form>
      </div>



    </div>
  );
};

export default Contact;
