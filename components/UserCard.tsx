"use client"
import React, {FC, useEffect, useState} from 'react';
import {auth} from '../firebase/config'
import { User } from '@/interfaces';




const UserCard = () => {
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
    <div className='w-auto h-auto flex'>
      <div className='w-7 h-8 bg-slate-100 rounded flex  items-center justify-center'>
        <img className='w-6 h-6' src="https://cdn-icons-png.flaticon.com/512/5166/5166607.png" alt="" />
      </div>

    
    <div className='w-20 h-8 bg-slate-100  rounded flex items-center p-1'>
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