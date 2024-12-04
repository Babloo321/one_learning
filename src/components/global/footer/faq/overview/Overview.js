import React from 'react'
import FaqHeader from '../faqHeader/FaqHeader'
import styles from './styles.module.css';
import Common from '../common/Common';
import { useNavigate } from 'react-router-dom';
function Overview() {
  const navigate = useNavigate();
  const handleSmartClassJoin = () =>{
    navigate("/joinSmartClass");
  }
  return (
    <>
    <FaqHeader />
    <div className={styles.overviewCont}>

    <div className={styles.top}>
      <div>
        <img src="https://onelearninghealthcare.com/wp-content/uploads/2021/09/R-1-1024x614.jpg" alt='img' className={styles.image}/>
      </div>
      <div className={styles.logoCont}>
        <img src='https://onelearninghealthcare.com/wp-content/uploads/2021/09/logo_one-removebg-preview-150x150.png' alt='logo' className={styles.logo}/>
        <p>ONE|Learning smart class</p>
        <button onClick={handleSmartClassJoin}>Register Now</button>
      </div>
    </div>

    <div className={styles.smartClass}>
      <h1>About Smart Class</h1>
      <iframe
        className={styles.video}
        src="https://www.youtube.com/embed/8qgJ2JrPg1k?autoplay=1&loop=1&playlist=8qgJ2JrPg1k"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>Unlike Webinars and Regular Conferences, Smart classes tend to concentrate more on in-classroom teaching and learning techniques using Simulation methods, Gamifications, Roleplays and many more. Moreover the blended approach of Physical trainings and online modules keeps the customers engagement and longer retention period.</p>
    </div>

    <div className={styles.event}>
    <h1>Next Event</h1>
    <div className={styles.divSection}>
      <div className={styles.buttonSection}>
        <h1>Smart Class – Kashmir 2022 | Infertility & IUI</h1>
        <p>Onelearning invites you on “ Infertility & IUI” hands-on training program </p>
        <button className={styles.btn} onClick={handleSmartClassJoin}>Join Smart Class</button>
      </div>
      <div className={styles.image}>
        <img src='https://onelearninghealthcare.com/wp-content/uploads/2021/10/facade-1024x640.png' alt='building' className={styles.img}/>
      </div>
    </div>
    </div>

    <div className={styles.package}>
    <h1>The Package</h1>
      <div className={styles.gridCont}>
      <div className={styles.gridItem}>
        <img src='https://onelearninghealthcare.com/wp-content/uploads/2021/09/AdobeStock_423075901-1024x436.jpeg' alt='classRoom' className={styles.img}/>
        <p>Lectures</p>
      </div>
      <div className={styles.gridItem}>
        <img src='https://onelearninghealthcare.com/wp-content/uploads/2021/09/AdobeStock_126661770-1024x436.jpeg' alt='product' className={styles.img}/>
        <p>Live Workshop</p>
      </div>
      <div className={styles.gridItem}>
        <img src='https://onelearninghealthcare.com/wp-content/uploads/2021/09/AdobeStock_227643780-1024x436.jpeg' alt='technology' className={styles.img}/>
        <p>Case Discussion</p>
      </div>
      </div>
    </div>
    </div>
      <Common smartClassJoin={handleSmartClassJoin}/>
    </>
  )
}

export default Overview