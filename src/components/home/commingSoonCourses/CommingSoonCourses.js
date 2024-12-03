// CourseCard.js
import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from 'react-router-dom';
const logo = "https://onelearninghealthcare.com/wp-content/uploads/2024/09/corner-ribbon-red-banner-with-word-new-realistic-vector-32662175-removebg-preview.png"

const cardData = [
  { logo: logo, alt: "logo", course: "IUI & IVF Hands on workshop", mode: "Hands-On",price:"₹50,000.00" },
  { logo: logo, alt: "logo", course: "Skin Ultrasound Intervention", mode: "Blended",price:"₹50,000.00" },
  { logo: logo, alt: "logo", course: "Gyn Intervention Procedure", mode: "Blended",price:"₹50,000.00" },
  { logo: logo, alt: "logo", course: "Vascular Ultrasound and Intervention", mode: "Blended",price:"₹35,000.00" },
  { logo: logo, alt: "logo", course: "Nerve Block intervention workshop", mode: "Blended",price:"₹35,000.00" },
  { logo: logo, alt: "logo", course: "IVF Hands on workshop", mode: "Hands-On",price:"₹50,000.00" },
  { logo: logo, alt: "logo", course: "VP Shunt workshop", mode: "Blended",price:"not available" },
  { logo: logo, alt: "logo", course: "Brain simulation workshop", mode: "Blended",price:"not available" },
  { logo: logo, alt: "logo", course: "Suturing course", mode: "Blended",price:"not available" },
  { logo: logo, alt: "logo", course: "Plastic surgery", mode: "Blended",price:"not available" },
];

const ComingSoon = () => {
  const navigation = useNavigate();
  const handleRegisterNow = (card) => {
    navigation("/comingSoonRegisterNow", { state: { card } });
  }
  return (
    <>
    <h1>ComingSoon Courses</h1>
    <div className={styles.cardContainer}>
      {cardData.map((card, index) => (
        <div key={index} className={styles.card}>
          <img src={card.logo} alt={card.alt} className={styles.logo} />
          <div className={styles.content}>
          <h3 className={styles.course}>{card.course}</h3>
          <p className={styles.mode}>{card.mode}</p>
          <button className={styles.registerButton} onClick={()=> handleRegisterNow(card)}>Register Now</button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default ComingSoon;
