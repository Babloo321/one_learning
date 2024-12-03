// src/components/About.js
import React from 'react';
import styles from './styles.module.css';

const facalities = [
  { 
    id: 1, 
    src:"https://onelearninghealthcare.com/wp-content/uploads/2021/05/pic-150x150.png",
    name: 'Manu KUMAR', 
    profession: 'Software Enginee' 
  },
  { 
    id: 2, 
    src:"https://onelearninghealthcare.com/wp-content/uploads/2021/05/Bilal-Ahmad-150x150.png",
    name: 'Bilal AHMAD', 
    profession: 'Chief Finance Officer' 
  },
  {
    id: 3,
    src:"https://onelearninghealthcare.com/wp-content/uploads/2021/05/abhay-Srivastava-150x150.png",
    name: 'Abhay SRIVASTAVA',
    profession: 'Chief Administrative Officer',
  },
];
const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.heroSection}>
        <div className={styles.heroChild}>
          <div className={styles.video}>
            <iframe
              src="https://www.youtube.com/embed/TF8Rx-O3ecM?si=ls7kkR5IOAwOLNfF"
              title="OneLearning"
              style={{ border: 'none' }}
              allowFullScreen
              className={styles.videoItSelf}
            ></iframe>
          </div>
          <div className={styles.image}>
            <img
              src="https://onelearninghealthcare.com/wp-content/uploads/2022/01/LOGO-1.png"
              alt="logo"
              className={styles.imageItself}
            />
          </div>
        </div>

        <div className={styles.heroChild}>
          <h1 className={styles.heading}>Changing Healthcare Gears</h1>
          <p className={styles.para}>
            We are a privately owned organization since 2019, headquartered in
            Lucknow (UP) & Srinagar (J&K), India. Our expert possess 10+ years
            of experience driving Learning & Development across various market
            segments.
          </p>
        </div>

        <div className={styles.heroChild}>
          <img
            src="https://onelearninghealthcare.com/wp-content/uploads/2021/05/profile-1-241x300.png"
            alt="bookLogo"
            width="200px"
            height="250px"
          />
        </div>
      </div>

      <div className={styles.about}>
        <div className={styles.aboutChild}>
          <div className={styles.aboutGrandChild}>
            <div className={styles.aboutPara}>
              <h1>Core Value</h1>
            </div>
            <div className={styles.aboutImageCont}>
              <img
                src="https://onelearninghealthcare.com/wp-content/uploads/2021/05/icon1.png"
                alt="passonateImg"
                className={styles.aboutImg}
              />
              <img
                src="https://onelearninghealthcare.com/wp-content/uploads/2021/05/icon2.png"
                alt="sharingImg"
                className={styles.aboutImg}
              />
              <img
                src="https://onelearninghealthcare.com/wp-content/uploads/2021/05/icon3.png"
                alt="innovationImg"
                className={styles.aboutImg}
              />
              <img
                src="https://onelearninghealthcare.com/wp-content/uploads/2021/05/icon4.png"
                alt="speedImg"
                className={styles.aboutImg}
              />
              <img
                src="https://onelearninghealthcare.com/wp-content/uploads/2021/05/icon5.png"
                alt="integration"
                className={styles.aboutImg}
              />
            </div>
          </div>

          <div className={styles.aboutGrandChild}>
            <div className={styles.aboutPara}>
              <h1>ONE|STORY</h1>
            </div>
            <article className={styles.article}>
              <p>
                The over-riding objective is to empower and develop the people
                to provide the highest standards of excellence in the provision
                of overall people development. The importance of life-long
                learning in an increasingly changing environment cannot be
                overstated. As the rate of change increases, the willingness and
                ability to keep developing and learning new skills becomes
                central to career survival for individuals and to economic
                success as well survival for the organizations. This strategy
                supports kicking off and securing the future, both for
                individuals and organizations.
              </p>
              <br></br>
              <p>
                As a knowledge based organization there are a number of
                extensive continuous professional development programs planned
                in which many of our staff members participate. Nevertheless,
                baseline research for this strategy revealed also that there are
                many staff placed in various organizations, who experience very
                little learning and development opportunities in the course of
                their long serving careers in organizations.
              </p>
            </article>
          </div>
        </div>

        <div className={styles.aboutChild}>
          <div className={styles.aboutGrandChild}>
            <div className={styles.aboutPara}>
              <h1>ONE|Mission</h1>
            </div>
            <article className={styles.article}>
              <p>
                Our Mission is to Transform Indian Health Education system that
                enables early Diagnosis & better patient outcome that inturn
                will Improve the Socio-Economic Health of the country
              </p>
              <br></br>
              <p>
                Our Strategy is to Integrate Healthcare & AI and create a COE
                which will be a True mixture of Technology & Education at single
                place that is Measurable, Efficient, Cost Effective & has an
                High Impact
              </p>
              <br></br>
              <p>
                We are committed to raise our level of quality to meet your
                expectations. You can expect the best of us and we do what is
                necessary to make this a reality. We help our trainings to
                realize their potential and being their trusted advisors we
                provide them right guidance and help them create a career
                roadmap in line with their personal aspirations and goals. We
                make our learning courses with the pride and care that comes
                from a history of putting our trainings needs first and the
                meticulous and watchful eye of our product development
                consultants.{' '}
              </p>
            </article>
          </div>
          <div className={styles.aboutGrandChild}>
            <div className={styles.aboutPara}>
              <h1>ONE|Vision</h1>
            </div>
            <article className={styles.article}>
              <p>
                Our Vision is to Build, Sustain and Energize a strong Learning
                ecosystems and blend it with Technology based approaches such as
                Simulation Technologies, Artificial Intelligence, Augmented &
                Virtual Reality Concepts etc.
              </p>
              <br></br>
              <p>
                We are a startup learning and Development Organization. We
                achieve closeness and trust with best quality and learning
                delivery experience.
              </p>
            </article>
          </div>
        </div>
      </div>

      <div className={styles.director}>
        <img
          src="https://onelearninghealthcare.com/wp-content/uploads/2021/05/IMG-20200512-WA0023-1-150x150.png"
          alt="human"
          className={styles.directorImg}
        />
        <p>Khushboo SRIVASTAVA</p>
        <p>Chief Managing Director</p>
      </div>


      <div className={styles.facCont}>
        {
          facalities.map(fac => {
            return(
              <div key={fac.id} className={styles.facality}>
                  <img src={fac.src} alt={fac.name}/>
                  <p>{fac.name}</p>
                  <p>{fac.profession}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  );
};

export default About;
