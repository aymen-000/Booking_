import React, { useEffect, useState } from 'react';
import '../input.css';
import { IoMenu } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { PlaceKit } from '@placekit/autocomplete-react';
import '@placekit/autocomplete-js/dist/placekit-autocomplete.css';

const Navbar = () => {
  // autoComplete 
  const [open, setOpen] = useState(false);
  const [places , setPlaces] = useState([])
  const images = [
    '../assets/bg1.jpg', // Replace these with the paths to your images
    '../assets/bg2.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
/*   const featchPlaces = (value) => {
    var requestOptions = {
      method: 'GET',
    };

    fetch("https://api.geoapify.com/v1/geocode/autocomplete?text=fan&apiKey=ca3c2b31240e49b5b971c8b6c469af14", requestOptions)
      .then(response => response.json())
      .then(result => result.features.map((item)=>{setPlaces((prev)=> [...prev , item.properties.address_line1 + "," +  item.properties.address_line2 ]  )}))
      .catch(error => console.log('error', error));
  }
  useEffect(()=>{
    featchPlaces('value')
  } , []) */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [])
  return (
    <div className={currentIndex == 0 ? "relative bg-cover bg-center bg-nav_bg  text-white" : "relative bg-cover bg-center bg-nav_bg_2  text-white"} >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-20 flex justify-between px-8 py-6 items-center">
        <h1 className="text-xl md:text-2xl font-bold">Bookme.com</h1>

        {/* Mobile Menu Button */}
        <div className='sm:hidden'>
          <IoMenu
            className='text-5xl cursor-pointer font-semibold text-orange-600'
            onClick={() => setOpen(!open)}
          />

          {/* Mobile Menu */}
          <div className={open ? 'flex flex-col absolute top-20 right-5 w-[calc(100%-5rem)] mx-3 bg-black bg-opacity-90 rounded-lg z-30 mb-7' : 'hidden'}>
            {['List your property', 'Support', 'Trips', 'Sign in', 'Get the app'].map((item, index) => (
              <div
                key={index}
                className='border-t-2 border-white px-4 py-3 hover:bg-white hover:text-black transition duration-300 cursor-pointer'
                onClick={() => setOpen(false)} // Close the menu when an item is clicked
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-4 md:space-x-8 text-sm md:text-base items-center">
          <a href="#" className="hover:underline">List your property</a>
          <a href="#" className="hover:underline">Support</a>
          <a href="#" className="hover:underline">Trips</a>
          <a href="#" className="hover:underline">Sign in</a>
          <button className="border border-white px-3 md:px-4 py-1 md:py-2 rounded-full hover:bg-white hover:text-black transition duration-300">Get the app</button>
        </div>
      </div>

      <div className={`z-10 relative mt-6 flex flex-col justify-center items-center h-full px-4 md:px-8 text-center transition-all duration-300 ${open ? 'mt-48' : 'mt-6'}`}>
        <h2 className={`text-3xl md:text-5xl mt-48 font-bold mb-4 md:mb-6 ${open ? 'mt-12' : 'mt-0'}`}>Explore your place to stay</h2>
        <div className="bg-gray-800 bg-opacity-75 p-6 md:p-8 rounded-lg shadow-lg w-full max-w-lg md:max-w-2xl">
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
            <PlaceKit apiKey={process.env.REACT_APP_KEY }className="flex-1 p-3 md:p-4 rounded bg-gray-700 placeholder-gray-400 mb-4 md:mb-0" placeholder='Place' />
            <button className="bg-orange-500 px-4 py-3 max-sm:my-2 rounded text-white hover:bg-orange-600 transition duration-300">Search</button>
          </div>

          {/* Check-in, Check-out, Guests */}
          <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
            <input className="flex-1 p-3 md:p-4 rounded bg-gray-700 placeholder-gray-400 mb-4 md:mb-0" type="date" placeholder="Check in" />
            <input className="flex-1 p-3 md:p-4 rounded bg-gray-700 placeholder-gray-400 mb-4 md:mb-0" type="date" placeholder="Check out" />
            <input className="flex-1 p-3 md:p-4 rounded bg-gray-700 placeholder-gray-400" type="number" min={"0"} placeholder="Guests" />
          </div>

          {/* Checkout Button */}
          <button className="bg-orange-500 w-full py-3 rounded text-white hover:bg-orange-600 transition duration-300">Checkout</button>
        </div>
      </div>

      <div className="relative z-10 flex justify-center items-center text-center p-4 md:p-8 flex-col ">
        <p className="text-sm md:text-lg">We provide a variety of the best lodging accommodations for those of you who need it.<br />Don't worry about the quality of the service.</p>
        <div className='flex space-x-1 mt-3'>
          <GoDotFill onClick={() => setCurrentIndex(0)} className={currentIndex == 0 ? 'text-2xl text-gray-500 cursor-pointer' : 'text-2xl text-white cursor-pointer'} />
          <GoDotFill onClick={() => { setCurrentIndex(1) }} className={currentIndex == 1 ? 'text-2xl text-gray-400 cursor-pointer' : 'text-2xl text-white cursor-pointer'} />

        </div>
      </div>
    </div>
  );
};

export default Navbar;
