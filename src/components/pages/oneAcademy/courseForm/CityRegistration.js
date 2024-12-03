import React,{ useState} from 'react'
import styles from './styles.module.css';
function CityRegistration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [medicalRefNo, setMedicalRefNo] = useState('');
  const [preferredMonth, setPreferredMonth] = useState('');
  const [preferredCity, setPreferredCity] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const months = [
    { value: 'January', label: 'January' },
    { value: 'February', label: 'February' },
    { value: 'March', label: 'March' },
    { value: 'April', label: 'April' },
    { value: 'May', label: 'May' },
    { value: 'June', label: 'June' },
    { value: 'July', label: 'July' },
    { value: 'August', label: 'August' },
    { value: 'September', label: 'September' },
    { value: 'October', label: 'October' },
    { value: 'November', label: 'November' },
    { value: 'December', label: 'December' },
  ];

  const cities = [
    { value: 'Erode-Available', label: 'Erode - Available' },
    { value: 'Tumkur - Available', label: 'Tumkur - Available' },
    { value: 'Lucknow - Available', label: 'Lucknow - Available' },
    { value: 'Kolkata - Available', label: 'Kolkata - Available' },
    { value: 'Ahmedabad - Available', label: 'Ahmedabad - Available' },
    { value: 'Patna - Upcoming', label: 'Patna - Upcoming' },
    { value: 'Srinagar - Upcoming', label: 'Srinagar - Upcoming' },
  ];

  const courses = [
    { value: 'Fetal Therapy', label: 'Fetal Therapy' },
    { value: 'Obstetrics Ultrasound Color Doppler', label: 'Obstetrics Ultrasound Color Doppler' },
    { value: 'Musculoskeletal Ultrasound', label: 'Musculoskeletal Ultrasound' },
    {value:"IVF & IUI",label:"IVF & IUI"},
    {value:"Gynaecology Ultrasound",label:"Gynaecology Ultrasound"},
    {value:"Fetal Medicine",label:"Fetal Medicine"},
    {value:"Fetal Medicine & Intervention",label:"Fetal Medicine & Intervention"},
    {value:"Obstetrics & Gynaecology",label:"Obstetrics Gynaecology"},
    {value:"Adult Echocardiography",label:"Adult Echocardiography"},
    {value:"Fetal Intervention Techniques",label:"Fetal Intervention Techniques"},
    {value:"First Trimesters Ultrasound",label:"First Trimesters Ultrasound"},
    {value:"Patient Blood Management Course",label:"Patient Blood Management Course"},
    {value:"Maternity Care Course",label:"Maternity Care Course"},
    {value:"ARDMS Course",label:"ARDMS Course"},
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', {
      name,
      email,
      phone,
      medicalRefNo,
      preferredMonth,
      preferredCity,
      selectedCourse,
    });
  };
  return (
    <div className={styles.maincontainer}>

    <div className={styles.formcontainer}>
    <h1 className={styles.formheading}>Upgrade your</h1>
    <p className={styles.formsubheading}>Ultrasound Skill</p>
    <div className={styles.formbox}>
      <h1>Register Your Interest For Next Batch</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder='Name'/>
        <br />
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Email'/>
        <br />
          <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder='Phone'/>
        <br />
          <input type="text" value={medicalRefNo} onChange={(event) => setMedicalRefNo(event.target.value)} placeholder='Medical Reg. No.' />
        <br />
        
        <p className={styles.label}>
          Preferred Month:
          </p>
          <select value={preferredMonth} onChange={(event) => setPreferredMonth(event.target.value)}>
            <option value="">Select Month</option>
            {months.map((month) => (
              <option key={month.value} value={month.value}>
                {month.label}
              </option>
            ))}
          </select>
        
        <p className={styles.label}>
          Preferrd City:
          </p>
          <select value={preferredCity} onChange={(event) => setPreferredCity(event.target.value)}>
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            ))}
          </select>

        <p className={styles.label}>
          Selected Course:
          </p>
         <ul className={styles.lists}>
          {courses.map((course) => (
            <li key={course.value} onClick={() => setSelectedCourse(course.value)}>
                {course.value}
            </li>
          ))}
         </ul>
        <button type="submit" className={styles.btn}>Submit</button>
      </form>
    </div>
    </div>

    <div className={styles.textcontainer}>
      <p>Experience at</p>
      <h1>ONELearning Academy</h1>
      <p>A Blended Learning Concept - Online & Offline</p>
    </div>

    </div>
  )
}

export default CityRegistration

