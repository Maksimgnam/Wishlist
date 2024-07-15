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
    <div className={` w-full h-16 sm:hover:shadow-xl   border rounded-lg flex items-center justify-between m-6 mt-2 sm:p-6 p-4 ml-0 mr-0 ${view.isBooked ? 'bg-green-200' : 'bg-white'}`}>
      <div className='w-auto h-auto flex items-center'>
       <p className='text-2xl'>🎁</p>
        <p className={`text-lg text-black  ${view.isBooked ? ' line-through ' : ''} pl-2`}>{view.title}</p>
   
      </div>

      <div className='w-auto h-auto flex items-center'>



{
  view.grade  === 'excited' ? (
    <div className='w-16 h-7  bg-red-400 rounded flex items-center justify-center mr-2'>
    <p className='text-mini font-medium text-white'> {view.grade}</p>
    </div>
  ):(
    <>
    {
  view.grade ? (
    <div className='w-16 h-7  bg-green-400 rounded flex items-center justify-center mr-2'>
    <p className='text-mini font-medium text-white'> {view.grade}</p>
    </div>
  ):(
    <p></p>
  )
}
    </>
  )
}
   

        {
          view.isBooked  === true ?(
            <div className='w-16 h-6 rounded bg-booked flex items-center justify-center'>
            <p className='text-sm text-white'>Booked</p>
          </div>

          ):(
            <Link href={`/view/${params.id}/${view.wishId}`}>
            <div  className='w-12 h-7 rounded bg-gray-300 flex items-center justify-center'>
              <p className='text-sm text-white'>Free</p>
            </div>
            </Link>

          )
        }
              </div>
   

    </div>
  )
}

export default ViewWishCard