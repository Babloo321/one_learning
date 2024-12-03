import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styles from './styles.module.css';
function ComingSoonRegisterNow() {
  const location = useLocation();
  const card = location.state?.card;
  return (
    <div className={styles.container}>


      <div className={styles.coursepurchesescontainer}>

        
          <img src='https://onelearninghealthcare.com/wp-content/uploads/2024/09/ComingSoonBanner.png' alt='hodingimage' className={styles.image}/>

        <div className={styles.coursepurcheses}>
          <ul className={styles.linkul}>
            <li><Link to="/" className={styles.link}>Home/</Link></li>
            <li><Link to={"/home"} className={styles.link}>Uncategorized/</Link> </li>
            <li>{card.course}</li>
          </ul>
          <Link to={"/home"} className={styles.uncategorized}>Uncategorized</Link>
           <h1 className={styles.heading}>{card.course}</h1>
           <p className={styles.price}>{card.price}</p>
           <div className={styles.buttonsection}>
           <input type='number' className={styles.input} value={1}/>
           <button className={styles.applybtn}>Apply Now</button>
           </div>
           <hr />
        </div>

      </div>

    </div>
  );
}

export default ComingSoonRegisterNow;
