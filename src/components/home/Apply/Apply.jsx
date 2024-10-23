import React from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { IoTimerSharp } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";

export default function Apply() {
  const navigate = useNavigate(); 

  const applyContent = [
    {
      id: 1,
      icon:  <FaBookReader  /> , // This is correct for Iconify icons
      title: "Apply For Final Year Project",
      description: "Lorem ipsum dolor sit amet.",
      path: "/dashboard/requestforfyp",
    },
    {
      id: 2,
      icon: <IoTimerSharp />, // Use the icon component directly
      title: "Apply Now For Exam management",
      description: "Lorem ipsum dolor sit amet.",
      path: "/dashboard/ExamManagement",
    },
    {
      id: 3,
      icon: <FaUserGraduate />, // Use the icon component directly
      title: "Apply For Graduate Scholar",
      description: "Graduate Scholar Management",
      path: "/dashboard/GraduateScholarManagement",
    },
  ];

  const handleCardClick = (path) => {
    if (path) {
      navigate(path); // Navigate to the page if path is provided
    }
  };

  return (
    <div className="max-w-7xl my-32 font-montserrat mx-auto p-8 flex flex-wrap gap-8 bg-white shadow-lg rounded-3xl">
      {applyContent.map((content) => (
        <div
          key={content.id}
          onClick={() => handleCardClick(content.path)} // Add the click handler
          className="flex-1 cursor-pointer min-w-[calc(33%-2rem)] p-8 border-l-4 border-lightgraycolor text-center flex flex-col justify-center items-center hover:bg-[#EADBC8] hover:text-[#102C57] relative transition-transform duration-300 transform hover:scale-105 rounded-lg"
        >
          {/* Render Iconify or React Icons conditionally */}
          {typeof content.icon === "string" ? (
            <Icon className="text-4xl mb-4" icon={content.icon} />
          ) : (
            <div className="text-4xl mb-4">{content.icon}</div> // Render React Icons
          )}
          <h2 className="text-2xl font-semibold mb-4">{content.title}</h2>
          <p className="text-lg">{content.description}</p>

          <div className="hidden hover:block absolute top-1/2 right-[-12px] transform -translate-y-1/2 w-6 h-6 bg-[#EADBC8] border-t-2 border-r-2 border-[#EADBC8] rotate-45"></div>
        </div>
      ))}
    </div>
  );
}
