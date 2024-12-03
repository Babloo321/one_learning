import React from 'react';
import styles from './styles.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';

const partnerData = [
  {
    id: 1,
    imageUrl: 'https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/r9E0QYuleiv25jmq9/videoblocks-the-two-business-people-handshake-on-the-sunny-background-slow-motion_rbciusjez_thumbnail-1080_01.png',
    heading: 'Become A Sales Partner',
    text: 'Relations that are built together, last forever!  At ONELearning, we partner with like-minded people for a mutually beneficial relationship. We empower our sales partners with all the resources that they require to market our products, capitalize on upcoming opportunities, maximize sales and enhance profitability. You can partner with us.',
  },
  {
    id: 2,
    imageUrl: 'https://thumbs.dreamstime.com/z/young-female-doctor-white-dress-19541983.jpg',
    heading: 'Become A Faculty',
    text: `All progress starts with a conversation. We believe that answering the challenges you face as an Faculty should also start with a conversation. 
    Learn how we can partner to drive the learning strategy.Our innovative solutions, services, and delivery models focus on efficacy, measurably improving learning outcomes. Whether you’re redesigning a course or suite of courses or focusing on online education and blended learning or integrating our services directly into your learning management system`,
  },
  {
    id: 3,
    imageUrl: 'https://webstockreview.net/images/training-clipart-career-training-1.jpg',
    heading: 'Become A Skill Development Center',
    text: `All progress starts with a conversation. We believe that answering the challenges you face as an Faculty should also start with a conversation. Learn how we can partner to drive the learning strategy.
Our innovative solutions, services, and delivery models focus on efficacy, measurably improving learning outcomes. Whether you’re redesigning a course or suite of courses or focusing on online education and blended learning or integrating our services directly into your learning management system.`,
  },
];
const divData = [
  {
    id:1,
    title:'Platform Help',
    description:'Get step-by-step instructions for everything from setting up your course structure to using our advanced technical tools.',
  },
  {
    id:2,
    title:'Content Guidelines',
    description:'Get familiar with our pedagogy principles and content requirements for courses and Specializations.',
  },
  {
    id:3,
    title:'Best Practices',
    description:'See top tips for creating great online course content and marketing it to learners around the world.'
  },
  {
    id:4,
    title:'Announcements And Webinars',
    description:'Learn about product updates when they happen, and register for our monthly Educator Community Webinars.',
  },
]
const placeholderImage1 = 'https://via.placeholder.com/150';
const placeholderImage2 = 'https://via.placeholder.com/150/0000FF';


function PartnerWithUs() {
  const navigation = useNavigate();
const handleApplyButton = (partner) =>{
  navigation('/becomeMember', { state: { details: partner }});
}
  return (
    <div className={styles.parnetContainer}>
    <h1 className={styles.heading}>" You Can Not Shake Hands With A Clenched Fist "</h1>
    
    <div className={styles.partnerSection}>
      {partnerData.map((partner, index) => (
        <div
          key={partner.id}
          className={`${styles.partnerCard} ${
            index % 2 !== 0 ? styles.partnerCardReverse : ''
          }`}
        >
          <img
            src={
              partner.imageUrl ||
              (index % 2 === 0 ? placeholderImage1 : placeholderImage2)
            }
            alt={partner.heading}
            className={styles.partnerImage}
          />
          <div className={styles.partnerContent}>
            <h2 className={styles.partnerHeading}>{partner.heading}</h2>
            <p className={styles.partnerText}>{partner.text}</p>
            <button className={styles.applyBtn} onClick={() =>handleApplyButton(partner)}>Apply Now</button>
          </div>
        </div>
      ))}
    </div>

      <div className={styles.whatsNew}>
    <h1>Get help, explore best practices, and see what's new!</h1>
    <p>All of the information and resources you need to design, build and launch high quality content on ONELearning</p>
    </div>
      {/* help section */}
    <div className={styles.helpContainer}>
      {divData.map((item) => (
        <div key={item.id} className={styles.helpCard}>
        <h1><i className="fas fa-chalkboard-teacher"></i></h1>
          <h3 className={styles.helpTitle}>{item.title}</h3>
          <p className={styles.helpDescription}>{item.description}</p>
        </div>
      ))}
    </div>

    </div>
  );
}

export default PartnerWithUs;
