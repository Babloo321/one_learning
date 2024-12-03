import React, { useState } from 'react';
import Sidebar from './Sidebar';
import styles from './allCourse.module.css';
import OnlineCourses from './onlineCourses/OnlineCourses.js'
import UpcominHandsOnProgram from './upcomingHandsOnProgram/Upcoming-Hands-On-Program.js'
import HandsOnPackage from './handsOnPackage/Hands-On-Package.js';
const RenderComponent = ({ index }) => {
  switch (index) {
    case 0:
      return <OnlineCourses />
      break;

    case 1:
      return <UpcominHandsOnProgram />
      break;

      case 2:
        return <HandsOnPackage />

    default:
      break;
  }
};
const buttons = ['All Courses', 'Upcoming Hands-On Program',"Hands-On Package"];
function AllCourses() {
  const [isSelected, setIsSelected] = useState(0);
  return (
    <div className={styles.container}>
    
      <Sidebar
      className={styles.Sidebar}
        buttons={buttons}
        isSelected={isSelected}
        setIsSelected={setIsSelected}
      />
    
      
      <RenderComponent index={isSelected} className={styles.content} />
    </div>
  );
}

export default AllCourses;
