import View from '@/components/View/View'
import React, { FC } from 'react';
import { Params } from '@/interfaces';

const page:FC<Params> = ({params}) => {
  return (
    <div className='w-full h-auto bg-red-100'>
        <View  params={params}/>
    </div>
  )
}

export default page