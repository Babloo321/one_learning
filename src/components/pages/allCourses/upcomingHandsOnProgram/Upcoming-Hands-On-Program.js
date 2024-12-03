import React from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
// import BreastUltrasoundIntervention from './breastUltrasound Intervention/BreastUltrasoundIntervention';
const courses = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
  {
    id: 4,
    time: '23rd-25th May, 2025',
    courseName: 'USG Guided Nerve Block Technique',
    address: 'Faridabad',
    type:"simple",
    heading:"Ultrasound Guided Nerve Blocks in Emergency Medicine",
    price:{
      lightPrice:"₹70,000.00",
      darkPrice:"₹52,500.00"
    },
    src:"https://onelearninghealthcare.com/wp-content/uploads/2024/11/USG-Guided-Nerve-Blocks-4.png",
    discount:"25%"
  },
  {
    id: 5,
    time: '11th-12th Jan, 2025',
    courseName: 'Fetal Ultrasound Intervention',
    address: 'Faridabad',
    type:"dropdown",
    heading:"Fetal Ultrasound Intervention Techniques Two Days Hands-on Workshop",
    price:"₹35,000.00",
    dropdown:{
      module:'11th-12th Jan, 2025',
      center:{
first:"",
        second:"Faridabad(11th-12th Jan, 2025)"
      },
    },
    src:"https://onelearninghealthcare.com/wp-content/uploads/2024/01/Fetal-Ultrasound-Intervention-17.png"
  },
  {
    id: 6,
    time: '07th-09th March, 2025',
    courseName: 'Vascular USG & Intervention',
    address: 'Faridabad',
    type:"simple",
    heading:"Vascular Ultrasound and Intervention Hands on Course",
    price:{
      lightPrice:"₹70,000.00",
      darkPrice:"₹52,500.00"
    },
    src:"https://onelearninghealthcare.com/wp-content/uploads/2024/11/Vascular-Ultrasound-and-Intervention-4.png",
    discount:"25%"
  },
  {
    id: 7,
    time: '18th-19th Jan, 2025',
    courseName: 'USG Guided Biopsy',
    address: 'Faridabad',
    type:"simple",
    heading:"ULTRASOUND GUIDED BIOPSY",
    price:{
      lightPrice:"0",
      darkPrice: "₹50,000.00",
    },
    text:"Two Days Hands-on Training",
    src:"https://onelearninghealthcare.com/wp-content/uploads/2023/09/USGGuidedHands-on-5.png",
    discount:"0%",
  },
  {
    id: 8,
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
    id: 9,
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
];
function UpcomingHandsOnProgram() {
  const navigation = useNavigate();
  function handleRedirectPage(course){
    console.log("course:: ", course);

    navigation('/breastUltrasoundInvention', { state: { details: course } });
  }

  return (
    <section className={styles.section}>
      <div className={styles.sectionheading}>
        <hr></hr>
        <p>Upcoming Ultrasound Training Program</p>
      </div>

      <div className={styles.grid_container}>
        {courses.map((course) => (
          <div key={course.id} className={styles.grid_item}>
            <h4>{course.time}</h4>
            <h3>{course.courseName}</h3>
            <p>{course.address}</p>
            <button
              className={styles.registerBtn}
              onClick={() => handleRedirectPage(course)}
            >
              Register Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UpcomingHandsOnProgram;
