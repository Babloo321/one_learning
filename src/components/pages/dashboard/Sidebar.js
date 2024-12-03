// src/components/Sidebar.js
import React from 'react';
import styles from './sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2>Healthcare Training</h2>
      <ul className={styles.navList}>
        <li>Home</li>
        <li>Courses</li>
        <li>Trainers</li>
        <li>Reports</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
