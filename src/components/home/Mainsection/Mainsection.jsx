import React, { useState, useEffect } from 'react';
import mainimg from '../../../assets/Img/5.jpg';

export default function Mainsection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: 'Welcome to IOC',
      subtitle: 'Total Excellence'
    },
    {
      title: 'Innovate with Us',
      subtitle: 'Leading the Future'
    },
    {
      title: 'Achieve Greatness',
      subtitle: 'Together We Rise'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden">
      <img src={mainimg} alt="Main Background" className="w-full h-screen object-cover relative z-0" />

      {/* Overlay with custom clip-path */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-500 opacity-60 z-10 clip-path-polygon"></div>

      <div className="absolute top-10 left-5 text-darkbluecolor z-20 text-center">
        <h1 className="text-7xl md:text-5.5xl text-black font-bold">
          {slides[currentIndex].title}
        </h1>
        <h2 className="text-2xl mt-4 md:text-xl text-black font-semibold">
          {slides[currentIndex].subtitle}
        </h2>
      </div>
    </div>
  );
}
