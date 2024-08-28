import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';

function Rating({ hotelId, initialRating }) {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(null);

  const handleClick = (newRating) => {
    setRating(newRating);
    console.log(newRating)
  };

  return (
    <div className="flex items-center">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleClick(((ratingValue+initialRating ) / 2))}
              className="hidden"
            />
            <FaStar
              className="cursor-pointer"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={24}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}

export default Rating;