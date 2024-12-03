import React from 'react'
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
const courses = [
  {
    id: 1,
    title: 'Master Radiology Intervention Course Package',
   
  },
  /*
  {
    id: 2,
    title: 'Fetal Neurosonography Course',
   
  },
  {
    id: 3,
    title: 'Fetal Therapy Course',
   
  },
  {
    id: 4,
    title: 'Obstetrics Ultrasound Color Doppler Course',
   
  },
  {
    id: 5,
    title: 'Gynecology Ultrasound Course',
   
  },
  {
    id: 6,
    title: 'Fetal Genitourinary Tract Course',
   
  },
  {
    id: 7,
    title: 'Fetal Medicine Course',
   
  },
  {
    id: 8,
    title: 'Fetal Medicine Course',
   
  },
  */
];
function HandsOnPackage() {

  const navigation = useNavigate();
  const handleRedirectPage = () =>{
    navigation("/masterRadiologyInvention");
  }
  return (
    <section className={styles.section}>
    <div className={styles.sectionheading}>
    <hr></hr>
    <p>HANDS-ON TRAINING PACKAGE</p>
    </div>


    <div className={styles.grid_container}>
    {courses.map((course) => (
        <div key={course.id} className={styles.grid_item}>
          <p>{course.title}</p>
          <button className={styles.registerBtn} onClick={handleRedirectPage}>Register Now</button>
        </div>
      ))}
      </div>
    </section>
  )
}

export default HandsOnPackage