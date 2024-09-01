import React, { useContext, useEffect, useState } from 'react';
import '../input.css';
import { IoMenu } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { PlaceKit } from '@placekit/autocomplete-react';
import '@placekit/autocomplete-js/dist/placekit-autocomplete.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'flowbite-react';
const Navbar = () => {
  const [loading , setLoading] = useState(false)
  const [place, setPlace] = useState('')
  const [checkin, setCheckin] = useState('')
  const [checkout, setCheckout] = useState('')
  const [guests, setGuests] = useState('')
  const {exist , user , setExist , setUser } = useContext(UserContext)
  // autoComplete 
  const [open, setOpen] = useState(false);
  const [openUser , setOpenUser] = useState(false)
  const [places, setPlaces] = useState([])
  const navigate  = useNavigate()
  const images = [
    '../assets/bg1.jpg', // Replace these with the paths to your images
    '../assets/bg2.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [])
  const logout = (e) => {
    setLoading(true)
    axios.get('http://localhost:8800/api/auth/logout', { withCredentials: true }).then(
      (result) => {
        setLoading(false)
        setExist(false)
        setUser(null)
        navigate('/signin')
      }
    ).catch((err) => {
      setLoading(false)
      console.log(err.message)
    })
  }
  return (
    <div className={currentIndex == 0 ? "relative bg-cover bg-center bg-nav_bg  text-white" : "relative bg-cover bg-center bg-nav_bg_2  text-white"} >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-20 flex justify-between px-8 py-6 items-center">
        <h1 className="text-xl md:text-2xl font-bold">Bookme.com</h1>

        {/* Mobile Menu Button */}
        <div className='sm:hidden'>
          <IoMenu
            className='text-5xl cursor-pointer font-semibold text-[#C49C74]'
            onClick={() => setOpen(!open)}
          />

          {/* Mobile Menu */}
          <div className={open ? 'flex flex-col absolute top-20 right-5 w-[calc(100%-5rem)] mx-3 bg-black bg-opacity-90 rounded-lg z-30 mb-7' : 'hidden'}>
            <Link
              to='/list-property'
              className='border-t-2 border-white px-4 py-3 hover:bg-white hover:text-black transition duration-300 cursor-pointer'
              onClick={() => setOpen(false)} // Close the menu when an item is clicked
            >
              List your property
            </Link>
            <Link
              to='/support'
              className='border-t-2 border-white px-4 py-3 hover:bg-white hover:text-black transition duration-300 cursor-pointer'
              onClick={() => setOpen(false)}
            >
              Support
            </Link>
            <Link
              to='/trips'
              className='border-t-2 border-white px-4 py-3 hover:bg-white hover:text-black transition duration-300 cursor-pointer'
              onClick={() => setOpen(false)}
            >
              Trips
            </Link>
            {!exist && <Link to='/hotels?place=' className="border-t-2 border-white px-4 py-3 hover:bg-white hover:text-black transition duration-300 cursor-pointer" onClick={() => setOpen(false)}>sigin</Link>}
            {exist && <Link to='/hotels?place=' className="border-t-2 border-white px-4 py-3 hover:bg-white hover:text-black transition duration-300 cursor-pointer" onClick={() => setOpenUser(!openUser)}>{user?.username}</Link>}
            {openUser && <Link to='/hotels?place=' className="border-t-2 border-white px-4 py-3 hover:bg-white hover:text-black transition duration-300 cursor-pointer" onClick={() => setOpen(false)}>My bookings</Link>}
            {openUser && <Link className="border-t-2 border-white px-4 py-3 hover:bg-white hover:text-black transition duration-300 cursor-pointer flex items-center space-x-2" onClick={(e) => { logout(e); setOpen(true) }}>{loading && <Spinner className='w-4 mr-2' />}
              Logout
            </Link>}
            <Link
              to='/get-app'
              className='border-t-2 border-white px-4 py-3 hover:bg-white hover:text-black transition duration-300 cursor-pointer'
              onClick={() => setOpen(false)}
            >
              Get the app
            </Link>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-4 md:space-x-8 text-sm md:text-base items-center">
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

      <div className={`z-10 relative flex flex-col justify-center items-center h-full px-4 md:px-8 text-center transition-all duration-300 ${open ? 'mt-48' : 'mt-1'}`}>
        <h2 className={`text-3xl md:text-5xl  font-bold mb-4 md:mb-6 ${open ? 'mt-12' : 'mt-0'}`}>Explore your place to stay</h2>
        <div className="bg-gray-800 bg-opacity-75 p-6 md:p-8 rounded-lg shadow-lg w-full max-w-lg md:max-w-2xl">
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
            <PlaceKit apiKey={process.env.REACT_APP_KEY} className="flex-1 p-3 md:p-4 rounded bg-gray-700 placeholder-gray-400 mb-4 md:mb-0" placeholder='Place' onChange={(e) => { setPlace(e.target.value) }} />
          </div>

          {/* Check-in, Check-out, Guests */}
          <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
            <input className="flex-1 p-3 md:p-4 rounded bg-gray-700 placeholder-gray-400 mb-4 md:mb-0" type="date" placeholder="Check in" onChange={(e) => { setCheckin(e.target.value) }} />
            <input className="flex-1 p-3 md:p-4 rounded bg-gray-700 placeholder-gray-400 mb-4 md:mb-0" type="date" placeholder="Check out" onChange={(e) => { setCheckout(e.target.value) }} />
            <input className="flex-1 p-3 md:p-4 rounded bg-gray-700 placeholder-gray-400" type="number" min={"0"} placeholder="Guests" onChange={(e) => { setGuests(e.target.value) }} />
          </div>

          {/* Checkout Button */}
          <Link to={`/hotels?place=${place}&checkin=${checkin}&checkout=${checkout}&guests=${guests}`}>
            <button className="bg-[#C49C74] w-full py-3 rounded text-white hover:bg-[#b99979] transition duration-300">
              Search
            </button>
          </Link>
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
