import { WishData } from '@/interfaces'
import React, { FC } from 'react'
interface WishCardData{
  wish:WishData
}
const WishCard:FC<WishCardData> = ({wish}) => {
  return (
    <div className='w-60 h-44 border rounded-md hover:shadow-lg flex flex-col items-center justify-between p-6 m-2  '>
      <p className='text-xl  text-center  break-words'>
    {wish.title}
      
</p>
      <div className='w-full h-auto flex justify-end '>
        {
          wish.isBooked  === true ?(
            <div className='w-16 h-6 bg-green-400 rounded  flex items-center justify-center'>
            <p className='text-sm text-white'>Booked</p>
          </div>

          ):(
            <div className='w-11 h-6 bg-gray-300 rounded  flex items-center justify-center'>
              <p className='text-sm text-white'>Free</p>
            </div>

          )
        }
   
      </div>
    </div>
  )
}

export default WishCard