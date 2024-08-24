import React from 'react'
import Navbar from '../componenets/Navbar'
import Places from '../componenets/Places'
import Subscribe from '../componenets/Subscribe'
import Questions from '../componenets/Questions'

function Home() {
  return (
    <div>
      <Navbar/>
      <Places/>
      <Subscribe/>
      <Questions/>
    </div>
  )
}

export default Home