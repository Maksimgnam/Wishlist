import { WishData, WishListData } from '@/interfaces';
import React, { FC } from 'react';
interface WishDataProps{
    wishes:WishListData | null
}


const WishesData:FC<WishDataProps> = ({wishes}) => {
  return (
    <div className='w-auto h-auto'>
        <div className={`w-44 h-32  rounded-xl  shadow-xl  bg-yellow-200 fixed top-28  ml-6 mt-3 z-50 p-2 `}>
            <div className='w-auto h-auto flex items-center'>
                <div className='w-7 h-7 bg-black rounded-md flex items-center justify-center pb-1 '>
                    <img className='w-5 h-5' src="https://cdn-icons-png.flaticon.com/512/5311/5311894.png" alt="" />
                </div>
                <p className='text-md text-black pl-1'>infos</p>
            </div>

            <div className='w-full h-auto flex items-center m-2 ml-0'>
            <button className='w-7 h-7    bg-yellow-300 rounded-md flex items-center justify-center'>
            <img className='w-3 h-3' src="https://cdn-icons-png.flaticon.com/512/994/994731.png" alt="" />
            </button>
            <p className='text-sm text-black pl-1'>Wishes: {wishes?.wishes.length}</p>
            </div>

            <div className='w-full h-auto flex items-center m-2 ml-0'>
            <button className='w-7 h-7    bg-yellow-300 rounded-md flex items-center justify-center'>
                <img className='w-3 h-3' src="https://cdn-icons-png.flaticon.com/512/826/826165.png" alt="" />
            </button>
            <p className='text-sm text-black pl-1'>{wishes?.createdAt.toString().slice(0,10)}</p>

            </div>

            {/* <div className='w-auto h-auto flex items-center m-1 ml-0 mt-1'>

                <button className='w-7 h-6    rounded-md flex items-center justify-center  '>

                </button>
                <p className='text-sm text-black pl-1'>{wishes?.createdAt.toString().slice(0,10)}</p>
            </div>
            <div className='w-auto h-auto bg-slate-950  flex items-center m-1 ml-0 mt-1'>
                <div className='w-7 h-6    rounded-md flex items-center justify-center  '>
                    <img className='w-4 h-4' src="https://cdn-icons-png.flaticon.com/512/994/994731.png" alt="" />
                </div>
                <p className='text-sm text-black pl-1'>{wishes?.wishes.length}</p>
            </div> */}

        </div>
    </div>
  )
}

export default WishesData