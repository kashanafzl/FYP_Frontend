import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { FaHome, FaUser, FaChartBar, FaCog, FaBars, FaTimes } from 'react-icons/fa';
import { IoBook } from "react-icons/io5";
import { IoTimerSharp } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";

function Leftsidebar() {
  const [isOpen, setIsOpen] = useState(true);

  // Toggle function to open/close the sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="relative ">
        {/* Sidebar */}
        <div
          className={`bg-gray-800 text-white h-screen shadow-lg absolute  ${
            isOpen ? 'left-0' : '-left-56'
          } transition-all duration-300 ease-in-out w-72 z-40`}
        >
          {/* Sidebar Header (Logo + Menu Toggle Button) */}
          <div className="flex items-center justify-between px-6 py-4 bg-gray-900">
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            <button onClick={toggleSidebar} className="text-white focus:outline-none">
              {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>

          {/* Navigation Menu */}
          <ul className="space-y-6 mt-6">
            <li className="group">
              <Link
                to="/"
                className="flex items-center py-3 px-6 space-x-4 hover:bg-gray-700 transition duration-300 ease-in-out"
              >
                <FaHome className="text-xl" />
                <span className="text-lg font-semibold group-hover:text-gray-300">Home</span>
              </Link>
            </li>

            <li className="group">
              <Link
                to="profile"
                className="flex items-center py-3 px-6 space-x-4 hover:bg-gray-700 transition duration-300 ease-in-out"
              >
                <FaUser className="text-xl" />
                <span className="text-lg font-semibold group-hover:text-gray-300">Profile</span>
              </Link>
            </li>

            <li className="requestforfyp">
              <Link
                to="requestforfyp"
                className="flex items-center py-3 px-6 space-x-4 hover:bg-gray-700 transition duration-300 ease-in-out"
              >
                <IoBook  className="text-xl" />
                <span className="text-lg font-semibold group-hover:text-gray-300">Request For FYP</span>
              </Link>
            </li>

            <li className="group">
              <Link
                to="ExamManagement"
                className="flex items-center py-3 px-6 space-x-4 hover:bg-gray-700 transition duration-300 ease-in-out"
              >
                <IoTimerSharp   className="text-xl" />
                <span className="text-lg font-semibold group-hover:text-gray-300">Exam management </span>
              </Link>
            </li>

            <li className="group">
              <Link
                to="GraduateScholarManagement"
                className="flex items-center py-3 px-6 space-x-4 hover:bg-gray-700 transition duration-300 ease-in-out"
              >
                <FaUserGraduate  className="text-xl" />
                <span className="text-lg font-semibold group-hover:text-gray-300">Graduate Scholar </span>
              </Link>
            </li>

            <li className="group">
              <Link
                to="/analytics"
                className="flex items-center py-3 px-6 space-x-4 hover:bg-gray-700 transition duration-300 ease-in-out"
              >
                <FaChartBar className="text-xl" />
                <span className="text-lg font-semibold group-hover:text-gray-300">Analytics</span>
              </Link>
            </li>

            <li className="group">
              <Link
                to="setting"
                className="flex items-center py-3 px-6 space-x-4 hover:bg-gray-700 transition duration-300 ease-in-out"
              >
                <FaCog className="text-xl" />
                <span className="text-lg font-semibold group-hover:text-gray-300">Settings</span>
              </Link>
            </li>
          </ul>

          {/* Footer */}
          <div className="absolute bottom-6 w-full text-center">
            <p className="text-sm text-gray-400">© MY_FYP | kashanAfzal</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftsidebar;
