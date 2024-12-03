import React,{ useState } from 'react';
import styles from './styles.module.css';
import { ImCross } from "react-icons/im";
import { RiCheckLine } from "react-icons/ri";
import { FaConnectdevelop } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import { RiCommunityFill } from "react-icons/ri";
import { BsCheck } from "react-icons/bs";
const courseDetails = [
  {id:1, heading:"Online Course", description:"Live Masterclasses",overLinePrice:"25,000",fixedPrice:"15,000",gst:"Excl. GST",duration:"Course Duration : 6 Months"},
  {id:2, heading:"Blended (Online + Offline", description:"Live + Hands-On-Session",overLinePrice:"45,000",fixedPrice:"30,000",gst:"Excl. GST",duration:"Course Duration : 6 Months"},
  {id:3, heading:"LifeTime Membership", description:"Live Masterclasses",fixedPrice:"1,00,000",gst:"Excl. GST",duration:"Course Duration : Unlimited"},
]
const advantage = [
  {id:1,heading:"Exclusive Recorded Lectures",li1:`
"24*7" Access`, li2:"Anytime Anywhere",li3:"Platform Independent",img:"https://onelearninghealthcare.com/wp-content/uploads/2022/01/MakeaLiveClassSessionMoreEffectiveandRunSmoother.jpg"},
{id:2, heading:"One on One Live Support",li1:`
"24*7" Access`, li2:"Anytime Anywhere",li3:"Platform Independent", img:"https://onelearninghealthcare.com/wp-content/uploads/2022/01/maintenance-enhancements-technical-support-is1059548978-featured-640x360_tcm27-62946.jpg"}
]
function UltraSoundCourse() {
  const [day1Visible, setDay1Visible] = useState(false);
  const [day2Visible, setDay2Visible] = useState(false);
  const remainingList = (price) =>{
   switch (price) {
    case '15,000':
      return <>
        <li><span><ImCross className={styles.cross}/></span>3 Days Hands-on Workshop</li>
        <hr />
         <li> <span><ImCross className={styles.cross}/></span>1 on 1 Video Consultation</li>
         <hr />
        <li> <span><ImCross className={styles.cross}/></span>Support on Reporting Format Access</li>
      <hr />
      </>
      break;

      case '30,000':
        return <>
        <li><span className={styles.icon}><RiCheckLine className={styles.tick}/></span><span>3 Days Hands-on Workshop</span></li>
        <hr />
         <li><span className={styles.icon}><RiCheckLine className={styles.tick}/></span> <span>1 on 1 Video Consultation</span></li>
         <hr />
        <li> <span><ImCross className={styles.cross}/></span>Support on Reporting Format Access</li>
      <hr />
      </>
        break;

        case '1,00,000':
          return <>
          <li><span className={styles.icon}><RiCheckLine className={styles.tick}/></span><span>3 Days Hands-on Workshop</span></li>
          <hr />
          <li><span className={styles.icon}><RiCheckLine className={styles.tick}/></span><span>1 on 1 Video Consultation</span></li>
           <hr />
          <li><span className={styles.icon}><RiCheckLine className={styles.tick}/></span><span>Support on Reporting Format Access</span></li>
        <hr />
        </>
          break;
   
    default:
      break;
   }
  }

  

  const handleDay1Click = () => {
    setDay1Visible((prev) => !prev);
    setDay2Visible(false);
  };
  const handleDay2Click = () => {
    setDay2Visible((prev) => !prev);
    setDay1Visible(false);
  };
  return (
    <div className={styles.container}>

    <div className={styles.top}>
      <div className={styles.herosection}>
        <div className={styles.contentcontainer}>
          <h1>Basic Ultrasound Techniques & 3d/4d Applications</h1>
          <h3>Khushboo Srivastava</h3>
          <p>
            Live Masterclass | Interactive Hands-on Session | 1 on 1 Mentoring*
          </p>
          <div className={styles.buttons}>
            <button className={styles.pay}>Pay Now</button>
            <button className={styles.download}>Download Brochure</button>
          </div>
          <h4>Batch 1 - Starting from 28th January 2023</h4>
          <p>*Registrations Open - Call/Whatsapp +91 - 95192 84449</p>
        </div>

        <div className={styles.videocontainer}>
          <iframe
          className={styles.video}
            src="https://www.youtube.com/embed/WsOyqIpNctA?autoplay=1&mute=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      </div>

      <div className={styles.courseprice}>
          {
            courseDetails.map((course) => (
              <div key={course.id} className={styles.course}>
                  <div className={styles.heading}>
                    <h1>{course.heading}</h1>
                    <p>{course.description}</p>
                  </div>
                  <div className={styles.price}>
                      <p><span className={styles.discount}>₹{course.overLinePrice}</span><span className={styles.fixed}>₹{course.fixedPrice}</span></p>
                      <p>{course.gst}</p>
                  </div>
                  <div className={styles.lists}>
                    <ul>
                      <li><span className={styles.icon}><RiCheckLine className={styles.tick}/></span> <span>Weekly Online Live classes</span></li>
                      <hr />
                      <li><span className={styles.icon}><RiCheckLine className={styles.tick}/></span>6 Month Access To Recorded Lectures</li>
                      <hr />
                      <li><span className={styles.icon}><RiCheckLine className={styles.tick}/></span> ONE|Helpdesk Support</li>
                      <hr />
                      <li><span className={styles.icon}><RiCheckLine className={styles.tick}/></span> Free Access To ONE|Community</li>
                      <hr />
                      <li> <span className={styles.icon}><RiCheckLine className={styles.tick}/></span>Mock Test</li>
                      <hr />
                      {
                       remainingList(course.fixedPrice)
                      }
                     
                    </ul>
                  </div>
                  <button className={styles.btn}>Register Now</button>
                  <p className={styles.duration}>{course.duration}</p>
              </div>
            ))
          }
      </div>


      <div className={styles.feature}>
        <div className={styles.featureheading}>Our Feature</div>

        <div className={styles.featurecard}>
          <div className={styles.card}>
          <p>Online Hands-On Simulator</p>
          <FaConnectdevelop className={styles.icon} />
          </div>
          <div className={styles.card}>
          <p>Weekly Live Classes</p>
          <FaChalkboardTeacher className={styles.icon} />
          </div>
          <div className={styles.card}>
          <p>Recorded Modules</p>
          <IoVideocam className={styles.icon} />
          </div>
          <div className={styles.card}>
          <p>Join Community</p>
          <RiCommunityFill className={styles.icon} />
          </div>
        </div>

      </div>

      <div className={styles.imagecontainer}>
          <p>You'll get a certificate after completing a program.</p>
          <img src='https://onelearninghealthcare.com/wp-content/uploads/2022/12/Pink-and-Blue-Stripes-Workshop-Certificate-600x464.jpg' alt='certificate' className={styles.certificateimage} />
      </div>

      <div className={styles.center}>
          <img src='https://onelearninghealthcare.com/wp-content/uploads/2022/12/WhatsApp-Image-2022-10-20-at-11.30.52-PM-1024x461.jpeg' alt='vizagimage' className={styles.centerimage}/>
          <p>Hands-on Training Center - Vizag, Andhra Pradesh</p>
      </div>

      <div className={styles.curriculam}>
          <h1>Hands-on Course Curriculam</h1>
          <div className={styles.days}>

            <div className={styles.day1} onClick={handleDay1Click}>
             <p>{"->"}Day1</p> 
              <div className={styles.fruits} style={{ display: day1Visible ? "block" : "none" }}>
              <table>
        <tr>
            <td>09.30 AM – 10.00 AM</td>
            <td>Welcome and Registration</td>
        </tr>
        <tr>
            <td rowspan="4">10.00 AM – 11.30 AM</td>
            <td>Detailed Knobology technical session</td>
        </tr>
            <tr>
            <td>2D/COLOR/3D/4D Knobs</td>
            </tr>
            <tr>
            <td>Detailed discussion on how to do 2D and color settings</td>
            </tr>
            <tr>
            <td>How to Improve Machine Resolution (Spatial, Contrast, and Temporal Resolution)</td>
            </tr>



        <tr>
            <td rowspan="4">11.30 AM – 01.30 PM</td>
            <td>Basics of 3D/4D techniques</td>
        </tr>
        <tr><td>3D/4D Knobs and Image Settings on Machine</td></tr>
        <tr> <td>Scanning Techniques on Machine</td></tr>
        <tr><td>How to Acquire 3D Datasets?</td></tr>

        <tr>
          <td>01.30 PM – 02.30 PM</td>
          <td>Lunch</td>
        </tr>
        <tr>
          <td rowspan="3">2.30 PM – 4.30 PM</td>
          <td>How to do Sectional Plane Analysis</td>
        </tr>
        <tr><td>X,Y,Z Rotation and Parallel shift -Hands on</td></tr>
        <tr><td>Navigation Dot Analysis</td></tr>

        <tr>
          <td>04.30 PM – 05.00 PM</td>
          <td>End</td>
        </tr>
    </table>
              </div>
            </div>
            <div className={styles.day2} onClick={handleDay2Click}>
             <p>{"->"}Day2</p> 
              <div className={styles.animals} style={{ display: day2Visible ? "block" : "none" }}>
                <table>
                  <tr>
                    <td>09.30 AM – 10.00 AM</td>
                    <td>Revision</td>
                  </tr>
                  <tr>
                    <td rowspan="4">10.00 AM – 11.30 AM</td>
                    <td>3D/4D Rendering</td>
                  </tr>
                  <tr><td>How to Render 3D /4D Datasets</td></tr>
                  <tr><td>How to use Render Paramenters</td></tr>
                  <tr><td>Importance of Render Directions</td></tr>
                  <tr>
                    <td rowspan="2">11.30 AM- 01.30 PM</td>
                    <td>Advanced 3d/4d Applications</td>
                  </tr>
                  <tr><td>Detailed discussion on Advanced techniques and its Clinical Application</td></tr>
                  <tr>
                    <td>01.30 PM – 02.30 PM</td>
                    <td>Lunch</td>
                  </tr>
                  <tr>
                    <td rowspan="2">02.30 PM – 04.30 PM</td>
                    <td>Secnario based 3d/4d Case discussion</td>
                  </tr>
                  <tr><td>Hands on session</td></tr>
                  <tr><td>04.30 PM – 05.00 PM</td><td>QNA and Certification</td></tr>
                  <tr><td>05.00 PM</td><td>Program End</td></tr>
                </table>
              </div>

            </div>

          </div>
      </div>

      <div className={styles.facultymaincontainer}>
      <p className={styles.facultyheading}>Faculty & Mentor</p>
      <div className={styles.facultycontainer}>
        <div className={styles.facultyimage}>
          <img src='https://onelearninghealthcare.com/wp-content/uploads/2021/05/IMG-20200512-WA0023-1-150x150.png' alt='human_lady' className={styles.image} />
          <p>Khushboo Srivastava</p>
        </div>
        <div className={styles.facultytext}>
          <p>From being a Product Manager in Ultrasound to an Entrepreneur, Khushboo has a passion towards teaching and this passion is clearly visible in her presentations. She has a background of Biomedical Engineering and Executive course from IIM Bangalore. Has delivered more than 500 hours of online and offline trainings at various platforms.</p>
        </div>
        </div>
      </div>

    <div className={styles.advantagemaincontainer}>
    <p className={styles.advantageheading}>The ONELearning Advantages</p>
    <div className={styles.advantagecontainer}>
    {
      advantage.map((item) => (
        <div className={styles.card} key={item.id}>
          <div className={styles.advantageimage}>
            <img src={item.img} alt='human_lady' className={styles.image}/>
          </div>
          <div className={styles.lists}>
          <p>{item.heading}</p>
          <ul>
            <li><span><BsCheck /></span><span>{item.li1}</span></li>
            <li><span><BsCheck /></span><span>{item.li2}</span></li>
            <li><span><BsCheck /></span><span>{item.li3}</span></li>
            </ul>
          </div>
        </div>
      ))
    }

    </div>

    </div>
    </div>
  );
}

export default UltraSoundCourse;
