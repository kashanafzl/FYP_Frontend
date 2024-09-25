import React from 'react'
import Navbar from './Navbar/Navbar'
import Mainsection from './Mainsection/Mainsection'
// import Card from './Card/Card'
import Apply from './Apply/Apply'
import Feature from './AddFeatures/Feature'

function Home() {
  return (
    <div>
        <Navbar/>
        <Mainsection/>
        {/* <Card/> */}
        <Apply/>
        <Feature/>
    </div>
  )
}

export default Home