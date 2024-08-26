import React, { useEffect, useState } from 'react';
import '../input.css';
import { IoMenu } from "react-icons/io5";
import { PlaceKit } from '@placekit/autocomplete-react';
import '@placekit/autocomplete-js/dist/placekit-autocomplete.css';

function SearchHeader({ place, checkin, checkout }) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '../assets/bg1.jpg', // Replace these with the paths to your images
    '../assets/bg2.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className={`relative bg-cover bg-center ${currentIndex === 0 ? "bg-nav_bg" : "bg-nav_bg_2"} text-white`}>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-20 flex justify-between px-4 sm:px-8 py-4 sm:py-6 items-center">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Bookme.com</h1>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <IoMenu
            className="text-3xl sm:text-5xl cursor-pointer font-semibold text-[#C49C74]"
            onClick={() => setOpen(!open)}
          />

          {/* Mobile Menu */}
          <div className={`${open ? 'flex' : 'hidden'} flex-col absolute top-20 right-5 w-[calc(100%-5rem)] mx-3 bg-black bg-opacity-90 rounded-lg z-30 mb-7`}>
            {['List your property', 'Support', 'Trips', 'Sign in', 'Get the app'].map((item, index) => (
              <div
                key={index}
                className="border-t-2 border-white px-4 py-3 hover:bg-white hover:text-black transition duration-300 cursor-pointer"
                onClick={() => setOpen(false)} // Close the menu when an item is clicked
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-4 md:space-x-8 text-sm md:text-base items-center">
          {['List your property', 'Support', 'Trips', 'Sign in'].map((item, index) => (
            <a key={index} href="#" className="hover:underline">{item}</a>
          ))}
          <button className="border border-white px-2 sm:px-3 md:px-4 py-1 md:py-2 rounded-full hover:bg-white hover:text-black transition duration-300">
            Get the app
          </button>
        </div>
      </div>

      <div className={`z-10 relative pb-10 flex flex-col justify-center items-center h-full px-4 sm:px-6 md:px-8 text-center transition-all duration-300 ${open ? 'mt-48' : 'mt-1'}`}>
        <h2 className={`text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 ${open ? 'mt-20' : 'mt-0'}`}>
          Explore your place to stay
        </h2>
        <div className="bg-gray-800 flex flex-col sm:flex-row sm:space-x-2 space-y-4 sm:space-y-0 bg-opacity-75 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-full items-center">
          {/* Search Bar */}
          <div className="flex-1 flex flex-col w-full sm:flex-row sm:space-x-4 items-center">
            <PlaceKit
              apiKey={process.env.REACT_APP_KEY}
              className="flex-1 w-full sm:w-[400px] lg:w-[500px] py-3 sm:py-4 rounded bg-gray-700 placeholder-gray-400 mb-4 sm:mb-0"
              placeholder="Place" 
              value={place}
            />
          </div>

          {/* Check-in, Check-out, Guests */}
          <div className="flex flex-col sm:flex-row w-full sm:space-x-4 items-center">
            <input
              className="flex-1 w-full p-3 sm:p-4 rounded bg-gray-700 placeholder-gray-400 mb-4 sm:mb-0"
              type="date"
              placeholder="Check in"
              defaultValue={checkin}
            />
            <input
              className="flex-1 w-full p-3 sm:p-4 rounded bg-gray-700 placeholder-gray-400 mb-4 sm:mb-0"
              type="date"
              placeholder="Check out"
              defaultValue={checkout}
            />
            <input
              className="flex-1 w-full p-3 sm:p-4 rounded  bg-gray-700 placeholder-gray-400"
              type="number"
              min="0"
              placeholder="Guests"
            />
          </div>

          {/* Checkout Button */}
          <button className="bg-[#C49C74] flex-1 w-full sm:w-[200px] p-3 sm:p-4 rounded text-white hover:bg-[#b99979]  transition duration-300">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchHeader;
