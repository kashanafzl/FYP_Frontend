import React from "react";
import "./index.css";

// react rounting cdn
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Main from "./components/dashboard/Main";
import Signup from "./components/SignIn/Signup";
import Faculty from "./components/faculty/Faculty";
import Requestforfyp from "./components/requestforfyp/Requestforfyp";
import Profile from "./components/profile/Profile";
import DrShafiullah from "./components/FacultyMembers/DrShafiullah/DrShafiullah";
import DrMuneerUmar from "./components/FacultyMembers/DrMuneerUmar";
import GraduateScholar from "./components/GraduateScholarManagement/GraduateScholar";
import Exammanagement from "./components/ExamManagement/Exammanagement";

// import './index.css'

export default function App() {
  return (
    <div>
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Faculty route */}
          <Route path="faculty" element={<Faculty />} />
          {/* Faculty route */}

          {/* faculty Members */}
          <Route path="DrShafiullah" element={<DrShafiullah />} />
          <Route path="DrMuneerUmar" element={<DrMuneerUmar />} />
        {/* faculty Members */}

          {/* Dashboard  */}
          <Route path="/dashboard" element={<Main />}>
            <Route path="profile" element={<Profile />} />
            <Route path="requestforfyp" element={<Requestforfyp />} />
            <Route path="ExamManagement" element={<Exammanagement />} />
            <Route path="GraduateScholarManagement" element={<GraduateScholar />} />
            {/* <Route path="setting" element={<Setting />} /> */}
            {/* add more routes here */}
          </Route>
          {/* Dashboard  */}
        </Routes>
      </Router>
    </div>
  );
}
