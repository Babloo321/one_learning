import { useState, useEffect } from 'react';
import styles from './home.module.css';
import WhyChooseUs from './whyChooseUs/WhyChooseUs';
import HandsOnCourse from './handsOnCourse/HandsOnCourse';
import OneAcademy from './oneAcademy/OneAcademy';
import ComingSoon from './commingSoonCourses/CommingSoonCourses';
import SnapShorts from './snapShort/SnapShorts';
import ImageSection from './oneLearningImage/ImageSection';
import Radiology from './radiology/Radiology';
import GetIntouch from './getInTouch/GetIntouch';
import ImageSlider from './imageSlider/ImageSlider';
import images from '../../image/images';
import BecomeMember from './becomeMemberPopUp/BecomeMember';
import { useNavigate } from 'react-router-dom';
const imageUrl =
  'https://onelearninghealthcare.com/wp-content/uploads/2022/06/testimonialblack-1024x444.png';
const Home = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const handleLogin = () => {
    navigate('/login');
  };

  useEffect(() => {
    const isPopupShown = localStorage.getItem('isPopupShown');
    if (!isPopupShown) {
      setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem('isPopupShown', 'true');
      }, 5000);
    }
  }, []);

  return (
    <div className={styles.videoContainer}>
      {/* this is section fro the home front-page */}
      <div className={styles.videoSection}>
        <div className={styles.videoContentSection}>
          <div className={styles.imagesSlider}>
            <ImageSlider images={images} className={styles.slider} />
            <div className={styles.buttonSection}>
              <button className={styles.member} onClick={togglePopup}>
                Become a Member
              </button>
              {showPopup && <BecomeMember onClose={togglePopup} />}
              <button className={styles.member} onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>

          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/WsOyqIpNctA?autoplay=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture subtitle"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <HandsOnCourse />
      <Radiology />
      <SnapShorts />
      <ImageSection />
      <ComingSoon />
      <OneAcademy />
      <WhyChooseUs />
      <h1 className={styles.oneCtag}>One|Commendation</h1>
      <img
        src={imageUrl}
        alt="one_commendation"
        className={styles.one_comendation}
      />
      <GetIntouch />
    </div>
  );
};

export default Home;
