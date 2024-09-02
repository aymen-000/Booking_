import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SearchHeader from '../componenets/SearchHeader'
import axios from 'axios'
import HotelImageGrid from '../componenets/HotelImageGrid'
import HotelInfo from '../componenets/HotelInfo'
import { Spinner } from "flowbite-react";
import Descritption from '../componenets/Descritption'
import ReserveCard from '../componenets/ReserveCard'
import MapComponent from '../componenets/MapComponent'
import Rating from '../componenets/Rating'
import Footer from '../componenets/Footer'
function Hotel() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:8800/api/hotels/' + id)
      .then((result) => {
        setHotel(result.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className='bg-[#F0EFEF]'>
      <SearchHeader />
      {loading ? (
        <div className='flex justify-center my-4'>
          <Spinner />
        </div>
      ) : (
        hotel && (
          <div className='max-sm:mx-auto'>
            <div className='mx-auto max-lg:w-full max-lg:mx-4 w-2/3 flex justify-center my-4'>
              <HotelImageGrid images={hotel.photos} id={id} />
            </div>
            <div className='flex justify-center lg:px-4 py-4 space-y-4 max-lg:mx-2 lg:space-x-6 max-lg:flex-col'>
              <div className='space-y-4'>
                <HotelInfo
                  title={hotel.name}
                  location={hotel.city}
                  reviews={hotel.rating}
                  amenities={hotel.features}
                  numBedrooms={hotel.rooms.length}
                />
                <Descritption desc={hotel?.desc} />
                <div className='rounded-lg bg-white py-6 px-3 space-y-2'>
                  <h1 className='text-2xl font-bold'>Rating</h1>
                  <hr className='text-slate-500'/>
                  <Rating initialRating={hotel?.rating} hotelId={hotel?._id}  />
                </div>

              </div>
              <div className='space-y-4 z-10 mx-auto max-lg:w-full'>
                <ReserveCard review={hotel?.rating} price={hotel?.
                  cheapestPrice} />
                  <div className='z-10'>
                  <MapComponent coordinates={hotel?.coordinates} hotelName={hotel?.name} />
                    </div>
                
              </div>
            </div>
            <Footer/>
          </div>
        )
      )}
    </div>
  );
}



export default Hotel