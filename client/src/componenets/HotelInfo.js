import React, { useState } from 'react';
import { FaStar, FaMapMarkerAlt, FaWifi, FaTv, FaShower, FaSoap, FaTshirt, FaWind } from 'react-icons/fa';
import { CgGym } from "react-icons/cg";
import { MdPool } from "react-icons/md";
import { GoShare } from "react-icons/go";
import { AiOutlineLike } from "react-icons/ai";

// Predefined list of amenities with their corresponding icons
const predefinedAmenities = [
  { id: 'wifi', name: 'Free WiFi', icon: <FaWifi /> },
  { id: 'television', name: 'Television', icon: <FaTv /> },
  { id: 'shampoo_conditioner', name: 'Shampoo, Conditioner', icon: <FaShower /> },
  { id: 'towel', name: 'Towel', icon: <FaTshirt /> },
  { id: 'soap', name: 'Soap', icon: <FaSoap /> },
  { id: 'dryer', name: 'Dryer', icon: <FaWind /> },
  { id: 'gym', name: 'Gym', icon: <CgGym/> },
  { id: 'pool', name: 'Pool', icon: <MdPool/> },
  // Add more amenities with icons as needed
];

const HotelInfo = ({ title, location, reviews, numBedrooms, amenities }) => {
  const [like , setLike] = useState(false)
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
      {/* Title, Location, and Reviews */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <div className="flex items-center space-x-2 text-gray-500">
            <FaMapMarkerAlt />
            <p>{location}</p>
          </div>
          <div className="flex items-center space-x-2 text-red-500">
            <FaStar />
            <p>{reviews} reviews</p>
          </div>
        </div>
        {/* Like and Share buttons */}
        <div className="flex space-x-4 text-gray-500 items-center">
          <div className='flex '>
            <GoShare className='text-xl'/>
          <button className="hover:text-gray-800">Share</button>
          </div>
          <div className='flex items-center'>
            <AiOutlineLike className={like ? 'text-xl  text-red-700' : 'text-xl'}/>
            <button className="hover:text-gray-800" onClick={()=>{setLike(!like)}}>Like</button>
          </div>
          
        </div>
      </div>

      {/* Number of Bedrooms */}
      <p className="text-gray-700">{numBedrooms} bedrooms</p>
      <hr className='text-gray-600'/>
      {/* Amenities Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800">Amenities</h3>
        <p className="text-gray-600 mb-4">About the property's amenities and services</p>
        <div className="grid grid-cols-2 gap-4">
          {predefinedAmenities.map((amenity) => (
            <div key={amenity.id} className="flex items-center space-x-2 text-gray-800">
              <input
                type="checkbox"
                id={amenity.id}
                checked={amenities.includes(amenity.name)}
                readOnly
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <div className="flex items-center space-x-2">
                {amenity.icon}
                <label htmlFor={amenity.id} className="cursor-pointer">
                  {amenity.name}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;