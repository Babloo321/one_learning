// components/Login.js
import React from 'react';
import styles from './stylesFirst.module.css';

function Login({ onToggle }) {
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h2 className={styles.heading}>Login</h2>
                <form>
                    <input
                        type="email"
                        placeholder="Email"
                        className={styles.input}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className={styles.input}
                        required
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
