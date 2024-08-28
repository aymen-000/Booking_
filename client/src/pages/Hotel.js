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
          <div className=''>
            <div className='mx-auto w-2/3 flex justify-center my-4'>
              <HotelImageGrid images={hotel.photos} id={id} />
            </div>
            <div className='flex justify-center px-4 py-4 space-x-6'>
              <div className='space-y-4'>
                <HotelInfo
                  title={hotel.name}
                  location={hotel.city}
                  reviews={hotel.rating}
                  amenities={hotel.features}
                  numBedrooms={hotel.rooms.length}
                />
                <Descritption desc={hotel?.desc} />
              </div>
              <div className='space-y-4'>
                <ReserveCard review={hotel?.rating} price={hotel?.
                  cheapestPrice} />
                <MapComponent coordinates={hotel?.coordinates} hotelName={hotel?.name} />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}



export default Hotel