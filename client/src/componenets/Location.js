import React, { useState } from 'react';
import "leaflet/dist/leaflet.css";
import {
    MapContainer,
    TileLayer,
    Marker, 
    Popup
} from "react-leaflet";

function Location() {
    const [email, setEmail] = useState('');

    const handleContactClick = () => {
        window.location.href = `mailto:your-email@example.com?subject=Contact%20Us&body=Hello,%0D%0A%0D%0AI would like to get in touch regarding your services.%0D%0A%0D%0AMy Email: ${email}`;
    };

    return (
        <div className='py-10 bg-[#252525] sm:px-10 px-3'>
            <div className='border rounded-lg mx-auto w-2/3 max-sm:w-full relative'>
                <MapContainer
                    style={{
                        height: "80vh",
                        width: "100%",
                        position: 'relative',
                        zIndex: 0 // Ensure the map is rendered behind the input and button
                    }}
                    center={[31.432026740690574, 120.8439179532812]}
                    zoom={13}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution="Google Maps"
                        url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
                    />
                    <Marker position={[31.432026740690574, 120.8439179532812]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
                <div 
                    className="absolute bottom-0 left-0 w-full bg-white bg-opacity-75 p-4 flex justify-between items-center"
                    style={{ zIndex: 1000 }}
                >
                    <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="p-2 rounded-md w-2/3 border border-gray-300"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button 
                        className="ml-4 bg-[#C49C74] text-white p-2 rounded-md hover:bg-[#A38262] transition duration-300"
                        onClick={handleContactClick}
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Location;
