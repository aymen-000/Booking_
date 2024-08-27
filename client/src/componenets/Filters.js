import React, { useState} from 'react';


function Filters({setPrice , setRooms ,setDistance , setReviews}) {


  return (
    <div className="flex flex-wrap bg-[#F0EFEF] p-4 rounded-lg shadow-md lg:space-x-2 max-lg:space-y-2">
      {/* Price Filter */}
      <select

        onChange={(e) => setPrice(e.target.value)}
        className="w-full md:w-40 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#C49C74]"
      >
        <option value="">Price</option>
        <option value="low">Low</option>
        <option value="high">High</option>
      </select>

      {/* Rooms Filter */}
      <select

        onChange={(e) => setRooms(e.target.value)}
        className="w-full md:w-40 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#C49C74]"
      >
        <option value="">Rooms</option>
        <option value="1">1 Room</option>
        <option value="2">2 Rooms</option>
        <option value="3">3 Rooms</option>
        <option value="4">4+ Rooms</option>
      </select>

      {/* Distance Filter */}
      <select

        onChange={(e) => setDistance(e.target.value)}
        className="w-full md:w-40 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#C49C74]"
      >
        <option value="">Distance from Center</option>
        <option value="1km">1 km</option>
        <option value="5km">Up to 5 km</option>
        <option value="10km">Up to 10 km</option>
      </select>

      {/* Reviews Filter */}
      <select

        onChange={(e) => setReviews(e.target.value)}
        className="w-full md:w-40 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#C49C74]"
      >
        <option value="">Reviews</option>
        <option value="good">Good</option>
        <option value="average">Average</option>
        <option value="poor">Poor</option>
      </select>
    </div>
  );
}

export default Filters;


