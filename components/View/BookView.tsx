'use client'
import { viewWish } from '@/interfaces';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
interface BookViewData{
  params:{
    id:any
    uid:any,
    wishId:string
  }
  bookWish:  () => void
}

const BookView:FC<BookViewData>= ({params, bookWish}) => {
  const [wish, setWish] = useState<viewWish | null>(null)
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(()=>{
      const fetchWish = async ()=>{
        setLoading(true);
        try{
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/wishlist/${params.id}/wish/${params.wishId}`);
          const data =  await response.json();
          setWish(data)
  
        }catch(error){
          console.log(error)
        } finally {
          setLoading(false);
        } 
        
      }
    
  
      fetchWish()
  
    }, [])
  return (
    <div>
   <div className='w-80 h-8 flex items-center justify-end mb-3'>
    <Link href={`/view/${params.id}`}>
    <button className='w-7 h-7 bg-black rounded-full  relative left-7'>
      <p className='text-sm text-white font-medium'>x</p>
    </button>
    </Link>
   </div>
    <div className='w-80  h-44 rounded-lg border shadow-2xl flex flex-col justify-between p-4 '>
    
      <h2 className='text-2xl'>{wish?.title}</h2>

      <div>{wish?.isBooked ? (
        <div>booked</div>
      ):(
        <div className='flex items-center'>
          <p className='text-lg f'>Status</p>
          <div className='w-24 h-6 bg-red-200 text-red-400 text-sm  rounded flex items-center justify-center ml-2 '>not booked</div>
        </div>

      )}</div>
        <button onClick={bookWish} className='w-full h-12 bg-yellow text-lg font-medium rounded'>Book</button>
    </div>
    </div>
  )
}

export default BookView