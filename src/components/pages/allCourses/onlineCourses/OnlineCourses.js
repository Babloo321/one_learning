import React from 'react'
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom';
const courses = [
  {
    id: 1,
    title: 'Basics of 3D/4D Ultrasound Course',
    time:'3 Months',
    description: 'Learn Basic To Advance 3D/4D Ultrasound',
    mentor:'By - Khushboo Srivastav',
    mode:'Live'
  },
  /*
  {
    id: 2,
    title: 'Fetal Neurosonography Course',
    time:'12 Lectures',
    description: 'Learn Fetal Neurosonography',
    mentor:'By - Dr. Vivek Krishnan',
    mode:'Recorded'
    },
    {
      id: 3,
      title: 'Fetal Therapy Course',
      time:'6 Lectures',
      description: 'Learn Fetal Therapy',
      mentor:'By - Dr. Vivek Krishnan',
      mode:'Recorded'
      },
      {
        id: 4,
        title: 'Obstetrics Ultrasound Color Doppler Course',
        time:'5 Lectures',
        description: 'Learn Obstetrics Ultrasound Color Doppler',
        mentor:'By - Dr. Malathi Prasad',
        mode:'Recorded'
        },
        
  {
    id: 5,
    title: 'Gynecology Ultrasound Course',
    time:'3 Months',
    description: 'Learn Gynecology Ultrasound',
    mentor:'By - Dr. Sathiya Senthil',
    mode:'Recorded'
  },
  {
    id: 6,
    title: 'Fetal Genitourinary Tract Course',
    time:'10 Lectures',
    description: 'Learn Fetal Genitourinary Tract',
    mentor:'By - Dr. Khursheed Alam',
    mode:'Recorded'
  },
  {
    id: 7,
    title: 'Fetal Medicine Course',
    time:'12 Lectures',
    description: 'Learn Fetal Medicine',
    mentor:'By - Dr. Girish Patel',
    mode:'Recorded'
  },
  {
    id: 8,
    title: 'Fetal Medicine Course',
    time:'12 Lectures',
    description: 'Learn Fetal Medicine',
    mentor:'By - Dr. Girish Patel',
    mode:'Recorded'
  },
  */
  
];
function OnlineCourses() {
  const navigation = useNavigate();
  const handleRedirectPage = () =>{
    navigation("/ultraSoundCourse");
  }
  return(

  
  <section className={styles.section}>
  <div className={styles.sectionheading}>
  <hr></hr>
  <p>Online Courses</p>
  </div>


  <div className={styles.grid_container}>
  {courses.map((card) => (
      <div key={card.id} className={styles.grid_item}>
      {
            (card.mode === 'Live') ? (<p className={styles.liveMode}>.{card.mode}</p>)
            :
            (<p className={styles.mode}>.{card.mode}</p>)
          }
              <h3 className={styles.title}>{card.title}</h3>
              <p className={styles.time}>{card.time}</p>
              <p className={styles.mentor}>{card.mentor}</p>
              {
                (card.title === 'Basics of 3D/4D Ultrasound Course' || card.title === 'Fetal Therapy Course')
                ?
                (<p className={styles.cardbtn} onClick={handleRedirectPage}>Know More</p>)
                :
                (<p className={styles.btn} onClick={handleRedirectPage}>Know More</p>)
              }
      </div>
    ))}
    </div>
  </section>
)
}

export default OnlineCourses