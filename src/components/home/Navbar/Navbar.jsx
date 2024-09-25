import React, { useState } from "react";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosMenu,
  IoIosClose,
} from "react-icons/io";
import { useNavigate } from "react-router-dom"; 

// Logo import
import logo from "../../../assets/Img/logo.svg";

const Navbar = () => {
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleAdmissionDropdown = () => {
    setIsAdmissionOpen((prev) => !prev);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const navigate = useNavigate(); // Initialize the navigate function

  const handleSignUpClick = () => {
    navigate("/signup"); // Navigate to the Sign In page
  };
  
  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the Sign In page
  };

  return (
    <nav className="bg-lightgraycolor z-40 relative font-montserrat text-white p-2 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3 text-2xl font-bold">
          <img src={logo} alt="logo" />
          IOC
        </div>
        <div className="hidden md:flex">
          <ul className="flex space-x-6 text-[16px]">
            <li className="hover:text-gray-200">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-gray-200">
              <a href="#about">About</a>
            </li>
            <li
              className="relative hover:text-gray-200 cursor-pointer"
              onClick={toggleServicesDropdown}
            >
              <span>Services</span>
              {isServicesOpen ? (
                <IoIosArrowUp className="inline ml-1" />
              ) : (
                <IoIosArrowDown className="inline ml-1" />
              )}
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 bg-white text-black p-2 rounded shadow-lg">
                  <ul>
                    <li className="p-1 hover:bg-gray-200">
                      <a href="#service1">Requirements</a>
                    </li>
                    <li className="p-1 hover:bg-gray-200">
                      <a href="#service2">Admission</a>
                    </li>
                    <li className="p-1 hover:bg-gray-200">
                      <a href="#service3">Service 3</a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className="relative hover:text-gray-200 cursor-pointer"
              onClick={toggleAdmissionDropdown}
            >
              <span>Admission</span>
              {isAdmissionOpen ? (
                <IoIosArrowUp className="inline ml-1" />
              ) : (
                <IoIosArrowDown className="inline ml-1" />
              )}
              {isAdmissionOpen && (
                <div className="absolute left-0 mt-2 bg-white text-black p-2 rounded shadow-lg">
                  <ul>
                    <li className="p-1 hover:bg-gray-200">
                      <a href="#apply">Apply Now</a>
                    </li>
                    <li className="p-1 hover:bg-gray-200">
                      <a href="#requirements">Requirements</a>
                    </li>
                    <li className="p-1 hover:bg-gray-200">
                      <a href="#tuition">Tuition Fees</a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="hover:text-gray-200">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <IoIosClose size={30} />
            ) : (
              <IoIosMenu size={30} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-lightgraycolor text-white p-4 shadow-md">
            <ul className="flex flex-col space-y-4">
              <li className="hover:text-gray-200">
                <a href="#home">Home</a>
              </li>
              <li className="hover:text-gray-200">
                <a href="#about">About</a>
              </li>
              <li
                className="relative hover:text-gray-200 cursor-pointer"
                onClick={toggleServicesDropdown}
              >
                <span>Services</span>
                {isServicesOpen ? (
                  <IoIosArrowUp className="inline ml-1" />
                ) : (
                  <IoIosArrowDown className="inline ml-1" />
                )}
                {isServicesOpen && (
                  <div className="mt-2 bg-white text-black p-2 rounded shadow-lg">
                    <ul className="flex flex-col space-y-2">
                      <li className="hover:bg-gray-200">
                        <a href="#service1">Requirements</a>
                      </li>
                      <li className="hover:bg-gray-200">
                        <a href="#service2">Admission</a>
                      </li>
                      <li className="hover:bg-gray-200">
                        <a href="#service3">Service 3</a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li
                className="relative hover:text-gray-200 cursor-pointer"
                onClick={toggleAdmissionDropdown}
              >
                <span>Admission</span>
                {isAdmissionOpen ? (
                  <IoIosArrowUp className="inline ml-1" />
                ) : (
                  <IoIosArrowDown className="inline ml-1" />
                )}
                {isAdmissionOpen && (
                  <div className="mt-2 bg-white text-black p-2 rounded shadow-lg">
                    <ul className="flex flex-col space-y-2">
                      <li className="hover:bg-gray-200">
                        <a href="#apply">Apply Now</a>
                      </li>
                      <li className="hover:bg-gray-200">
                        <a href="#requirements">Requirements</a>
                      </li>
                      <li className="hover:bg-gray-200">
                        <a href="#tuition">Tuition Fees</a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li className="hover:text-gray-200">
                <a href="#contact">Contact</a>
              </li>
            </ul>
            {/* Add Login and Sign Up buttons in the mobile menu */}
            <div className="flex flex-col space-y-2 mt-4">
              <button onClick={handleLoginClick} className="text-white font-semibold py-2 px-4 bg-lightgraycolor hover:bg-gray-200 hover:text-black transition-transform transform hover:scale-105">
                Login
              </button>
              <button onClick={handleSignUpClick} className="text-white font-semibold py-2 px-4 bg-lightgraycolor hover:bg-gray-200 hover:text-black transition-transform transform hover:scale-105">
                Sign Up
              </button>
            </div>
          </div>
        )}

        <div className="hidden md:flex">
          <button onClick={handleLoginClick} className="mr-2 text-white font-semibold py-2 px-2 transition-transform transform hover:scale-105 hover:bg-lightgraycolor">
            Login
          </button>
          <button onClick={handleSignUpClick} className="text-white font-semibold py-2 px-2 transition-transform transform hover:scale-105 hover:bg-lightgraycolor">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
