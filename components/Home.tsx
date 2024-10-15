'use client'
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {auth} from '../firebase/config'
import { User } from '@/interfaces';
import Image from 'next/image';
import { WishListData } from '@/interfaces';
import Link from 'next/link';

const Home = () => {
  const [user , setUser] = useState<User | null>(null);
  const [wishlists, setWishlists] = useState<WishListData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const uid = user?.uid;

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
  useEffect(() => {
    const fetchWishlists = async () => {
      setLoading(true)
      if (!uid) return;

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/wishlists`);
        const data = await response.json();
        const filteredWishlists = data.filter((wishlist: WishListData) => wishlist.userId === uid);
        setWishlists(filteredWishlists);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)

      }
    };

    fetchWishlists();
  }, [uid]);

  return (
<div className='w-full h-full '>
  
  <div className='w-full h-full sm:flex hidden text-center flex-col items-center justify-center'>
  <h2 className='sm:text-5xl text-center  text-4xl mb-4'>Hi,  <span className='text-green-400'>{user?.displayName}  👋 </span>  </h2>
  <p className='sm:text-6xl text-center text-4xl'>Lets go to <span  className="text-green-400">wishlists</span> </p>
  </div>

  <div className='w-full h-full sm:hidden flex flex-col p-3  '>
    <h2 className='text-3xl'>My wishlists</h2>
    <div  className='w-full  h-auto flex-wrap'>



      {
        wishlists.map((item:WishListData)=>(

          <Link  className='w-full' key={item._id} href={`/home/${uid}/wishes/${item._id}`}>
          <div key={item._id} className='w-full h-14 bg-white bg-opacity-10  rounded flex items-center m-5 ml-0 pl-3 '>
            <h2 className='text-xl'>{item.title}</h2>
     
          </div>
          </Link>

        ))
      }


    </div>
  </div>

</div>
  )
}

export default Home