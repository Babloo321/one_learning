import React from 'react';
import styles from './styles.module.css';

const courses = [
  { id: 1, title: 'USG Guided Biopsy' },
  { id: 2, title: 'USG Guided Nerve Block Technique'},
  { id: 3, title: 'MSK USG & Intervention' },
  { id: 4, title: 'Vascular USG & Intervention'},
  { id: 5, title: 'Fetal Ultrasound Intervention'},
];
function Radiology() {
  return (
    <div className={styles.upcomingTraining}>
      <h2>Master Radiology Intervention Course</h2>
      <div className={styles.grid_container}>
        {courses.map((course) => (
          <div key={course.id} className={styles.grid_item}>
            <h3>{course.title}</h3>
            <button className={styles.registerBtn}>Register Now</button>
          </div>
        ))}
      </div>
      <button className={styles.btn}>Register for 5 in 1 Package</button>
      <hr className={styles.hr}/>  
    </div>
  );
}

export default Radiology;

