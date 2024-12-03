import React from 'react'
import FaqHeader from '../faqHeader/FaqHeader'
import styles from './styles.module.css';
import Common from '../common/Common';
const eventsData = [
  {id:1, url:"https://onelearninghealthcare.com/wp-content/uploads/2021/12/unnamed.jpg",alt:"lucknow",heading:"Smart Class – Lucknow 2022 | Ultrasound in Obstetric Emergency",text:"Onelearning in collaboration with Department of Maternal and Reproductive Health SGPGI and STPI invites you on “Ultrasound in Obstetric Emergency” hands-on training program.",button:"Join Smart Class"},
  {id:2, url:"https://onelearninghealthcare.com/wp-content/uploads/2021/10/facade-1024x640.png",alt:"kashmir",heading:"Smart Class – Kashmir 2022 | Infertility & IUI",text:"Onelearning invites you on “ Infertility & IUI” hands-on training program.", button:"Join Smart Class"}
]
function Event() {
  return (
    <>
    <FaqHeader />
    <div className={styles.events}>
      <h1>Next Event</h1>
      <div className={styles.container}>
      {eventsData.map((event, index) => (
        <div
          key={event.id}
          className={`${styles.card} ${index % 2 === 0 ? styles.left : styles.right}`}
        >
          <img src={event.url} alt={event.alt} className={styles.image} />
          <div className={styles.content}>
            <h3>{event.heading}</h3>
            <p>{event.text}</p>
            <button className={styles.button}>{event.button}</button>
          </div>
        </div>
      ))}
    </div>

        </div>
    <Common />
    </>
  )
}

export default Event