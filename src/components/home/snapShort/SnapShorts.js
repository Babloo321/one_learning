import styles from './styles.module.css';
import SnapSlider from '../../home/snapShort/imageSlider/SnapSlider'
const SnapShorts = () => {
  return (
    <div className={styles.container}>

      <div className={styles.heading}>
        <h1>Snapshots of Success: Recent Training in Action</h1>
      </div>

      <div className={styles.snapShortsContainer}>
      
      <div className={styles.sliderCont}>
        <SnapSlider />
        <SnapSlider />
        </div>

        <div className={styles.videoContainer}>
        <video controls className={styles.vid}>
        <source src="https://onelearninghealthcare.com/wp-content/uploads/2024/11/WhatsApp-Video-2024-11-09-at-1.45.41-PM.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video controls className={styles.vid}>
        <source src="https://onelearninghealthcare.com/wp-content/uploads/2024/11/WhatsApp-Video-2024-11-09-at-1.45.41-PM.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>

      </div>
      
    </div>
  );
};
export default SnapShorts;
