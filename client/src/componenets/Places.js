import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import img1 from '../assets/hotels/h1.jpg';
import img2 from '../assets/hotels/h2.jpg';
import img3 from '../assets/hotels/h4.png';
import img4 from '../assets/hotels/h5.jpg';
import img5 from '../assets/hotels/h6.jpg';
import HotelCard from './HotelCard';
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";

function Places() {
    const [index, setIndex] = useState(0);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const images = [
        {
            place: "Villa, Kuta Premiere",
            img: img1,
            numBedrooms: 4,
            area: "214",
            price: "214",
        },
        {
            place: "Villa, Kuta Premiere",
            img: img2,
            numBedrooms: 4,
            area: "214",
            price: "214",
        },
        {
            place: "Villa, Kuta Premiere",
            img: img3,
            numBedrooms: 4,
            area: "214",
            price: "214",
        },
        {
            place: "Villa, Kuta Premiere",
            img: img4,
            numBedrooms: 4,
            area: "214",
            price: "214",
        },
        {
            place: "Villa, Kuta Premiere",
            img: img5,
            numBedrooms: 4,
            area: "214",
            price: "214",
        },
        {
            place: "Villa, Kuta Premiere",
            img: img5,
            numBedrooms: 4,
            area: "214",
            price: "214",
        },
    ];

    const maxIndex = images.length;

    const handleNext = () => {
        if (index < maxIndex - 4) {
            setIndex(index + 1);
        }
    };

    const handlePrev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    return (
        <div className='bg-[rgb(240,239,239)]'>
            <div className='mx-auto py-10'>
                <h2 className='text-center text-gray-500 text-3xl font-semibold font-serif'>Hotels in your area</h2>
                <div className='flex max-xl:flex-col space-x-3 max-xl:space-y-2 items-center mx-auto'>
                    <FaArrowCircleLeft
                        className={`max-xl:hidden text-3xl ml-5 cursor-pointer text-[#C9BEB3] ${index === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={handlePrev}
                    />
                    <FaArrowAltCircleUp
                        className={`text-3xl mr-7 xl:hidden  cursor-pointer text-[#C9BEB3] ${index >= maxIndex - 4 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={handleNext}
                    />
                    <div className="flex justify-center space-x-2 xl:my-4 max-xl:flex-col  " ref={ref}>
                        {images.slice(index, index + 4).map((item, idx) => {
                            const scale = (idx === 0 || idx === 3);
                            return (
                                <div
                                    key={idx}
                                    className={`transition-transform duration-700 ease-in-out cursor-pointer hover:scale-105 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                >
                                    <HotelCard
                                        img={item.img}
                                        place={item.place}
                                        numBedrooms={item.numBedrooms}
                                        area={item.area}
                                        price={item.price}
                                        scale={scale}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <FaArrowCircleRight
                        className={`text-3xl mr-7 max-xl:hidden  cursor-pointer text-[#C9BEB3] ${index >= maxIndex - 4 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={handleNext}
                    />
                    < FaArrowCircleDown 
                        className={`text-3xl mr-7 xl:hidden  cursor-pointer text-[#C9BEB3] ${index >= maxIndex - 4 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={handleNext}
                    />
                </div>
            </div>
        </div>
    );
}

export default Places;