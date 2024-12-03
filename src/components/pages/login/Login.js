// src/components/Login.js
/*
import React, { useState } from 'react';
import styles from './styles.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
    console.log('Login successful');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.infoSection}>
        <h1>Welcome to [Your Company]</h1>
        <p>Our mission is to deliver exceptional service and provide seamless solutions for our customers. Join us today and be part of our journey!</p>
      </div>
      
      <div className={styles.loginSection}>
        <div className={styles.loginCard}>
          <h2 className={styles.title}>Login</h2>
          {error && <p className={styles.error}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
*/
import React, { useState } from 'react'
import LoginFirst from './LoginFirst';
import SignupFirst from './SignupFirst';
function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
      setIsLogin((prev) => !prev);
  };

  return (
      <div>
          {isLogin ? (
              <LoginFirst onToggle={toggleForm} />
          ) : (
              <SignupFirst onToggle={toggleForm} />
          )}
      </div>
  );
}

export default Login