import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export default function Feature() {
  const [openCardIndex, setOpenCardIndex] = useState(null);

  const handleCardClick = (index) => {
    setOpenCardIndex(openCardIndex === index ? null : index);
  };

  return (
    <div className="flex flex-wrap justify-center gap-8 mx-12 my-36">
      {[
        { bgColor: '#213040', icon: "mdi:book-outline", title: "Teaching and Learning", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, saepe!" },
        { bgColor: '#38b788', icon: "clarity:group-line", title: "Collaboration", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, saepe!" },
        { bgColor: '#fab56d', icon: "mdi:book-outline", title: "Resources", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, saepe!" },
        { bgColor: '#f27256', icon: "mdi:book-outline", title: "Support", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, saepe!" }
      ].map((card, index) => (
        <div
          key={index}
          style={{ backgroundColor: card.bgColor }}
          className={`text-white w-[205px] h-[400px] flex flex-col justify-center items-center p-8 transition-all duration-300 rounded-lg shadow-lg relative overflow-hidden cursor-pointer 
          ${openCardIndex === index ? 'w-[315px] z-10 justify-start p-5' : ''}`} 
          onClick={() => handleCardClick(index)}
        >
          <Icon className='text-[6rem] transition-all duration-300 animate-bounce' icon={card.icon} />
          {/* <h1 className={`writing-mode-vertical-rl transform rotate-0 text-center flex items-center w-full text-[19px] font-bold transition-transform duration-300 ${openCardIndex === index ? 'rotate-[270deg]' : ''}`}>
            {card.title}
          </h1> */}
          <p className={`text-[14px] transition-opacity duration-300 max-h-0 overflow-hidden mt-2 opacity-0 ${openCardIndex === index ? 'opacity-100 max-h-[200px]' : ''}`}>
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}
