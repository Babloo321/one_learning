import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { images, doctorsData, facilityData } from './data';

function WhyChooseUs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  function facalities() {
    return facilityData.map((item) => (
      <div key={item.id} className={styles.facalityBox}>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </div>
    ));
  }

  function instructors() {
    return doctorsData.map((doctor, index) => (
      <div key={index} className={styles.instructor}>
        <div className={styles.instructor_image}>
          <img src={doctor.image} alt={`${doctor.name}-img`} />
        </div>
        <div className={styles.instructor_description}>
          <h4>Name: {doctor.name}</h4>
          <p>Description: {doctor.description}</p>
        </div>
      </div>
    ));
  }

  return (
    <div className={styles.container}>
      <h1>Why Choose Us?</h1>
      <div className={styles.facality}>{facalities()}</div>

      <div className={styles.instructorContainer}>
        <h2>Provide Top Instructor</h2>
        {instructors()}
      </div>

      <div className={styles.innerdiv}>
        <h2>Doctor Training</h2>
      <img
        className={styles.img}
        src={images[currentIndex].url}
        alt={images[currentIndex].alt}
      />
      </div>
      
    </div>
  );
}

export default WhyChooseUs;
