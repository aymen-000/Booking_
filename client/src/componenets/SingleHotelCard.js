import React from 'react';
import { FaStar } from 'react-icons/fa'; // Star icon for rating
import { BsFillPinMapFill } from 'react-icons/bs'; // Pin icon for location
import { RiHotelFill } from 'react-icons/ri'; // Hotel icon for rooms
import './style.css'
function SingleHotelCard({ HotelImg, price, location, reviews, numRooms, distance }) {
  return (
    <div className="flex max-lg:w-2/3 shadow-md  max-sm:w-full  max-lg:mx-auto  flex-col p-4 w-1/2  mx-4 bg-white border hover:shadow-2xl border-gray-200 rounded-xl  space-y-4 items-center transition-transform transform duration-300 ease-in-out cursor-pointer " >
      <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl overflow-hidden">
        <div className="w-full md:w-2/3 bg-white grid place-items-center">
          <img src={HotelImg} alt="Hotel" className="rounded-xl w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
          <h1 className="text-xl font-bold text-gray-800">{location}</h1>
          <div className="flex items-center space-x-2 text-gray-600">
            <div className="flex items-center">
              <FaStar className="text-yellow-500" />
              <span className="ml-1 text-sm font-medium">{reviews} reviews</span>
            </div>
            <div className="flex items-center">
              <BsFillPinMapFill className="text-red-500" />
              <span className="ml-1 text-sm font-medium">{distance} km from center</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <RiHotelFill className="text-blue-500" />
            <span className="text-sm font-medium">{numRooms} bedrooms</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-gray-800">${price} <span className="text-gray-600 text-base">/night</span></p>
            <button className="bg-[#C49C74] text-white  hover:bg-[#b99979] transition duration-300 button rounded-md w-fit p-2">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleHotelCard;
