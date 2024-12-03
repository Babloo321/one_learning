// src/components/Dashboard.js
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';
import styles from './dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <div className={styles.content}>
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
