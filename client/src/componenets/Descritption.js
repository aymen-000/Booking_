import React from 'react'

function Descritption({desc}) {
  return (
    <div className='p-4 rounded-lg bg-white w-full h-fit py-4'>
        <div>
            <h1 className='text-2xl my-2 font-bold'>Stay information</h1>
        </div>
        <hr className='text-gray-700 '/>
        <div className='mt-2'>
            {desc}
        </div>
    </div>
  )
}

export default Descritption