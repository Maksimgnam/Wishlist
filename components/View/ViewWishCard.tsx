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


  return (
    <div className={` w-full h-16  border rounded-lg flex items-center justify-between m-6 mt-2 sm:p-6 p-4 ml-0 mr-0 ${view.isBooked ? 'bg-green-200' : 'bg-white'}`}>
      <div className='w-auto h-auto flex items-center'>
       <p className='text-2xl'>🎁</p>
        <p className={`text-lg text-black  ${view.isBooked ? ' line-through ' : ''} pl-2`}>{view.title}</p>
      </div>

        {
          view.isBooked  === true ?(
            <div className='w-16 h-6 rounded bg-booked flex items-center justify-center'>
            <p className='text-sm text-white'>Booked</p>
          </div>

          ):(
            <Link href={`/view/${params.id}/${view.wishId}`}>
            <div  className='w-11 h-6 rounded bg-gray-300 flex items-center justify-center'>
              <p className='text-sm text-white'>Free</p>
            </div>
            </Link>

          )
        }
   

    </div>
  )
}

export default ViewWishCard