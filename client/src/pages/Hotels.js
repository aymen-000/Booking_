import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchHeader from '../componenets/SearchHeader';
import SingleHotelCard from '../componenets/SingleHotelCard';
import Footer from '../componenets/Footer';
import img1 from '../assets/HotelsImgs/hotel1.jpg';
import axios from "axios";
import Filters from '../componenets/Filters'
import "leaflet/dist/leaflet.css";
import icon1 from "../assets/icon.png";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap
} from "react-leaflet";
import { Icon } from 'leaflet';

// Component to change map center dynamically
function ChangeMapCenter({ center }) {
  const map = useMap();

  useEffect(() => {
    if (center.length > 0) {
      map.setView(center, map.getZoom()); // Update map center
    }
  }, [center, map]);

  return null;
}

function Hotels() {
  const icon = new Icon({
    iconUrl: icon1,
    iconSize: [38, 38]
  });

  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mapCenter, setMapCenter] = useState([37.09024, -95.712891]); // Default center
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const place = searchParams.get('place');
  const checkin = searchParams.get('checkin');
  const checkout = searchParams.get('checkout');
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
        setHotels(result.data);
        if (result.data.length > 0) {
          setMapCenter(result.data[0].coordinates); // Set default center to the first hotel's coordinates
        }
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
      <div className='flex bg-[#F0EFEF]'>
        <div className='py-4 space-y-2 w-1/2 max-lg:w-full  items-start flex-col justify-start'>
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
            hotels.length === 0 ? (
              <div className="flex justify-center items-center py-10 w-full">
                <p className="text-gray-500 text-lg">No hotels found.</p>
              </div>
            ) : (
              hotels.map((hotel, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setMapCenter(hotel.coordinates)}
                  className='p-0 w-full'
                >
                  <SingleHotelCard
                    HotelImg={hotel.photos[0] || img1}
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
        {hotels.length > 0 && (
          <div className='w-1/2 ml-3 sticky rounded-lg right-4  top-0 h-screen b bottom-3 max-lg:hidden'>
            <MapContainer
              style={{
                height: "100%",
                width: "100%",
              }}
              className='rounded-lg'
              center={mapCenter}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <ChangeMapCenter center={mapCenter} />
              {hotels.map((hotel, index) => (
                <Marker key={index} position={hotel.coordinates} icon={icon}>
                  <Popup>
                    {hotel.city} <br /> {hotel.address}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Hotels;

