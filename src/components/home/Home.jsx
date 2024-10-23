import React from 'react';
import Navbar from './Navbar/Navbar';
import Mainsection from './Mainsection/Mainsection';
// import Card from './Card/Card';
import Apply from './Apply/Apply';
import Feature from './AddFeatures/Feature';
import { RiWhatsappFill } from "react-icons/ri";

function Home() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/923459643395", "_blank"); // Open WhatsApp in a new tab
  };

  return (
    <div>
      <div className='whatsappicondiv' onClick={handleWhatsAppClick}>
        <RiWhatsappFill className='whatsppicon' />
      </div>

      <Navbar />
      <Mainsection />
      {/* <Card/> */}
      <Apply />
      <Feature />
    </div>
  );
}

export default Home;
