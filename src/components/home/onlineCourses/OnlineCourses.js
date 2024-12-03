import React from 'react';
import styles from './styles.module.css';

const courses = [
  { id: 1, title: 'Fetal Ultrasound Intervention', location: 'Kolkata', date: '14th-15th Dec, 2024' },
  { id: 2, title: 'Advanced Cardiac Imaging', location: 'Mumbai', date: '20th-22nd Jan, 2025' },
  { id: 3, title: 'Neonatal Care Workshop', location: 'Delhi', date: '10th Feb, 2025' },
  { id: 4, title: 'Prenatal Genetic Counseling', location: 'Bangalore', date: '5th-6th Mar, 2025' },
];
function UpcomingTrainingProgram() {
  return (
    <div className={styles.upcomingTraining}>
      <h2>Online Courses</h2>
      <div className={styles.grid_container}>
        {courses.map((course) => (
          <div key={course.id} className={styles.grid_item}>
            <h4>{course.date}</h4>
            <h3>{course.title}</h3>
            <p>{course.location}</p>
            <button className={styles.registerBtn}>Register Now</button>
          </div>
        ))}
      </div>
      <button className={styles.btn}>VIEW ALL PROGRAMS</button>
      <hr className={styles.hr}/>  
    </div>
  );
}

export default UpcomingTrainingProgram;

/*
<div className={styles.grid_item}>
<h4>14th-15th Dec, 2024</h4>
  <h3>Fetal Ultrasound Intervention</h3>
  <p>Kolkata</p>
  <button className={styles.registerBtn}>Register Now</button>
</div>
*/
