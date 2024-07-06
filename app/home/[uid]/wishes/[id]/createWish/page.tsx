import CreateWish from '@/components/CreateWish'
import React, { FC } from 'react';
import { Params } from '@/interfaces';import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Wishist | New Wish ",
  description: "Users page",
};

const page:FC<Params> = ({params}) => {
  return (
    <div className='w-full  h-full  flex items-center justify-center'>
        <CreateWish params={params}/>
    </div>
  )
}

export default page