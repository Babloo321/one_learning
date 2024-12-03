// components/Signup.js
import React from 'react';
import styles from './stylesFirst.module.css';

function Signup({ onToggle }) {
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h2 className={styles.heading}>Sign Up</h2>
                <form>
                    <input
                        type="text"
                        placeholder="Username"
                        className={styles.input}
                        required
                    />
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
                        Sign Up
                    </button>
                    <p className={styles.linkText} onClick={onToggle}>
                        Already have an account? Login
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
