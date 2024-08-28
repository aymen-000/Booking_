import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Spinner } from 'flowbite-react';
import axios from 'axios';
const Images = () => {
  const [images, setImages] = useState([]);
  const {id} = useParams()
  const navigate = useNavigate();
  const  [loading , setLoading] = useState(false) 
  useEffect(()=>{
    axios.get('http://localhost:8800/api/hotels/'+id).then(
      (result)=>{
        setImages(result.data.photos)
        setLoading(false)
      }
    ).catch((err)=>{setLoading(false) ; console.log(err.messgae)})
  } , [id])

  return (
    <div className="flex flex-col items-center justify-center bg-black min-h-screen p-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-white bg-gray-800 px-4 py-2 rounded hover:bg-gray-700"
      >
        Back
      </button>
      
      {loading ? (
        <Spinner
          size="xl"
          aria-label="Loading images"
          className="text-white"
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Hotel ${index + 1}`}
              className="object-cover w-full h-full rounded-lg"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Images;