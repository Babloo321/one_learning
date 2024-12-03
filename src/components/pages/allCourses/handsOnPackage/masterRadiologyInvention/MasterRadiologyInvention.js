import React,{ useState } from 'react'
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
function MasterRadiologyInvention() {
  // State to store the selected image URL
  const url = 'https://onelearninghealthcare.com/wp-content/uploads/2024/09/corner-ribbon-red-banner-with-word-new-realistic-vector-32662175-removebg-preview-300x300.png'
  const [selectedImage, setSelectedImage] = useState(url);

  // List of images
  const images = [
    'https://onelearninghealthcare.com/wp-content/uploads/2024/09/corner-ribbon-red-banner-with-word-new-realistic-vector-32662175-removebg-preview-300x300.png',
    'https://onelearninghealthcare.com/wp-content/uploads/2024/11/USG-Guided-Nerve-Blocks-4-700x700.png',
    'https://onelearninghealthcare.com/wp-content/uploads/2024/01/MSK-USG-and-Intervention-5-700x700.png',
    'https://onelearninghealthcare.com/wp-content/uploads/2024/01/Fetal-Ultrasound-Intervention-17-700x700.png',
    'https://onelearninghealthcare.com/wp-content/uploads/2023/09/USGGuidedHands-on-5-1-700x700.png',
    'https://onelearninghealthcare.com/wp-content/uploads/2024/11/Vascular-Ultrasound-and-Intervention-4-700x700.png'
  ];

  // Handler for image click
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  return (
    <div className={styles.container}>


      <div className={styles.coursepurchesescontainer}>

        <div className={styles.hodingimage}>
          <span className={styles.discountimage}>↓ 12%</span>
          {/* <img src='https://onelearninghealthcare.com/wp-content/uploads/2024/09/corner-ribbon-red-banner-with-word-new-realistic-vector-32662175-removebg-preview.png' alt='hodingimage' className={styles.image}/> */}
          {selectedImage ? (
          <img
            src={selectedImage}
            alt="Selected"
            className={styles.image}
          />
        ) : (
          <span>Select an image to preview</span>
        )}
        </div>

        <div className={styles.coursepurcheses}>
          <ul className={styles.linkul}>
            <li><Link to="/" className={styles.link}>Home/</Link></li>
            <li><Link to={"/home"} className={styles.link}>Uncategorized/</Link> </li>
            <li>Master Radiology Intervention Course Package</li>
          </ul>
          <Link to={"/home"} className={styles.uncategorized}>Uncategorized</Link>
           <h1 className={styles.heading}>Master Radiology Intervention Course Package</h1>
           <p className={styles.price}><span className={styles.lighttext}>₹250,000.00</span><span className={styles.boldtext}><strong>₹220,000.00</strong></span></p>
           <ul className={styles.listul}>
            <li>USG Guided Biopsy Procedure Hands-on</li>
            <li>USG Guided Nerve block Technique Hands-on</li>
            <li>MSK USG & Intervention</li>
            <li>Vascular USG and intervention</li>
            <li>Fetal Ultrasound Intervention</li>
           </ul>
           <div className={styles.buttonsection}>
           <button className={styles.applybtn}>Apply Now</button>
           </div>
        </div>

      </div>

    <div className={styles.imagescontainer}>
    {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleImageClick(image)}
            className={styles.image}
            style={{
              border: selectedImage === image ? '3px solid blue' : 'none',
            }}
          />
        ))}
    </div>
    </div>
  )
}

export default MasterRadiologyInvention