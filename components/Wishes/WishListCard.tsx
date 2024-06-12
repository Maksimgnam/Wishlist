import React, { FC } from 'react';

interface WishListCardData{
    title:string
}

const WishListCard:FC<WishListCardData> = ({title}) => {
  return (
    <div className='w-full h-9 hover:bg-pink-50 rounded flex items-center   pl-1'>
        <div className='w-6 h-6  bg-wish rounded flex items-center justify-center'>
          <p className='text-sm text-white '>w</p>

        </div>
        <p className='text-sm  pl-2 pt-1'>{title}</p>

    </div>
  )
}

export default WishListCard