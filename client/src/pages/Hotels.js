import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchHeader from '../componenets/SearchHeader';
import SingleHotelCard from '../componenets/SingleHotelCard';
import Footer from '../componenets/Footer';
import img1 from '../assets/HotelsImgs/hotel1.jpg';
import axios from "axios";
import Filters from '../componenets/Filters'
function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const place = searchParams.get('place');
  const checkin = searchParams.get('checkin');
  const checkout = searchParams.get('checkout');
  const [adress, setAdress] = useState('');
  const [price, setPrice] = useState('');
  const [rooms, setRooms] = useState('');
  const [distance, setDistance] = useState('');
  const [reviews, setReviews] = useState('');

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const query = new URLSearchParams({
          place,
          checkin,
          checkout,
          price,
          rooms,
          distance,
          reviews,
        }).toString();
        const result = await axios.get(`http://localhost:8800/api/hotels/all?${query}`);
        console.log(result.data)
        setHotels(result.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchHotels();
  }, [place, checkin, checkout, price, rooms, distance, reviews]);

  return (
    <div>
      <SearchHeader place={place} checkin={checkin} checkout={checkout} />
      <Filters
        setPrice={setPrice}
        setRooms={setRooms}
        setDistance={setDistance}
        setReviews={setReviews}
      />

      <div className='py-4 space-y-2 bg-[#F0EFEF] items-start flex-col justify-start'>
        {/* Display spinner while loading */}
        {loading ? (
          <div className='flex justify-center my-4'>
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-warning motion-reduce:animate-[spin_1.5s_linear_infinite] items-center justify-center mx-auto"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        ) : (
          // If no hotels found, show "Not Found" message
          hotels.length === 0 ? (
            <div className="flex justify-center items-center py-10">
              <p className="text-gray-500 text-lg">No hotels found.</p>
            </div>
          ) : (
            // Loop through hotels and render a SingleHotelCard for each one
            hotels.map((hotel, index) => (
              <div
                key={index}
                onMouseEnter={() => setAdress(hotel.address)}
                className='w-fit p-0'
              >
                <SingleHotelCard
                  HotelImg={hotel.photos[0] || img1} // Use the first image or default if not available
                  price={hotel.cheapestPrice}
                  location={hotel.city}
                  reviews={hotel.rating}
                  numRooms={hotel.rooms.length}
                />
              </div>
            ))
          )
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Hotels;
