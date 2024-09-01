import React, { useContext, useEffect, useState } from 'react';
import '../input.css';
import { IoMenu } from "react-icons/io5";
import { PlaceKit } from '@placekit/autocomplete-react';
import '@placekit/autocomplete-js/dist/placekit-autocomplete.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import axios from 'axios';
import { Spinner } from 'flowbite-react';

function SearchHeader({ place, checkin, checkout }) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [place1, setPlace1] = useState(place || '');
  const [checkinDate, setCheckinDate] = useState(checkin || '');
  const [checkoutDate, setCheckoutDate] = useState(checkout || '');
  const [guests, setGuests] = useState(0);
  const { exist, setExist, setUser, user } = useContext(UserContext)
  const [loading, setLoading] = useState(false)
  const [openUser, setOpenUser] = useState(false)
  const navigate = useNavigate()
  const images = [
    '../assets/bg1.jpg',
    '../assets/bg2.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);
  const logout = (e) => {
    setLoading(true)
    axios.get('http://localhost:8800/api/auth/logout', { withCredentials: true }).then(
      (result) => {
        setLoading(false)
        navigate('/signin')
      }
    ).catch((err) => {
      setLoading(false)
      console.log(err.message)
    })
  }
  // Construct the query string
  const query = `place=${encodeURIComponent(place1)}&checkin=${encodeURIComponent(checkinDate)}&checkout=${encodeURIComponent(checkoutDate)}&guests=${guests}`;

  return (
    <div className={`relative bg-cover bg-center ${currentIndex === 0 ? "bg-nav_bg" : "bg-nav_bg_2"} text-white`}>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-20 flex justify-between px-4 lg:px-8 py-4 lg:py-6 items-center">
        <h1 className="text-lg lg:text-xl md:text-2xl font-bold">Bookme.com</h1>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <IoMenu
            className="text-3xl lg:text-5xl cursor-pointer font-semibold text-[#C49C74]"
            onClick={() => setOpen(!open)}
          />

          {/* Mobile Menu */}
          <div className={`${open ? 'flex' : 'hidden'} flex-col absolute top-20 right-5 w-[calc(100%-5rem)] mx-3 bg-black bg-opacity-90 rounded-lg z-30 mb-7`}>
            <Link to='/' className="border-t-2 border-white px-4 py-3 hover:bg-white hover:text-black transition duration-300 cursor-pointer" onClick={() => setOpen(false)}>Home</Link>
            <Link to='/hotels?place=' className="border-t-2 border-white px-4 py-3 hover:bg-white hover:text-black transition duration-300 cursor-pointer" onClick={() => setOpen(false)}>Hotels</Link>
            {!exist && <Link to='/hotels?place=' className="border-t-2 border-white px-4 py-3 hover:bg-white hover:text-black transition duration-300 cursor-pointer" onClick={() => setOpen(false)}>sigin</Link>}
            {exist && <Link to='/hotels?place=' className="border-t-2 border-white px-4 py-3 hover:bg-white hover:text-black transition duration-300 cursor-pointer" onClick={() => setOpenUser(!openUser)}>{user?.username}</Link>}
            {openUser && <Link to='/hotels?place=' className="border-t-2 border-white px-4 py-3 hover:bg-white hover:text-black transition duration-300 cursor-pointer" onClick={() => setOpen(false)}>My bookings</Link>}
            {openUser && <Link className="border-t-2 border-white px-4 py-3 hover:bg-white hover:text-black transition duration-300 cursor-pointer flex items-center space-x-2" onClick={(e) => { logout(e); setOpen(true) }}>{loading &&  <Spinner className='w-4 mr-2' />}
              Logout
            </Link>}
            <Link to='/hotels?place=' className="border-t-2 border-white px-4 py-3 hover:bg-white hover:text-black transition duration-300 cursor-pointer" onClick={() => setOpen(false)}>Get the app</Link>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4 md:space-x-8 text-lg md:text-base items-center">
          <Link to='/' className="hover:underline" >Home</Link>
          {exist && <div>
            <Link onClick={() => { setOpenUser(!openUser) }}>{user?.username} </Link>
            {openUser && <div className=' absolute top-20 mt-2 '>
              <Link to='/hotels?place=' className="border-t-2 border-b-2 border-t-white px-2 py-3 hover:bg-white hover:text-black transition duration-300 cursor-pointer" onClick={() => setOpen(false)}>My bookings</Link>
              <Link to='/hotels?place=' className="border-t-2 mt-3  border-white px-2 py-3 hover:bg-white hover:text-black transition duration-300 cursor-pointer flex space-x-2 items-center mb-4" onClick={(e) => { logout(e); setOpen(true) }}>{loading && <Spinner className='w-4 mr-2' /> }Lougout</Link>
            </div>}
          </div>}
          <Link to='/hotels?place=' className="hover:underline">Hotels</Link>
          {!exist && <Link to='/signin' className="hover:underline" >sigin</Link>}

          <button className="border border-white px-2 lg:px-3 md:px-4 py-1 md:py-2 rounded-full hover:bg-white hover:text-black transition duration-300">
            Get the app
          </button>
        </div>
      </div>

      <div className={`z-10 relative pb-10 flex flex-col justify-center items-center h-full px-4 lg:px-6 md:px-8 text-center transition-all duration-300 ${open ? 'mt-48' : 'mt-1'}`}>
        <h2 className={`text-2xl lg:text-3xl md:text-5xl font-bold mb-4 md:mb-6 ${open ? 'mt-20' : 'mt-0'}`}>
          Explore your place to stay
        </h2>
        <div className="bg-gray-800 flex flex-col lg:flex-row lg:space-x-2 space-y-4 lg:space-y-0 bg-opacity-75 p-4 lg:p-6 md:p-8 rounded-lg shadow-lg w-full items-center">
          {/* Search Bar */}
          <div className="flex-1 flex flex-col w-full lg:flex-row lg:space-x-4 items-center">
            <PlaceKit
              apiKey={process.env.REACT_APP_KEY}
              className="flex-1 w-full lg:w-[500px] py-3 lg:py-4 rounded bg-gray-700 placeholder-gray-400 mb-4 lg:mb-0"
              placeholder="Place"
              value={place1}
              onChange={(e) => setPlace1(e.target.value)}
            />
          </div>

          {/* Check-in, Check-out, Guests */}
          <div className="flex flex-col lg:flex-row w-full lg:space-x-4 items-center">
            <input
              className="flex-1 w-full p-3 lg:p-4 rounded bg-gray-700 placeholder-gray-400 mb-4 lg:mb-0"
              type="date"
              placeholder="Check in"
              value={checkinDate}
              onChange={(e) => setCheckinDate(e.target.value)}
            />
            <input
              className="flex-1 w-full p-3 lg:p-4 rounded bg-gray-700 placeholder-gray-400 mb-4 lg:mb-0"
              type="date"
              placeholder="Check out"
              value={checkoutDate}
              onChange={(e) => setCheckoutDate(e.target.value)}
            />
            <input
              className="flex-1 w-full p-3 lg:p-4 rounded bg-gray-700 placeholder-gray-400"
              type="number"
              min="0"
              placeholder="Guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>

          {/* Checkout Button */}
          <Link to={`/hotels?${query}`} className='w-full  lg:w-[200px]'>
            <button className="bg-[#C49C74] w-full lg:w-fit flex-1   p-4 rounded text-white hover:bg-[#b99979] transition duration-300">
              Search1
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchHeader;
