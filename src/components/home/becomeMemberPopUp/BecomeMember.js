import React, { useState } from 'react';
import styles from './styles.module.css';
const BecomeMember = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [trainingType, setTrainingType] = useState('');
  const [city, setCity] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [allowContact, setAllowContact] = useState(false);

  const trainingTypes = [
    { value: 'Online', label: 'Online' },
    { value: 'Offline', label: 'Offline' },
    { value: 'Blended', label: 'Blended' },
  ];

  const cities = [
    { value: 'New York', label: 'New York' },
    { value: 'Los Angeles', label: 'Los Angeles' },
    { value: 'Chicago', label: 'Chicago' },
    { value: 'Houston', label: 'Houston' },
    { value: 'Phoenix', label: 'Phoenix' },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', {
      name,
      password,
      email,
      trainingType,
      city,
      contactNo,
      allowContact,
    });
  };

  return (
    <div className={styles.container}>
      <h1>Register Now for An Incredible Experience at ONE|Learning</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Training Type:
          <select value={trainingType} onChange={(event) => setTrainingType(event.target.value)}>
            <option value="">Select Training Type</option>
            {trainingTypes.map((trainingType) => (
              <option key={trainingType.value} value={trainingType.value}>
                {trainingType.label}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Select City:
          <select value={city} onChange={(event) => setCity(event.target.value)}>
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Contact No.:
          <input type="tel" value={contactNo} onChange={(event) => setContactNo(event.target.value)} />
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={allowContact}
            onChange={(event) => setAllowContact(event.target.checked)}
          />
          I allow ONE|Learning team to contact me for promotions and sales
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default BecomeMember;