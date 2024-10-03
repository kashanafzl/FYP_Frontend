import React from 'react'


// Logo import
import logo from "../../../assets/Img/logo.svg";

function SimpleNavbar() {
  return (
    <nav className="bg-lightgraycolor z-40 relative font-montserrat text-white p-2 px-6 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center gap-3 text-2xl font-bold">
        <img src={logo} alt="logo" />
        IOC 
      </div>
  



  

    </div>
  </nav>
  )
}

export default SimpleNavbar