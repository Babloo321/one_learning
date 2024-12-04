import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
const CourseContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p>Learn From The Biggest Ultrasound Mentors</p>
      </div>
      <div className={styles.courseButton}>
          <p>For Courses Click here <span><Link to="/allcourses">Courses</Link></span></p>
      </div>
    </div>
  )
};

export default CourseContent;