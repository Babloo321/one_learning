// src/components/MainContent.js
import React from 'react';
import styles from './mainContent.module.css';

const MainContent = () => {
  return (
    <div className={styles.mainContent}>
      <h2 className={styles.heading}>Courses Overview</h2>
      <p>Here you can find all the courses related to healthcare training.</p>
      {/* Add more content and components here as needed */}
    </div>
  );
};

export default MainContent;
