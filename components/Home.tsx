'use client'
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {auth} from '../firebase/config'
import { User } from '@/interfaces';

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
    <div className='w-full h-full   rounded-lg  flex flex-col items-center justify-center '>
      <h2 className='sm:text-3xl text-2xl text-center font-medium mb-20 ml-10'><span className='text-yellow-400'> Hi  {user?.displayName}</span>, please choose wishlist</h2>
      <img  src="https://emojiisland.com/cdn/shop/products/Waving_Hand_Sign_Emoji_Icon_ios10_large.png?v=1571606113" alt="" className=" sm:w-56 sm:h-56 w-40 h-40  animate-bounce ml-5" />
   
    </div>
  )
}

export default Home