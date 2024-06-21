import CreateWish from '@/components/CreateWish'
import React, { FC } from 'react';
import { Params } from '@/interfaces';

const page:FC<Params> = ({params}) => {
  return (
    <div className='w-full  h-full  flex items-center justify-center'>
        <CreateWish params={params}/>
    </div>
  )
}

export default page