import React from 'react';
import styles from './headerStyle.module.css';
import { Link, useNavigate } from 'react-router-dom';
import DarkMode from '../../theme/DarkMode';
import MyAccount from '../../withToken/myAccount/MyAccount';
function Header() {
  const navigation = useNavigate();
  let token = localStorage.getItem('token');
  const logoUrl =
    'https://onelearninghealthcare.com/wp-content/uploads/2020/12/One-Learning-logo-01-1024x302-6-165x49.png';

    const handleLogout = () => {

      localStorage.removeItem('token');
      navigation("/");
    }
  return (
    <nav>
    <input type='checkbox' name='' value="" id='check' className={styles.check} />
    <label for="check" className={styles.checkBtn} value="">
      <i className=' fa fa-bars'></i>
    </label>
      <label>
        <img src={logoUrl} alt="logo" className={styles.logo} />
      </label>
      <ul>
        <li>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="allcourses" className={styles.link}>
            All Courses
          </Link>
        </li>
        <li>
          <Link to="/academy" className={styles.link}>
            ONE|Learning Academy
          </Link>
        </li>
        <li>
          <Link to="/partnerwithus" className={styles.link}>
            Partner With Us
          </Link>
        </li>
        <li>
          <Link to="/community" className={styles.link}>
            Community
          </Link>
        </li>
        <li>
          {
            token && <Link to="/my-account" className={styles.link}>My Account</Link>
          }
        </li>
        <li>
        {
          token ? (
            <Link to = '/' className={styles.link} onClick={handleLogout}>Logout</Link>
          ) : (
            <Link to="/login" className={styles.link}>
            Login
          </Link>
          )
        }
          
        </li>
        <li>
        <DarkMode />

        </li>
      </ul>
    </nav>
  );
}

export default Header;
