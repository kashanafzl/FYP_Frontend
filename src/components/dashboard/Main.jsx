import React from 'react'

import Leftsidebar from './Leftsidebar'
import SimpleNavbar from '../home/Navbar/SimpleNavbar'
import { Outlet } from 'react-router-dom'

function Main() {
  return (
    <div>
        <SimpleNavbar/>

       <div className="mainforleft" style={{display:'flex'}}>
    
      <Leftsidebar/>
    <Outlet/>
       </div>
        
    </div>
  )
}

export default Main