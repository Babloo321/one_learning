import React from 'react';
import image from './image/one-learning-logo.jpeg'
import styles from './styles.module.css';
function ImageSection() {
  const divStyle = {
    width: '100%',
    height: '400px',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: '2px solid #ccc',
    borderRadius: '10px',
  };

  return <div style={divStyle} className={styles.imageContainer}></div>;  // Corrected this line
}

export default ImageSection;
