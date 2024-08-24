import React from 'react'
import Navbar from '../componenets/Navbar'
import Places from '../componenets/Places'
import Subscribe from '../componenets/Subscribe'
import Questions from '../componenets/Questions'
import Location from '../componenets/Location'
import Footer from '../componenets/Footer'
function Home() {
  return (
    <div>
      <Navbar/>
      <Places/>
      <Subscribe/>
      <Questions/>
      <Location/>
      <Footer/>
    </div>
  )
}

export default Home