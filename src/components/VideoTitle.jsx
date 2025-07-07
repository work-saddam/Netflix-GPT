import React from 'react'

export const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-36 px-8'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='w-1/4 py-6'>{overview}</p>

        <div>
            <button className='cursor-pointer bg-gray-400 px-10 py-2 rounded-lg'>▶️ Play</button>
            <button className='cursor-pointer bg-gray-400 px-10 py-2 rounded-lg mx-2'>More Info</button>
        </div>
    </div>
  )
}
