'use client'
import React, { FC } from 'react';
import { ViewParams } from '@/interfaces';

const page:FC<ViewParams> = ({params}) => {
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
    <div>{params.wishId}    <button onClick={bookWish}>dh</button></div>
  )
}

export default page