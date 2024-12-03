// AcademyCard.js
import React from "react";
import styles from "./styles.module.css";

const academy = [
  {
    url: "https://onelearninghealthcare.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-10-20-at-11.30.52-PM-3-py7ruihd2b8wnaaxrr1sp7qieb6pbt8no2iu51oh08.jpeg",
    alt: "place",
    address: "Vizag"
  },
  {
    url: "https://onelearninghealthcare.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-10-21-at-12.38.24-AM-e1666297077989-py7ruihd2b8wnaaxrr1sp7qieb6pbt8no2iu51oh08.jpeg",
    alt: "place",
    address: "Erode"
  },
  {
    url: "https://onelearninghealthcare.com/wp-content/uploads/2024/01/WhatsApp-Image-2023-10-21-at-12.46.16-PM-e1705513037404.jpeg",
    alt: "place",
    address: "Tumkur"
  }
];

const OneAcademy = () => {
  return (
    <>
      <h1>ONE|ACADEMY</h1>
    <div className={styles.cardContainer}>
      {academy.map((location, index) => (
        <div key={index} className={styles.card}>
          <img src={location.url} alt={location.alt} className={styles.image} />
          <h3 className={styles.address}>{location.address}</h3>
        </div>
      ))}
    </div>
    </>
  );
};

export default OneAcademy;
