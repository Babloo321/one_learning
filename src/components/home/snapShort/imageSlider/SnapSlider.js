import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';
import images from '../../../../image/images';

const SnapSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // Track hover state
  const containerRef = useRef(null);

  useEffect(() => {
    if (isPaused) return; // Skip interval when paused

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    if (currentIndex >= images.length) {
      setTimeout(() => {
        containerRef.current.style.transition = 'none';
        setCurrentIndex(0);
      }, 500);
    } else {
      containerRef.current.style.transition = 'transform 0.5s ease-in-out';
    }
  }, [currentIndex, images.length]);

  return (
    <div
      className={styles.sliderContainer}
      onMouseEnter={() => setIsPaused(true)} // Pause on hover
      onMouseLeave={() => setIsPaused(false)} // Resume on leave
    >
      <div
        ref={containerRef}
        className={styles.imageContainer}
        style={{ transform: `translateX(-${(currentIndex % images.length) * 300}px)` }}
      >
        {[...images, ...images].map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={styles.image}
          />
        ))}
      </div>
    </div>
  );
};

export default SnapSlider;
