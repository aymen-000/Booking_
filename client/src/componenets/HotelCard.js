import React, { useEffect, useState } from 'react';
import { MdBedroomParent } from "react-icons/md";
import { BiArea } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { CiStar } from "react-icons/ci";

function HotelCard({ img, place, price, numBedrooms, area , scale }) {
    const [liked, setLiked] = useState(false);

    const handleLikeClick = () => {
        setLiked(!liked);
    };

    return (
        <div className={scale ? 'w-fit blur scale-75' : 'w-fit'}>
            <div className='w-[300px] h-[300px] rounded-2xl overflow-hidden shadow-2xl relative'>
                <img className='w-full h-full object-cover' src={img} alt={`${place}`} />
                <div className='absolute top-2 left-2 flex mx-auto w-full items-center space-x-40'>
                    <div className='flex space-x-1 text-xl items-center rounded-2xl px-3 bg-[#C9BEB3] bg-opacity-20 py-1'>
                        <CiStar className='text-[#C9BEB3] text-2xl' />
                        <div className='text-white'>
                            4.5
                        </div>
                    </div>
                    <AiOutlineLike 
                        className={`text-3xl ${liked ? 'text-red-700' : 'text-gray-400'}`} 
                        onClick={handleLikeClick} 
                        style={{ cursor: 'pointer' }}
                    />
                </div>
            </div>
            <div className='flex justify-between mt-2 items-start'>
                <div className='text-black text-xl font-medium'>
                    {place}
                </div>
                <div className='text-right'>
                    <div className='text-[#C49C74] text-2xl font-bold'>
                        ${price}
                    </div>
                </div>
            </div>
            <div className='flex justify-between text-[#C9BEB3]'>
                <div className='flex justify-between font-bold w-fit text-[#C9BEB3] space-x-4'>
                    <div className='flex items-center'>
                        <MdBedroomParent className='mr-1' />
                        <span>{numBedrooms} bedrooms</span>
                    </div>
                    <div className='flex items-center'>
                        <BiArea className='mr-1' />
                        <span>{area}m²</span>
                    </div>
                </div>
                <div className='text-sm'>
                    per month
                </div>
            </div>
        </div>
    );
}

export default HotelCard;