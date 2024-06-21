import React, { FC } from 'react';
import { viewWish } from '@/interfaces';
import Link from 'next/link';
interface ViewWishCard{
  view: viewWish,
 params:{
    id:any
    uid:any,
    wishId:string

  }

}

const ViewWishCard:FC<ViewWishCard> = ({view, params}) => {
  const bookWish = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/book/${params.wishId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isBooked: true }), // Sample payload
      });
  
    } catch (error) {
      console.error('Error booking wish:', error);
    }
  };

  return (
    <div className={`w-full h-16  border rounded-lg flex items-center justify-between m-2 p-8 ml-0 ${view.isBooked ? 'bg-green-200' : 'bg-white'}`}>
        <p className={`text-lg font-medium ${view.isBooked ? ' line-through ' : ''}`}>{view.title}</p>
        {
          view.isBooked  === true ?(
            <div className='w-16 h-6 rounded bg-booked flex items-center justify-center'>
            <p className='text-sm text-white'>Booked</p>
          </div>

          ):(
            <Link href={`/view/${params.id}/${view.id}`}>
            <div onClick={bookWish} className='w-11 h-6 rounded bg-gray-300 flex items-center justify-center'>
              <p className='text-sm text-white'>Free</p>
            </div>
            </Link>

          )
        }
   

    </div>
  )
}

export default ViewWishCard