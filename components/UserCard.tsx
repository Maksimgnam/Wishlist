"use client"
import React, {FC, useEffect, useState} from 'react';
import {auth} from '../firebase/config'
import { User } from '@/interfaces';
import Image from 'next/image';


interface UserCardData{
  isSettingsChange: ()=> void,
  toggleTheme:()=> void,
  isDarkTheme:boolean
}

const UserCard:FC<UserCardData> = ({isSettingsChange,  toggleTheme, isDarkTheme}) => {
  const [user, setUser] = useState<User | null>(null);


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const newUser: User = {
          uid: authUser.uid,
          displayName: authUser.displayName || '',
          email: authUser.email || '',
        };
        setUser(newUser);
      } else {
        setUser(null);
      }
      console.log(authUser);
    });

    return () => unsubscribe();
  }, []);
    
   
  return (
    <div className={`w-auto h-auto rounded-md flex mr-2 ${isDarkTheme ? 'bg-darkness-theme text-white' : 'bg-stone-50 text-black'}`}>
      <button onClick={toggleTheme} className='w-7 h-8  rounded flex  items-center justify-center'>
        <Image src='/theme1.png' width={17} height={17} alt=''/>
      </button>
      <button onClick={isSettingsChange} className='w-7 h-8  rounded flex  items-center justify-center'>
        <img className='w-6 h-6' src="https://cdn-icons-png.flaticon.com/512/5166/5166607.png" alt="" />
      </button>

    
    <div className=' min-w-20 w-auto h-8   rounded flex items-center p-1'>
      {
         user &&     <>
        <p className='text-sm font-medium mr-3'>{user?.displayName}</p>
        <div className='w-6 h-6 bg-yellow rounded flex items-center justify-center'>
            <p className='text-mini  font-medium '>{user?.displayName.slice(0, 1)}</p>
        </div>

        </>
      }
  
    </div>
    </div>
  )
}

export default UserCard