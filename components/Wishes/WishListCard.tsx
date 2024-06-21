import React, { FC } from 'react';

interface WishListCardData{
    title:string
}

const WishListCard:FC<WishListCardData> = ({title}) => {
  return (
    <div className='w-full h-9 hover:bg-slate-50 rounded flex items-center   pl-1'>
       
        <p className='text-sm  pl-2 pt-1'>{title}</p>

    </div>
  )
}

export default WishListCard