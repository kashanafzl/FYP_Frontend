import React from "react";
import './index.css'

// react rounting cdn
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Main from "./components/dashboard/Main";
import Signup from "./components/SignIn/Signup";
import Faculty from "./components/faculty/Faculty";
// import './index.css'


export default function App() {

  return (
    <div> 
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Main />} />
          <Route path="/faculty" element={<Faculty />} />

        </Routes>
      </Router>
    </div>
  );
}
