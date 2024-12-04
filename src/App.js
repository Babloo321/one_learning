import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './components/global/header/Header.js';
import Footer from './components/global/footer/Footer.js';
import Home from './components/home/Home.js';
import AllCourses from './components/pages/allCourses/AllCourses.js';
import Community from './components/pages/community/Community.js';
// import Dashboard from './components/pages/dashboard/Dashboard.js';
import Login from './components/pages/login/Login.js';
import Academy from './components/pages/oneAcademy/Academy.js';
import PartnerWithUs from './components/pages/partnerWithUs/PartnerWithUs.js';
import About from './components/global/footer/about/About.js';
import Contact from './components/global/footer/contact/Contact.js';
import Faq from './components/global/footer/faq/Faq.js';
import HandsOnTraining from './components/global/footer/handsOntraining/HandsOnTraining.js';
import PressRelease from './components/global/footer/pressRelease/PressRelease.js';
import Privacy from './components/global/footer/privacy/Privacy.js';
import Refund from './components/global/footer/refund/Refund.js';
import TermAndCond from './components/global/footer/t&c/TermAndCondition.js';
import Overview from './components/global/footer/faq/overview/Overview.js';
import AboutProgram from './components/global/footer/faq/aboutProgram/AboutProgram.js';
import Event from './components/global/footer/faq/event/Event.js';
import Apply from './components/global/footer/faq/apply/Apply.js';
import UltraSoundCourse from './components/pages/allCourses/onlineCourses/UltraSoundCourse/UltraSoundCourse.js';
import MasterRadiologyInvention from './components/pages/allCourses/handsOnPackage/masterRadiologyInvention/MasterRadiologyInvention.js';
import BreastUltrasoundIntervention from './components/pages/allCourses/upcomingHandsOnProgram/breastUltrasound Intervention/BreastUltrasoundIntervention.js';
import CityRegistration from './components/pages/oneAcademy/courseForm/CityRegistration.js';
import BecomeMember from './components/pages/partnerWithUs/becomingMember/BecomeMember.js';
import ComingSoonRegisterNow from './components/home/commingSoonCourses/registerNow/ComingSoonRegisterNow.js';
import HandsOnAllCourses from './components/home/handsOnCourse/handsOnAllCourses/HandsOnAllCourses.js';
import MyAccount from './components/withToken/myAccount/MyAccount.js';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/academy" element={ <Academy /> } />
        <Route path="/community" element={ <Community /> } />
        <Route path="/partnerwithus" element={ <PartnerWithUs /> } />
        {/* <Route path="/dashboard" element={ <Dashboard /> } /> */}
        <Route path="/allcourses" element={ <AllCourses /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/faq" element={ <Faq /> } />
        <Route path="/handsontraining" element={ <HandsOnTraining /> } />
        <Route path="/pressrelease" element={ <PressRelease /> } />
        <Route path="/privacy&policy" element={ <Privacy /> } />
        <Route path="/refund" element={ <Refund /> } />
        <Route path="/term&cond" element={ <TermAndCond /> } />
        <Route path='/overview' element={<Overview />} />
        <Route path='/aboutprogram' element={<AboutProgram />} />
        <Route path='/event' element={<Event />} />
        <Route path='/joinSmartClass' element={<Apply />} />
        <Route path='/apply' element={<Apply />} />

        <Route path='/ultraSoundCourse' element={<UltraSoundCourse />} />
        <Route path='/masterRadiologyInvention' element={<MasterRadiologyInvention />} />
        <Route path='/breastUltrasoundInvention' element={<BreastUltrasoundIntervention />} />
        <Route path='/courseForm' element={<CityRegistration />} />
        <Route path='/becomeMember' element={<BecomeMember />} />
        <Route path='/comingSoonRegisterNow' element={<ComingSoonRegisterNow />} />
        <Route path='/handsOnAllCourses' element={<HandsOnAllCourses />} />

        {/* after login */}
        <Route path='/my-account' element={<MyAccount />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
