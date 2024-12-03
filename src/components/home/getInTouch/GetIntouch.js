import React,{ useState } from 'react'
import styles from './styles.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function GetIntouch() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const handleClickForFB = ()=>{
    window.open("https://www.facebook.com/ONELearnighealthcare/", "_blank")
  }
  const handleClickForINSTA = () =>{
    window.open("https://www.instagram.com/one_learning/", "_blank");
  }
  const handleClickForIN = () =>{
    window.open("https://www.linkedin.com/company/onelearningedusphere/","_blank");
  }
  const handleClickForX = () =>{
    window.open("https://x.com/OEdusphere","_blank");
  }
  // Handler to manage form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Here you can add further logic, such as form validation or API calls
  };
  return (
    <section className={styles.getintouch}>

    <div className={styles.content}>
      <h2>Get In Touch</h2>
      <p>Have questions or ready to take the next step? We're here to help. Reach out today, and let's discuss how we can bring your vision to life. Your success is our priority!</p>
    </div>

    <div className={styles.document}>

    <form onSubmit={handleSubmit} className={styles.formData}>
        <input
          placeholder='Name'
          type="text"
          className={styles.input}
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
    
        <input
          placeholder='Email'
          type="email"
          className={styles.input}
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          placeholder='Phone Number'
          type="tel"
          className={styles.input}
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
  
        <input
          placeholder='Company/Degree'
          type="text"
          className={styles.input}
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      
        <textarea
          placeholder='Drop a Message Here'
          className={styles.input}
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      
      <button type="submit" className={styles.formBtn}>Send Message</button>
    </form>

    <div className={styles.contact}>
    <p>One-Learning</p>
    <p>onelearning@gmail.com</p>
    <p>+918584838281</p>
    <br /><br /> <br />
    <h2>We're Here 24*7</h2>
    <ul>
      <li onClick={handleClickForFB}><span><FacebookIcon /></span></li>
      <li onClick={handleClickForINSTA}><span><InstagramIcon /></span></li>
      <li onClick={handleClickForX}><span><XIcon /></span></li>
      <li onClick={handleClickForIN}><span><LinkedInIcon /></span></li>
    </ul>
    </div>

    </div>

    </section>
  )
}

export default GetIntouch