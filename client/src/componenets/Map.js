import React, { useState } from 'react';
import "leaflet/dist/leaflet.css";
import {
    MapContainer,
    TileLayer,
    Marker, 
    Popup
} from "react-leaflet";

function Map({position}) {


    return (
        <div className='w-full'>
            <div className=''>
                <MapContainer
                    style={{
                        height: "80vh",
                        width: "100%",
                     
                        zIndex: 10 // Ensure the map is rendered behind the input and button
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
            </div>
        </div>
    );
}

export default Map;