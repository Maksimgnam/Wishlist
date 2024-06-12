import { WishData } from '@/interfaces'
import React, { FC } from 'react'
interface WishCardData{
  wish:WishData
}
const WishCard:FC<WishCardData> = ({wish}) => {
  return (
    <div className='w-56 h-52 bg-red-200 rounded-xl shadow-lg flex flex-col items-center justify-between p-6 m-4  '>
      <p className='text-xl  text-center  break-words'>
    {wish.title}
      
</p>
      <div className='w-full h-auto flex justify-end '>
        {
          wish.isBooked  === true ?(
            <div className='w-16 h-6 rounded bg-button flex items-center justify-center'>
            <p className='text-sm text-white'>Booked</p>
          </div>

          ):(
            <div className='w-11 h-6 rounded bg-button flex items-center justify-center'>
              <p className='text-sm text-white'>Free</p>
            </div>

          )
        }
   
      </div>
    </div>
  )
}

export default WishCard