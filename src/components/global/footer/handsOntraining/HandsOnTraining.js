import React from 'react';
import styles from './styles.module.css';

const cards = [
  {
    id: 1,
    imageUrl: 'https://onelearninghealthcare.com/wp-content/uploads/2022/10/Gynec-card-1.png',
    alt: 'gynaecology',
  },
  {
    id: 2,
    imageUrl: 'https://onelearninghealthcare.com/wp-content/uploads/2022/10/iui-card-1.png',
    alt: 'IUI',
  },
  {
    id: 3,
    imageUrl: 'https://onelearninghealthcare.com/wp-content/uploads/2022/10/fetal-intervention-card.png',
    alt: 'fetalIntervention',
  },
  {
    id: 4,
    imageUrl: 'https://onelearninghealthcare.com/wp-content/uploads/2022/11/3D4Dgyn-1024x726.png',
    alt: '3D/4D Gynaecology',
  },
  {
    id: 5,
    imageUrl: 'https://onelearninghealthcare.com/wp-content/uploads/2022/11/gynoncology-1024x726.png',
    alt: 'Oncology',
  },
  {
    id: 6,
    imageUrl: 'https://onelearninghealthcare.com/wp-content/uploads/2022/12/ivfhands-on-card-1-1024x726.png',
    alt: 'IVF',
  },
  {
    id: 7,
    imageUrl: 'https://onelearninghealthcare.com/wp-content/uploads/2022/12/fetal-neuro-hands-on-1-1024x726.png',
    alt: 'Fetal Neuro',
  },
  {
    id: 8,
    imageUrl: 'https://onelearninghealthcare.com/wp-content/uploads/2022/12/mskhandson-1024x726.png',
    alt: 'Musculoskeletal Ultrasound',
  },
  {
    id: 9,
    imageUrl: 'https://onelearninghealthcare.com/wp-content/uploads/2022/12/adultecho-1024x726.png',
    alt: 'Echocardiography',
  },
];

function AllCourses() {
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <h2>All Courses</h2>

        <select className={styles.dropdown}>
          <option>OBSTETRICS ULTRASOUND</option>
          <option>Ultrasound Obstetrics Doppler Course</option>
          <option>Fetal Neurosonography</option>
          <option>Fetal Intervention</option>
          <option>Basic Fetal Medicine</option>
          <option>Obstetrics Emergency Course</option>
          <option>3D/4D Obstetrics Ultrasound</option>
        </select>

        <select className={styles.dropdown}>
          <option>GYNECOLOGY ULTRASOUND</option>
          <option>Basic Gynecology Ultrasound</option>
        </select>

        <p>BASIC ULTRASOUND TECHNIQUES & 3D/4D APPLICATIONS</p>
        <p>UPCOMING HANDS-ON PROGRAM</p>
      </aside>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <hr />
          <h2>HANDS-ON TRAINING</h2>
        </div>
        <div className={styles.sectionContent}>
          {cards.map((card) => (
            <div key={card.id} className={styles.card}>
              <img src={card.imageUrl} alt={card.alt} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AllCourses;
