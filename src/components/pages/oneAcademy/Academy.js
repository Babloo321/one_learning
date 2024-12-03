import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import product_pic from '../../../image/product_pic.jpg';
import product_pic1 from '../../../image/product_pic1.jpg';
import product_pic2 from '../../../image/product_pic2.jpg';

const images = [
  { src: product_pic, alt: 'product' },
  { src: product_pic1, alt: 'product_1' },
  { src: product_pic2, alt: 'product_2' },
];
const locations = [
  {id:1,link:'/courseForm', address:"Lucknow"},
  {id:2,link:'/courseForm', address:"Erode"},
  {id:3,link:'/courseForm', address:"Ahmedabad"},
  {id:4,link:'/courseForm', address:"Srinagar"},
  {id:5,link:'/courseForm', address:"Vizag"},
  {id:6,link:'/courseForm', address:"Kolkata"},
  {id:7,link:'/courseForm', address:"Patna"},
  {id:8,link:'/courseForm', address:"Tumkur"},
  
]
function Academy() {
  const [currentIndex, setCurrentIndex] = useState(0);
const navigation = useNavigate();
  const handleClick = () =>{
    navigation("/courseForm");
  }
  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(slideInterval); // Clean up on component unmount
  }, [images.length, 1500]);


  return (
    <div className={styles.academy_container}>

      <div className={styles.address_link}>
      <ul>
        {locations.map((location) => (
          <li key={location.id}>
          <Link to={location.link} className={styles.link}>
              {location.address}
            </Link>
          </li>
        ))}
      </ul>
      </div>
        
      <div className={styles.one_image}>
        <div className={styles.slider}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.slide} ${
                index === currentIndex ? styles.active : ''
              }`}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              <img src={image.src} alt={image.alt} className={styles.image} />
            </div>
          ))}
        </div>

        <div className={styles.oneLearningConta}>
          <img
            src="https://onelearninghealthcare.com/wp-content/uploads/2022/06/updatedlogo-removebg-preview-300x164.png"
            alt="oneLearning"
            className={styles.oneLearningImage}
          />
          <p className={styles.oneP}>Learn from the Biggest Mentors Online & Offline</p>
          <button className={styles.oneBtn} onClick={handleClick}>Book Free Counselling Session Now</button>
        </div>
      </div>

      <div className={styles.text}>
        <p className={styles.text_heading}>
          Embrace your Knowledge with Blended Learning
        </p>
        <hr />
        <p className={styles.text_content}>
          ONELearning | Academy is an interconnection of various Skill
          Development Centres across the globe to transform learning
        </p>
      </div>

      <div className={styles.location}>
        <img
          src="https://onelearninghealthcare.com/wp-content/uploads/2022/06/MapCenters.jpg"
          alt="map"
          className={styles.india}
        />
        <img
          src="https://onelearninghealthcare.com/wp-content/uploads/2022/06/worldmapcenters.jpg"
          alt="worldMap"
          className={styles.world}
        />
      </div>

      <div className={styles.exclusive_container}>
        <p className={styles.ex_text}>An Exclusive Solution For...</p>
        <div className={styles.exclusive}>
          <div className={styles.ex_collabrative}>
            <p>Collabrative Learning</p>
            <ul>
              <li>Face to face interaction with local mentor</li>
              <li>
                Group activities & knowledge sharing to expand the thought
                process
              </li>
              <li>ONE plateform for Techonology & Clinical training</li>
            </ul>
          </div>
          <div className={styles.ex_constructive}>
            <p>Constructive Learning</p>
            <ul>
              <li>Knowledge sharing in local language via regional faculty</li>
              <li>
                Build presentation & public speaking skills for the next
                generation speaker
              </li>
              <li>Dual mentor concept with a blend of Theory and particle</li>
            </ul>
          </div>
          <div className={styles.ex_computer}>
            <p>Computer Assisted</p>
            <ul>
              <li>Recorded lectures to enables learn at your own place</li>
              <li>24*7 helpdesk to address your concerns</li>
              <li>
                Lifetime membership to our ONE Community for knowledge sharing
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.advantage}>
      
        <div className={styles.adv_text}>
          <h1>ONELearning Centre Advantage</h1>
          <p>
            Why is this the best learning programme to improve your academic
            performance?
          </p>
        </div>

        <div className={styles.adv_cont}>
          <div className={styles.box}>
            <p className={styles.box_heading}>Feature</p>
            <p className={styles.box_text}>No one mentor</p>
            <hr />
            <p className={styles.box_text}>Methodology</p>
            <hr />
            <p className={styles.box_text}>Platform</p>
            <hr />
            <p className={styles.box_text}>Problem Solving</p>
            <hr />
            <p className={styles.box_text}>Evaluation</p>
            <hr />
          </div>

          <div className={styles.box}>
            <p className={styles.box_heading}>Regular Classes</p>
            <p className={styles.box_text}>
              Single Mentor concept or Mix of too many speakers
            </p>
            <hr />
            <p className={styles.box_text}>Recorded Lectures/ Conferences</p>
            <hr />
            <p className={styles.box_text}>Only Clinical</p>
            <hr />
            <p className={styles.box_text}> Limited Support</p>
            <hr />
            <p className={styles.box_text}> Case presentations only</p>
            <hr />
          </div>

          <div className={styles.box}>
            <p className={styles.box_heading}>ONELearning Academy</p>
            <p className={styles.box_text}>
              Master & Regional Faculty concept – One for concept and one to
              assist with personalized attention
            </p>
            <hr />
            <p className={styles.box_text}>
              {' '}
              Structured Live & Recorded Sessions with Tech enabled classrooms
            </p>
            <hr />
            <p className={styles.box_text}>
              Clinical & Technology Sessions at ONE Place
            </p>
            <hr />
            <p className={styles.box_text}>
              24*7 ONE Helpdesk to address all your queries
            </p>
            <hr />
            <p className={styles.box_text}>
              {' '}
              Role Plays case discussions blended with interactive MCQ &
              Simulation based questionnaires
            </p>
            <hr />
          </div>
        </div>

      </div>

      <div className={styles.journey}>
        <p className={styles.journey_heading}>
          A Doctor's Learning Journey at ONELearning Academy
        </p>
        <img
          src="https://onelearninghealthcare.com/wp-content/uploads/2022/06/journetatacademy-1024x649.png"
          alt="logo"
          className={styles.journeyImage}
        />
      </div>

    </div>
  );
}

export default Academy;
