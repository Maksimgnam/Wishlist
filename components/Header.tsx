import React from 'react';
import { FC } from 'react';
import useStore from '@/store/store';
import UserCard from './UserCard';
import Image from 'next/image';

interface HeaderData{

  toggleTheme:()=> void,
  isDarkTheme:boolean
}

const Header:FC<HeaderData> = ({toggleTheme, isDarkTheme}) => {
  const toggleMenuBar = useStore((state) => state.toggleMenuBar);


  return (
    <div className='w-full  h-12 flex items-center  justify-between p-1 '>
        <div className='w-auto h-auto flex items-center'>



            <p  className='text-md text-green-300 font-medium pl-1'>Wishlist 😎</p>

        </div>
        <div className='w-auto h-auto flex '>
    


        <UserCard   toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/> 
        <button onClick={toggleMenuBar} className={`w-8 h-8   rounded-md lg:hidden flex flex-wrap items-center justify-between p-1.5   ${isDarkTheme ? 'bg-darkness-theme text-white' : 'bg-stone-50 text-black'}`}>
            <div className={`w-full h-line ${isDarkTheme ? 'bg-white': 'bg-black'}  rounded-md`}></div>
            <div className={`w-full h-line ${isDarkTheme ? 'bg-white': 'bg-black'}  rounded-md`}></div>
            <div className={`w-full h-line ${isDarkTheme ? 'bg-white': 'bg-black'} rounded-md`}></div>
          </button>
        </div>
  
    </div>
  )
}

export default Header