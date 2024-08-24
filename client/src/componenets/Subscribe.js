import React from 'react'
import img1 from '../assets/places/p1.png'
import img2 from '../assets/places/p2.png'
import img3 from '../assets/places/p3.png'
import img4 from '../assets/places/p4.png'
import img5 from '../assets/places/p5.png'
import img6 from '../assets/places/p6.png'

function Subscribe() {
  return (
    <div className='bg-[#252525] py-8 flex justify-center px-4  '>
      <div className='flex flex-col md:flex-row justify-between sm:space-x-20 items-center w-full max-w-5xl'>
        <div className='md:w-1/2 '>
          <h1 className='text-white text-3xl font-medium'>
            Stay in the know
          </h1>
          <div className='flex'>
            <p className='text-xl mt-2 text-white'>
              Sign up to get marketing emails from Bookme.com, including promotions, rewards, travel experiences, and information about Bookme.com and Booking.com Transport Limited’s products and services.
            </p>
          </div>
          <div className='flex sm:space-x-2 mt-6 max-sm:flex-col'>
            <input className='py-3 px-3 bg-white w-[400px] max-sm:w-full rounded-xl shadow-xl' placeholder='Your email' type='email' />
            <button className="bg-[#C49C74] px-4 max-sm:w-full py-3 max-sm:my-2 rounded-xl text-white hover:bg-[#caa580] transition duration-300">Subscribe</button>
          </div>
          <div className='text-[15px] mt-1  text-white'>
            You can opt out anytime. See our <span className='text-[#C49C74] cursor-pointer'><a>privacy statement.</a></span>
          </div>
        </div>
        <div className='md:w-1/2 mt-8 md:mt-0 mr-4'>
          <h1 className='text-white text-3xl font-medium'>
            Trending destinations
          </h1>
          <p className='text-[15px] text-white'>Most popular choices for travelers</p>
          <div className='grid-cols-2 gap-2 items-center grid mt-2 mr-4'>
            <div className='w-fit'>
              <img src={img1} />
            </div>
            <div className='w-fit'>
              <img src={img2} />
            </div>
            <div className='w-fit'>
              <img src={img3} />
            </div>
            <div className='row-span-2 w-fit mt-2'>
              <img src={img6}  />
            </div>
            <div className='w-fit'>
              <img src={img4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe