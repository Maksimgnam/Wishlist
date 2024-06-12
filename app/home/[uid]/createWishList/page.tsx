import CreateWishList from '@/components/CreateWishList'
import React, { FC } from 'react';
import { Params } from '@/interfaces';

const page:FC<Params> = ({params}) => {
  return (
    <div className='w-full  min-h-screen bg-red-50  flex items-center justify-center'>
         <CreateWishList params={params}/>
    </div>
  )
}

export default page