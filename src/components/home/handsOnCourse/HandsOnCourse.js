import React from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
const courses = [
  {
    id: 1,
    time: '14th - 15th Dec, 2024',
    courseName: 'Obstetrics Ultrasound Color Doppler',
    address: 'Lucknow',
    type:"dropdown",
    heading:"OBSTETRICS ULTRASOUND COLOR DOPPLER",
    price:"₹15,000.00",
    text:"2 Days Hands-on Training",
    dropdown:{
      module:"Hands-On",
      center:{
        first:"_",
        second:"Lucknow(14th-15th Dec)",
      },
    },
    src:"https://onelearninghealthcare.com/wp-content/uploads/2023/01/Obstetrics-Ultrasound-Color-Doppler-3.png",
  },
  {
    id: 2,
    time: '29th Nov - 01st Dec, 2024',
    courseName: 'Breast Ultrasound & Intervention',
    address: 'Faridabad',
    type:"simple",
    heading:"Breast Ultrasound & Intervention",
    price:{
      lightPrice: '₹50,000.00',
      darkPrice: '₹35,000.00',
    },
    text: 'Delhi',
    src: 'https://onelearninghealthcare.com/wp-content/uploads/2024/07/Breast-Ultrasound-Intervention-13.png',
    discount:"30%"
  },
  {
    id: 3,
    time: '01st - 2nd Feb, 2025',
    courseName: 'Fetal Therapy Course',
    address: 'South Africa',
    type:"drowdown",
    heading:"Fetal Therapy Course with Sensitization Workshop",
    price:"₹100,000.00",
    text:"Discount applicable for first 10 candidates.",
    dropdown:{
      module:"Fetal Therapy Hands-on Training Only",
      center:{
        first:"Johannesburg, South Africa",
        second:"Vizag,"
      }
    },
    src:"https://onelearninghealthcare.com/wp-content/uploads/2023/04/FetalTherapy-New-Flyer-4.png"
  },
  {
    id: 4,
    time: '23rd - 24th Nov, 2024',
    courseName: 'Fetal Therapy Course',
    address: 'Vizag',
    type:"dropdown",
    heading:"Fetal Therapy Course with Sensitization Workshop",
    price:"₹100,000.00",
    text:"Discount applicable for first 10 candidates.",
    dropdown:{
      module:"Fetal Therapy Hands-on Training Only",
      center:{
        first:"Johannesburg, South Africa",
        second:"Vizag, Andhra Pradesh"
      }
    },
    src:"https://onelearninghealthcare.com/wp-content/uploads/2023/04/FetalTherapy-New-Flyer-4.png"
  },
 
  {
    id: 5,
    time: '08th - 09th Feb, 2025',
    courseName: 'MSK Ultrasound & Intervention',
    address: 'Faridabad',
    type:"simple",
    heading:"Musculoskeletal Ultrasound & Intervention Techniques",
    price:{
      lightPrice:"₹70,000.00",
      darkPrice:"₹52,500.00",
    },
    src:"https://onelearninghealthcare.com/wp-content/uploads/2024/01/MSK-USG-and-Intervention-5.png",
    discount:"25%",
  },
];
function HandsOnCourse() {
  const navigation = useNavigate();
  function handleRedirectPage(course){
    console.log("course:: ", course);

    navigation('/breastUltrasoundInvention', { state: { details: course } });
  }
  function handleViewAllCourses(){
    navigation('/handsOnAllCourses');
  }
  return (
    <div className={styles.upcomingTraining}>
      <p className={styles.heading}>Hands-On| Courses</p>
      <div className={styles.container}>
        {courses.map((course) => (
          <div key={course.id} className={styles.item}>
          <div className={styles.time}>
            <p>{course.time}</p>
          </div>
          <div className={styles.coursename}>
            <p>{course.courseName}</p>
          </div>
          <div className={styles.address}>
            <p>{course.address}</p>
          </div>
          <div className={styles.registerBtn}>
            <button className={styles.btn} onClick={()=>handleRedirectPage(course)}>Register Now</button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.btnContainer}>
      <button className={styles.btn} onClick={handleViewAllCourses}>VIEW ALL PROGRAMS</button>
      </div>
      <hr className={styles.hr}/>  
    </div>
  );
}

export default HandsOnCourse;

