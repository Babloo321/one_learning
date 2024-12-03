import styles from './styles.module.css';
import React, { useState, useEffect } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500);

    return () => clearInterval(slideInterval); // Clean up on component unmount
  }, [images.length, 1500]);

  // const goToSlide = (index) => {
  //   setCurrentIndex(index);
  // };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === currentIndex ? styles.active : ""
            }`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            <img src={image.src} alt={image.alt} className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
