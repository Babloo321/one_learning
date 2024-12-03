import React from 'react';
import FaqHeader from '../faqHeader/FaqHeader';
import styles from './styles.module.css';
import Common from '../common/Common.js';
const smartClassData = [
  {
    id: 1,
    url: 'https://onelearninghealthcare.com/wp-content/uploads/2021/09/AdobeStock_372199444-1024x438.jpeg',
    alt: 'learnPic',
    heading: '1. Learn at Your own Pace & Improved Collaboration',
    text: 'Collaboration is one of the key factors necessary for effective learning. Blended learning enables the course participants to work together, engage in discussions. You also get the Tabs loaded with online lectures and evaluation to define your own timings and pace to learn and get them answered in the live classes',
  },
  {
    id: 2,
    url: 'https://onelearninghealthcare.com/wp-content/uploads/2021/09/AdobeStock_270049244-1-1024x438.jpeg',
    alt: 'tansformationPic',
    heading: '2. Transform your Learning to the Next Level',
    text: 'Get exclusive training, learning, and transformation from some of the most renowned speakers , sharing their best practices and ideas. This experience will teach you to do more, accomplish more, and get to your goals faster.',
  },
  {
    id: 3,
    url: 'https://onelearninghealthcare.com/wp-content/uploads/2021/09/AdobeStock_126661770-1024x436.jpeg',
    alt: 'liveWorkshop',
    heading: '3. 2 Days Of Incredible Experience & Live Workshop',
    text: 'Unlike Webinars and Regular Conferences, Smart classes tend to concentrate more on in-classroom teaching and learning techniques using Simulation methods, Gamifications, Roleplays and many more, all in the midst of a paradise location.',
  },
  {
    id: 4,
    url: 'https://onelearninghealthcare.com/wp-content/uploads/2021/09/AdobeStock_322507222-1024x436.jpeg',
    alt: 'discussion',
    heading: '4. Engaging Case Discussions',
    text: 'When you attend Smart Class, you’re not just attending a workshop. You’re networking with people across country and learn different ways of looking at the cases. Everyone is motivated to actively participate, which leads to much better learning outcome.',
  },
  {
    id: 5,
    url: 'https://onelearninghealthcare.com/wp-content/uploads/2021/09/AdobeStock_227643780-1024x436.jpeg',
    alt: 'eficiency',
    heading: '5. Self-Evaluation & ONE|Helpdesk to increase Efficiency',
    text: 'We’re pretty confident you’ll experience a total and utter transformation of your entire life because you self-evaluate your learnings in different interactive ways and with our helpdesk you get the answers to your queries at the Right Time',
  },
];
function AboutProgram() {
  return (
    <>
      <FaqHeader />
      <div className={styles.aboutProgram}>
        <div className={styles.smartClass}>
          <div className={styles.heading}>
            <h1>About Smart Class</h1>
            <p>
              One COE Location, 2 Days of Transformative Learning, Group of
              People from across India, and our renowned Speaker(S) come
              together on a single platform.
            </p>
          </div>
          <div className={styles.videoContainer}>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/8qgJ2JrPg1k?autoplay=1&loop=1&playlist=8qgJ2JrPg1k&mute=1"
              title="YouTube video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className={styles.reasonSection}>
          <h1>Reasons Why You Should Attend The Smart Class</h1>
          <div className={styles.cards}>
            {smartClassData.map((item) => {
              return (
                <div key={item.id} className={styles.card}>
                  <div className={styles.image}>
                    <img src={item.url} alt={item.alt} className={styles.img} />
                  </div>
                  <div className={styles.content}>
                    <h2>{item.heading}</h2>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
        <Common />
    </>
  );
}

export default AboutProgram;
