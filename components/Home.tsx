'use client'
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {auth} from '../firebase/config'
import { User } from '@/interfaces';
import Image from 'next/image';
import { WishListData } from '@/interfaces';

const Home = () => {
  const [user , setUser] = useState<User | null>(null)


  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
          if (authUser) {
  
              const newUser: User = {
                  uid: authUser.uid,
                  displayName: authUser.displayName || '',
                  email: authUser.email || '',
        
  
              };
              setUser(newUser);
              console.log()
          } else {
              setUser(null);
          }
          console.log(authUser)
      });
  
      return () => unsubscribe();
  
  }, []);

  return (
<div className='w-full h-full flex flex-col items-center justify-center'>
  <h2 className='text-5xl mb-4'>Hi,  <span className='text-green-400'>{user?.displayName}  👋 </span>  </h2>
  <p className='text-6xl'>Lets go to <span  className="text-green-400">wishlists</span> </p>
</div>
  )
}

export default Home