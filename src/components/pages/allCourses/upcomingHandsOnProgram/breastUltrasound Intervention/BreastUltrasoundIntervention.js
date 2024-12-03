/*
import React from 'react'

import styles from './styles.module.css';
import { Link, useLocation  } from 'react-router-dom';
function BreastUltrasoundIntervention() {
  const location = useLocation();
  const { course } = location.state || {};
  console.log(course)
  return (
    <div className={styles.container}>


    <div className={styles.coursepurchesescontainer}>

      <div className={styles.hodingimage}>
        <span className={styles.discountimage}>↓ 12%</span>
        
        <img src={course.src} alt='product' className={styles.image}/>
      
      </div>

      <div className={styles.coursepurcheses}>
        <ul className={styles.linkul}>
          <li><Link to="/" className={styles.link}>Home/</Link></li>
          <li><Link to={"/home"} className={styles.link}>Uncategorized/</Link> </li>
          <li>Master Radiology Intervention Course Package</li>
        </ul>
        <Link to={"/home"} className={styles.uncategorized}>Uncategorized</Link>
         <h1 className={styles.heading}>Master Radiology Intervention Course Package</h1>
         <p className={styles.price}><span className={styles.lighttext}>₹250,000.00</span><span className={styles.boldtext}><strong>₹250,000.00</strong></span></p>
         <ul className={styles.listul}>
          <li>USG Guided Biopsy Procedure Hands-on</li>
          <li>USG Guided Nerve block Technique Hands-on</li>
          <li>MSK USG & Intervention</li>
          <li>Vascular USG and intervention</li>
          <li>Fetal Ultrasound Intervention</li>
         </ul>
         <div className={styles.buttonsection}>
         <button className={styles.applybtn}>Apply Now</button>
         </div>
      </div>

    </div>
  </div>
  )
}

export default BreastUltrasoundIntervention
*/


import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './styles.module.css';

function BreastUltrasoundIntervention() {
  // Retrieve course details from React Router's state
  const location = useLocation();
  const { details } = location.state || {}; // Fallback in case state is undefined

  if (!details) {
    return <p>No course details available.</p>; // Display message if no data is provided
  }

  return (
    <div className={styles.container}>
      {/* Main Course Details Container */}
      <div className={styles.coursepurchesescontainer}>
        {/* Course Image and Discount */}
        <div className={styles.hodingimage}>
          {details.discount && details.discount !== "0%" && (
            <span className={styles.discountimage}>↓ {details.discount}</span>
          )}
          <img src={details.src} alt={details.heading} className={styles.image} />
        </div>

        {/* Course Information */}
        <div className={styles.coursepurcheses}>
          {/* Breadcrumb Navigation */}
          <ul className={styles.linkul}>
            <li>
              <a href="/" className={styles.link}>Home/</a>
            </li>
            <li>
              <a href="/courses" className={styles.link}>Courses/</a>
            </li>
            <li>{details.courseName}</li>
          </ul>

          {/* Course Title */}
          <h1 className={styles.heading}>{details.heading}</h1>

          {/* Course Price */}
          {typeof details.price === "object" ? (
            <p className={styles.price}>
              <span className={styles.lighttext}>{details.price.lightPrice}</span>
              <span className={styles.boldtext}>
                <strong>{details.price.darkPrice}</strong>
              </span>
            </p>
          ) : (
            <p className={styles.price}>
              <strong>{details.price}</strong>
            </p>
          )}

          {/* Course Description */}
          <ul className={styles.listul}>
            <li>{details.text || "Course details not provided."}</li>
            {details.dropdown && details.dropdown.module && (
              <li>Module: {details.dropdown.module}</li>
            )}
            {details.dropdown && details.dropdown.center && (
              <>
                <li>Center 1: {details.dropdown.center.first || "N/A"}</li>
                <li>Center 2: {details.dropdown.center.second || "N/A"}</li>
              </>
            )}
          </ul>

          {/* Register Button */}
          <div className={styles.buttonsection}>
            <button className={styles.applybtn}>Register Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreastUltrasoundIntervention;
