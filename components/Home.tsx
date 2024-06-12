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
    <div className='w-full min-h-screen bg-red-100 flex flex-col items-center  justify-center'>
      <h2 className='text-3xl font-medium mb-20'><span className='text-red-700'> Hi  {user?.displayName}</span>, please choose wishlist</h2>
      <img  src="https://emojiisland.com/cdn/shop/products/Waving_Hand_Sign_Emoji_Icon_ios10_large.png?v=1571606113" alt="" className=" w-56 h-56  animate-bounce" />

    </div>
  )
}

export default Home