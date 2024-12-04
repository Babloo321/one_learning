import React, { useState } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
function MyAccount() {
  const [selectedVideo, setSelectedVideo] = useState("https://www.youtube.com/embed/dQw4w9WgXcQ");
  const videos = [
    {
      id: 1,
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      title: 'Video 1',
    },
    {
      id: 2,
      url: 'https://www.youtube.com/embed/C0DPdy98e4c',
      title: 'Video 2',
    },
    {
      id: 3,
      url: 'https://www.youtube.com/embed/9bZkp7q19f0',
      title: 'Video 3',
    },
    {
      id: 4,
      url: 'https://www.youtube.com/embed/9bZkp7q19f0',
      title: 'Video 4',
    },
    {
      id: 5,
      url: 'https://www.youtube.com/embed/9bZkp7q19f0',
      title: 'Video 5',
    },
    {
      id: 6,
      url: 'https://www.youtube.com/embed/9bZkp7q19f0',
      title: 'Video 6',
    },
    {
      id: 7,
      url: 'https://www.youtube.com/embed/9bZkp7q19f0',
      title: 'Video 7',
    },
    {
      id: 8,
      url: 'https://www.youtube.com/embed/9bZkp7q19f0',
      title: 'Video 8',
    },
    {
      id: 9,
      url: 'https://www.youtube.com/embed/9bZkp7q19f0',
      title: 'Video 9',    
    },
    {
      id: 10,
      url: 'https://www.youtube.com/embed/9bZkp7q19f0',
      title: 'Video 10',    
    },
    {
      id: 11,
      url: 'https://www.youtube.com/embed/9bZkp7q19f0',
      title: 'Video 11',    
    },
  ];
  return (
    <div className={styles.myAccount}>
      <div className={styles.heading}>
        <h1>Welcome, Babloo Kumar</h1>
        <p>
          Currently, there is no subscription available in your account. Please
          Subscribe.
        </p>
      </div>

      <div className={styles.freeLecture}>
          <h1>Free Lecture</h1>
        <div className={styles.container}>
          <div className={styles.sidebar}>
            <ul>
              {videos.map((video) => (
                <li key={video.id} onClick={() => setSelectedVideo(video.url)}>
                  {video.title}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.content}>
            {' '}
            {selectedVideo ? (
              <iframe
              className={styles.video}
                src={selectedVideo}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <p>Please select a video from the sidebar</p>
            )}{' '}
          </div>{' '}
        </div>
      </div>



      <div className={styles.learningShow}>
        <h1>ONE|Minute Learning Show</h1>
        <div className={styles.container}>
          <div className={styles.sidebar}>
            <ul>
              {videos.map((video) => (
                <li key={video.id} onClick={() => setSelectedVideo(video.url)}>
                  {video.title}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.content}>
            {' '}
            {selectedVideo ? (
              <iframe
              className={styles.video}
                src={selectedVideo}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <p>Please select a video from the sidebar</p>
            )}{' '}
          </div>{' '}
        </div>
      </div>

      <div className={styles.community}>
        <Link to="/community">
          <img
            src="https://onelearninghealthcare.com/wp-content/uploads/2022/08/banner.jpg"
            alt="communityImage"
            className={styles.image}
          />
        </Link>
      </div>
    </div>
  );
}

export default MyAccount;
