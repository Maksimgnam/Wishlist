'use client'
import React, { FC } from 'react';
import { ViewParams } from '@/interfaces';
import BookView from '@/components/View/BookView';
import { useRouter } from 'next/navigation';

const page:FC<ViewParams> = ({params}) => {
  const router = useRouter()
  const bookWish = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/book/wishlist/${params.id}/wish/${params.wishId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isBooked: true }), 

        
      });
      router.push(`/view/${params.id}`)
  
      console.log(response)
     
    } catch (error) {
      console.error('Error booking wish:', error);
    }
  };
  return (
    <div className='w-full min-h-screen bg-white flex items-center justify-center'>

   
     <BookView   params={params} bookWish={bookWish}/>
     </div>
  )
}

export default page