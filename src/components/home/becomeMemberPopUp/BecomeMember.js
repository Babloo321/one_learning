import React, { useState } from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
function BecomeMember({ onClose }) {
  const navigation = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [trainingType, setTrainingType] = useState('');
  const [city, setCity] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [allowContact, setAllowContact] = useState(false);

  const trainingTypes = [
    { value: 'Gyna Ultrasound', label: 'Gyna Ultrasound' },
    { value: 'Obsteric Ultrasound', label: 'obsteric Ultrasound' },
    { value: 'MSK Ultrasound', label: 'MSK Ultrasound' },
    {value:"Fetal Therapy",label:"Fetal Therapy"},
    {value:"Breast Ultrasound",label:"Breast Ultrasound"},
    {value:"Fetal Echocardiography",label:"Fetal Echocardiography"},
    {value:"Other",label:"Other"},
  ];

  const cities = [
    { value: 'Vizag', label: 'Vizag'},
    { value: 'Agra', label: 'Agra'},
    { value: 'Jodhpur', label: 'Jodhpur' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Ahmedabad', label: 'Ahmedabad' },
    {value:"Baroda",label:"Baroda"},
    {value:"Guwahati",label:"Guwahati"},
    {value:"Hyderabad",label:"Hyderabad"},
    {value:"Chandigarh",label:"Chandigarh"},
    {value:"Banglore",label:"Banglore"},
    {value:"Mumbai",label:"Mumbai"},
    {value:"Patna",label:"Patna"},
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', {
      userName,
      password,
      email,
      trainingType,
      city,
      contactNo,
      allowContact,
    });
    navigation("/");
    onClose();
  };

  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
      </div>

      <div className={styles.container}>
        <h1 className={styles.heading}>
          Register Now for An Incredible Experience at ONE|Learning
        </h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="userName">UserName</label>
            <input
              value={userName}
              type="text"
              id="userName"
              name="userName"
              placeholder="Enter your UserName"
              onChange={(event) => setUserName(event.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Training Type:</label>
            <select
              value={trainingType}
              onChange={(event) => setTrainingType(event.target.value)}
            >
              <option value="">Select Training Type</option>
              {trainingTypes.map((trainingType) => (
                <option key={trainingType.value} value={trainingType.value}>
                  {trainingType.label}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Select City:</label>
            <select
              value={city}
              onChange={(event) => setCity(event.target.value)}
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city.value} value={city.value}>
                  {city.label}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Contact No.:</label>
            <input
              type="tel"
              value={contactNo}
              onChange={(event) => setContactNo(event.target.value)}
            />
          </div>

          <div className={styles.checked}>
            <input
              type="checkbox"
              checked={allowContact}
              onChange={(event) => setAllowContact(event.target.checked)}
              className={styles.checkedBox}
            />
            <p>
              I allow ONE|Learning team to contact me for promotions and sales
            </p>
          </div>

          <button type="submit" className={styles.button}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default BecomeMember;
