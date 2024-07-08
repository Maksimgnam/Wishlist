import View from '@/components/View/View'
import React, { FC } from 'react';
import { ViewParams } from '@/interfaces';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Wishist | View",
  description: "View",
};
const page:FC<ViewParams> = ({params}) => {
  return (
    <div className='w-full h-auto  bg-slate-50'>
      
        <View  params={params}/>
    </div>
  )
}

export default page