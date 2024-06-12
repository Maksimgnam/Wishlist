import React, { FC } from 'react';
import { viewWish } from '@/interfaces';
interface ViewWishCard{
  view: viewWish
}

const ViewWishCard:FC<ViewWishCard> = ({view}) => {
  return (
    <div className={`w-full h-16 shadow-md rounded-lg flex items-center justify-between m-5 p-8 ml-0 ${view.isBooked ? 'bg-green-200' : 'bg-white'}`}>
        <p className={`text-lg font-medium ${view.isBooked ? ' line-through ' : ''}`}>{view.title}</p>
        {
          view.isBooked  === true ?(
            <div className='w-16 h-6 rounded bg-booked flex items-center justify-center'>
            <p className='text-sm text-white'>Booked</p>
          </div>

          ):(
            <div className='w-11 h-6 rounded bg-button flex items-center justify-center'>
              <p className='text-sm text-white'>Free</p>
            </div>

          )
        }

    </div>
  )
}

export default ViewWishCard