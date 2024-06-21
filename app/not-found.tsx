import React from 'react'

export default function NotFound  (){
  return (
    <div className='w-full h-svh  flex flex-col items-center justify-center'>
      <div className='w-auto h-auto '>
        <p className='text-4xl font-mono'>Somethimg went wrong</p>

      </div>
      <img src="https://cdni.iconscout.com/illustration/premium/thumb/something-went-wrong-4344462-3613890.png?f=webp" alt="" />
      <div className='w-auto h-auto '>
        <p className='text-3xl font-mono'>Please try again</p>

      </div>
    </div>
  )
}