import React from 'react';
import { FC } from 'react';
import useStore from '@/store/store';
import UserCard from './UserCard'

interface HeaderData{
  isSettingsChange: ()=> void,
  toggleTheme:()=> void,
  isDarkTheme:boolean
}

const Header:FC<HeaderData> = ({isSettingsChange, toggleTheme, isDarkTheme}) => {
  const toggleMenuBar = useStore((state) => state.toggleMenuBar);

  return (
    <div className='w-full  h-12 flex items-center  justify-between p-1 '>
        <div className='w-auto h-auto flex items-center'>
            <div className='w-6 h-6 bg-yellow-300 rounded flex items-center justify-center'>
            <img className='w-3 h-3' src='https://cdn-icons-png.freepik.com/512/4305/4305337.png' alt='' />
            </div>
            <p  className='text-sm font-medium pl-1'>Wishist</p>
        </div>
        <div className='w-auto h-auto flex '>
    


        <UserCard isSettingsChange={isSettingsChange}  toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/> 
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