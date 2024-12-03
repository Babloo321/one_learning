
import FaqHeader from '../faqHeader/FaqHeader'
import Common from '../common/Common'
import React, { useState } from 'react';
import styles from './styles.module.css';

const Apply = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    city: '',
    role: '',
    specialization: '',
    experience: '',
    program: '',
    vaccinationStatus: '',
    idProof: null,
    photo: null,
    expectations: ''
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className={styles.container}>
      <FaqHeader />
    
    <form className={styles.form} onSubmit={handleSubmit}>
    <div className={styles.hAndPCont}>
      <h1>Your Application To</h1>
      <p>Smart Class Registration</p>
    </div>
      <label className={styles.label}>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} className={styles.input} />

      <label className={styles.label}>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} className={styles.input} />

      <label className={styles.label}>Password:</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} className={styles.input} visible="true" />

      <label className={styles.label}>Phone:</label>
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={styles.input} />

      <label className={styles.label}>City:</label>
      <input type="text" name="city" value={formData.city} onChange={handleChange} className={styles.input} />

      <label className={styles.label}>Select Your Role:</label>
      <select name="role" value={formData.role} onChange={handleChange} className={styles.select}>
        <option value="">Delegate</option>
        <option value="Student">Faculty</option>
        <option value="Professional">Organizer</option>
      </select>

      <label className={styles.label}>Specialization:</label>
      <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} className={styles.input} />

      <label className={styles.label}>Years of Experience:</label>
      <input type="number" name="experience" value={formData.experience} onChange={handleChange} className={styles.input} />

      <label className={styles.label}>Select Program:</label>
      <select name="program" value={formData.program} onChange={handleChange} className={styles.select}>
        <option value="">Ultrasound in Obstetric Emergency</option>
        <option value="Program A">Infertility IUI</option>
      </select>

      <label className={styles.label}>Select vaccination status:</label>
      <select name="vaccinationStatus" value={formData.vaccinationStatus} onChange={handleChange} className={styles.select}>
        <option value="Vaccinated">Fully Vaccinated</option>
        <option value="Vaccinated">Partialy Vaccinated</option>
        <option value="Not Vaccinated">Not Vaccinated</option>
      </select>

      <label className={styles.label}>Attach ID Proof:</label>
      <input type="file" name="idProof" onChange={handleChange} className={styles.fileInput} />

      <label className={styles.label}>Upload Passport Size Photo:</label>
      <input type="file" name="photo" onChange={handleChange} className={styles.fileInput} />

      <label className={styles.label}>Specific Expectations:</label>
      <textarea
        name="expectations"
        value={formData.expectations}
        onChange={handleChange}
        placeholder="Any specific expectation from this program"
        className={styles.textarea}
      />

      <button type="submit" className={styles.button}>Send</button>
    </form>
    <Common />
    </div>
  );
};

export default Apply;
