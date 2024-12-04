// components/Login.js
import React, { useState } from 'react';
import styles from './stylesFirst.module.css';
import { useNavigate } from 'react-router-dom';
function Login({ onToggle }) {
  const navigation  = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('token', `${formData.email}'s token`);
    console.log('Form submitted:', formData);
    navigation("/");
  };
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className={styles.input}
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className={styles.input}
            required
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit" className={styles.button}>
            Login
          </button>
          <p className={styles.linkText} onClick={onToggle}>
            Don't have an account? Sign Up
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
