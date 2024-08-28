import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HotelImageGrid = ({ images ,id }) => {
  // Limit the number of images to a maximum of 4
  const displayedImages = images.slice(0, 3);
  return (
    <Link to={'/hotels/'+ id +'/images'} className="grid grid-cols-2 gap-4 cursor-pointer  hover:shadow-xl" >
      {/* The first image, which takes up two columns */}
      <div className="row-span-2 ">
        <img
          src={displayedImages[0]}
          alt="Hotel"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Render remaining images */}
      {displayedImages.slice(1).map((image, index) => (
        <div key={index} className="col-span-1">
          <img
            src={image}
            alt={`Hotel ${index + 2}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      ))}
    </Link>
  );
};

export default HotelImageGrid;