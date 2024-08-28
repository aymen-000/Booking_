import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Card, Button } from 'flowbite-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CiCalendarDate } from "react-icons/ci";

function ReserveCard({ price, review }) {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState(1);

  // Calculate the number of nights based on selected dates
  const getNumberOfNights = () => {
    if (!checkInDate || !checkOutDate) return 0;
    const diffTime = Math.abs(checkOutDate - checkInDate);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const numberOfNights = getNumberOfNights();
  const total = numberOfNights * price;

  return (
    <Card className="w-full p-4 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">{price}$ /night</h2>
        <div className="flex items-center">
          <FaStar className="text-red-500 mr-1" />
          <span className="text-sm text-gray-500">{review} reviews</span>
        </div>
      </div>

      <div className="my-4">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">

            <div className='rounded-lg border-2 border-slate-200 py-4 px-6 flex items-center'>
            <CiCalendarDate className='text-2xl mr-2'/>
              <div className="text-sm text-gray-500 mr-2">Check in</div>
              <DatePicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                selectsStart
                startDate={checkInDate}
                endDate={checkOutDate}
                className="border rounded px-2 py-1"
                placeholderText="Select date"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className='rounded-lg border-2 border-slate-200 py-4 px-5 flex items-center'>
              
              <CiCalendarDate className='text-2xl mr-2'/>
              <div className="text-sm text-gray-500 mr-2"> Check out</div>
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                selectsEnd
                startDate={checkInDate}
                endDate={checkOutDate}
                minDate={checkInDate}
                className="border rounded px-2 py-1"
                placeholderText="Select date"
              />
            </div>

          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Guests</span>
            <input
              type="number"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              min="1"
              className="border rounded px-2 py-1 w-16"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">
          {price}$ x {numberOfNights} night{numberOfNights > 1 && 's'}
        </span>
        <span className="font-semibold">${total}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">Service charge</span>
        <span className="font-semibold">$0</span>
      </div>
      <hr className='text-gray-700'/>
      <div className="flex justify-between items-center font-semibold text-lg mt-4">
        <span>Total</span>
        <span>${total}</span>
      </div>
      <Button className="bg-[#B38B68] w-full mt-4 py-2 text-white rounded-lg hover:bg-[#9f7d5e]">
        Reserve
      </Button>
    </Card>
  );
}

export default ReserveCard;