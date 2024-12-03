// src/components/Header.js
import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Welcome to Healthcare Training Dashboard</h1>
      <div className={styles.userMenu}>
        <span>User Name</span>
      </div>
    </div>
  );
};

export default Header;
