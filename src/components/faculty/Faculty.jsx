// Faculty.js
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { useNavigate } from "react-router-dom";  // Import useNavigate for navigation
import f1 from "../../assets/Img/shafi.jpg";
import f2 from "../../assets/Img/sirmuneer.png";
import f3 from "../../assets/Img/sirirfan.jpg";
import f4 from "../../assets/Img/sirzeeshan.jpg";

const facultyData = [
  {
    name: "Dr. Shafiullah Khan",
    title: "Professor",
    imgSrc: f1,
    page: "/drshafiullah",  // Add a page link for each faculty member
    socialLinks: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      email: "mailto:example@example.com",
      twitter: "https://twitter.com",
      whatsapp: "https://whatsapp.com",
    },
  },
  {
    name: "Dr. M. Muneer Umar",
    title: "Assistant Professor",
    imgSrc: f2,
    page: "/DrMuneerUmar",
    socialLinks: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      email: "mailto:example@example.com",
      twitter: "https://twitter.com",
      whatsapp: "https://whatsapp.com",
    },
  },
  {
    name: "Dr. M. Irfan Uddin",
    title: "Professor",
    imgSrc: f3,
    page: "/drirfan",
    socialLinks: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      email: "mailto:example@example.com",
      twitter: "https://twitter.com",
      whatsapp: "https://whatsapp.com",
    },
  },
  {
    name: "Dr. Zeeshan Iqbal",
    title: "Professor",
    imgSrc: f4,
    page: "/drzeeshan",
    socialLinks: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      email: "mailto:example@example.com",
      twitter: "https://twitter.com",
      whatsapp: "https://whatsapp.com",
    },
  },
];

function Faculty() {
  const navigate = useNavigate();  // Initialize useNavigate

  const handleCardClick = (page) => {
    navigate(page);  // Navigate to the corresponding page
  };

  return (
    <div className="flex gap-5 font-montserrat mx-10 items-center py-8">
      {facultyData.map((faculty, index) => (
        <div
          key={index}
          onClick={() => handleCardClick(faculty.page)}  // Handle card click
          className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <div className="flex justify-center overflow-hidden">
            <img
              className="w-full h-64 object-cover object-center"
              src={faculty.imgSrc}
              alt={faculty.name}
            />
          </div>
          <div className="p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              {faculty.name}
            </h2>
            <p className="text-gray-600">{faculty.title}</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href={faculty.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-transform transform hover:scale-110"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href={faculty.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-transform transform hover:scale-110"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href={faculty.socialLinks.email}
                className="text-gray-600 hover:text-red-500 transition-transform transform hover:scale-110"
              >
                <MdEmail size={22} />
              </a>
              <a
                href={faculty.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-400 transition-transform transform hover:scale-110"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href={faculty.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-500 transition-transform transform hover:scale-110"
              >
                <IoLogoWhatsapp size={22} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Faculty;
