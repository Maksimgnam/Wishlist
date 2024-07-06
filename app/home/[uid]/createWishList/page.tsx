import CreateWishList from '@/components/CreateWishList'
import React, { FC } from 'react';
import { Params } from '@/interfaces';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Wishist | New Wishlist",
  description: "Users page",
};


const page:FC<Params> = ({params}) => {
  return (
    <div className='w-full h-full   flex items-center justify-center'>
         <CreateWishList params={params} />
    </div>
  )
}

export default page