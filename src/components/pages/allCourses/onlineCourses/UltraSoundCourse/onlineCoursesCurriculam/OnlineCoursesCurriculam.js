import React, { useEffect, useRef, useState } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import styles from './styles.module.css';

const OnlineCoursesCurriculam = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const curriculum = [
    'Basic Physics of 3D/4D',
    '2D Image Optimization and Machine Settings for 3D/4D',
    'Scanning Protocol, Axis and Planes',
    'How to Acquire 3D Dataset',
    'Analyzing 3D Dataset (Sectional Plane Analysis)',
    'Rendering 3D/4D',
    'Clinical Application in 3D/4D (Radiology/Obstetrics/Gyn etc)',
    'Advanced Application in 3D/4D',
    'Scenario based Evaluation'
  ];

  const itemsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      itemsRef.current.forEach((item, index) => {
        if (item) {
          const itemTop = item.getBoundingClientRect().top + window.scrollY;
          const itemBottom = itemTop + item.clientHeight;

          if (scrollPosition >= itemTop && scrollPosition <= itemBottom) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <h1 className={styles.heading}>Online Course Curriculam</h1>
    <div className={styles.container}>
      <div className={styles.verticalLine}></div>
      {curriculum.map((item, index) => (
        <div key={index} className={styles.item} ref={(el) => (itemsRef.current[index] = el)}>
          <FaPlayCircle className={`${styles.icon} ${activeIndex === index ? styles.active : styles.inactive}`} />
          <span>{item}</span>
        </div>
      ))}
    </div>
    </>
  );
};

export default OnlineCoursesCurriculam;