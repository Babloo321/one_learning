import React,{ useState } from 'react'
import styles from './styles.module.css';

const faqData = [
  {
    question: "How do I block my seat for Smart Class?",
    answer: "Depending upon your Learning choice, we have 3 membership plans. Click on the link to select the Plan",
  },
  {
    question: "How much does it cost for the SMART class workshop?",
    answer: (
      <ul>
        <li>Silver Membership</li>
        <li>Gold Membership</li>
        <li>Platinum Membership</li>
      </ul>
    ),
  },
  {
    question: "What’s included in the cost of your Memberships?",
    answer: (
      <ul>
        <li>3 Days Hands-on workshop</li>
        <li>Training on Gynae Simulator</li>
        <li>Smart TAB loaded with quiz and study material (* only for Gold & Platinum members)</li>
        <li>Stay in Pahalgham with all meals (2 nights + 3 days) on Twin Sharing Basis</li>
        <li>Sightseeing and local tour</li>
        <li>To & From Srinagar Airport to Pahalgham</li>
      </ul>
    ),
  },
  {
    question: "What is NOT included in the cost of the Memberships",
    answer: (
      <ul>
        <li>Air fares</li>
        <li>Any personal expenses or In Room Dining Services</li>
        <li>Local Transport other than the Group activity</li>
        <li>Tab will be allocated to people opting for online course and 1 person only</li>
        </ul>
    ),
  },
  {
    question:"Can I bring my spouse or family member to the event",
    answer:"Attendees are welcome to invite their immediate* family members to the event, however there will 25K Per day/person extra. Children under 10 years will not be charged anything however above 10 Years will be considered as an Adult."
  },
  {
    question:"Can I bring my children? How much will cost for kids?",
    answer:"We welcome children of all ages, however the program is geared towards education hence we won’t have any activities planned for children or family members separately. Kids below 10 years are free while above 10 Years will be considered as an adult and will be charged 25K Per person/day extra",  
  },
  {
    question:"Refund and Transfer Policy for Members",
    answer:"Unfortunately, we do not have any refunds for the smart classes as these are prepaid. Once booked it cannot be cancelled at any point.",
  },
  {
    question:"What airport should I fly into?",
    answer:"Please book Flight for Srinagar for Pahalgam Program and you should reach Srinagar Airport max by 12:30 PM"
  },
  {
    question:"When should I fly in and out?",
    answer:"Arrival to Srinagar should be before 12:30 PM and Depart after 04:00 PM"
  },
  {
    question:"What food & beverages will be covered",
    answer:"All meals like Breakfast, Lunch & Dinner will be included during the stay. Please mention your choice of Veg or Non Veg in the form shared 15 days ahead of the Program"
  },
  {
    question:"Are there any facilities at the hotel for kids?",
    answer:"Unfortunately we don’t have anything special planned for kids, however the hotels are kids friendly and safe"
  },
  {
    question:"Is there Wi-Fi at the hotel?",
    answer:"Yes, please contact the Hotel Reception for the access"
  },
  {
    question:"Is it Safe to Travel to Kashmir?",
    answer:"Your safety is our Top Priority. Since we have our Local presence in the state, you can rely on us. It is as safe as any other city or state in the world"
  },
  {
    question:"What is the dress code?",
    answer:"Since it will be a peak winter season and may be snowing as well, we strongly recommend you to keep warm clothes along. While the Hotel is centrally Airconditioned but outside will be chilling."
  },
  {
    question:"What should I bring with me?",
    answer:"A Possitive attitude to learn something new. A checklist will be shared 15 days in advance of the program"
  },
  {
    question:"Where can I get more information?",
    answer:"Call/whatsapp our support  number on +91-9519284449 for any questions or concerns"
  }
];

function FaqContent () {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };



  return (
    <div className={styles.faqContainer}>
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className={styles.box}>
          <div
            onClick={() => toggleQuestion(index)}
            className={styles.item_question}
          >
            {item.question}
          </div>
          <hr></hr>
          {openIndex === index && (
            <div className={styles.answer}>
              {typeof item.answer === "string" ? item.answer : item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default FaqContent;