import React from 'react';
import styles from './styles.module.css';
const pressReleaseData = [
  {
    id: 1,
    url: 'https://onelearninghealthcare.com/wp-content/uploads/2022/01/thumb-1024x574.png',
    alt: 'yt',
    button: 'Know More',
    videoLink: 'https://youtu.be/C5k-rkfOA6w?si=AYDakpPicZHK7nKl',
  },
  {
    id: 2,
    url: 'https://onelearninghealthcare.com/wp-content/uploads/2022/01/cards2-1.png',
    alt: 'press',
    button: 'Know More',
    pressLink: 'https://x.com/stpiindia/status/1472075297533030400',
  },
  {
    id: 3,
    url: 'https://onelearninghealthcare.com/wp-content/uploads/2022/01/thumtext.png',
    alt: 'twitter',
    button: 'Follow us on twitter',
    twitterLink:
      'https://x.com/i/flow/login?redirect_after_login=%2FOEdusphere',
  },
];
function PressRelease() {
  return (
    <div className={styles.container}>


      <div className={styles.heading}>
        <h1>Press Release</h1>
      </div>

      <div className={styles.middle}>
        <div className={styles.content}>
          <p>
            Hear our Delegates talking about their experience on our First ever
            SMARTCLASS that includes the Simulation Techniques, Masterclass,
            workshop on Technology Tips & Tricks. Learn about Adult
            Echocardiography; Gynae and IVF learning methodologies.
          </p>
        </div>
        <div className={styles.video}>
        <iframe
        className={styles.videoLink}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/6Z60ZepShPc"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
        </div>
      </div>

      <div className={styles.mainContainer}>
        {pressReleaseData.map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.url} alt={item.alt} className={styles.image} />
            {/* Render the button as an anchor tag if the respective link is available */}
            {item.videoLink && (
              <a
                href={item.videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                {item.button}
              </a>
            )}
            {item.pressLink && (
              <a
                href={item.pressLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                {item.button}
              </a>
            )}
            {item.twitterLink && (
              <a
                href={item.twitterLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                {item.button}
              </a>
            )}
          </div>
        ))}
      </div>


    </div>
  );
}

export default PressRelease;
