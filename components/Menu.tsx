'use client'
import React, { FC, useState, useEffect } from 'react';
import WishListCard from './Wishes/WishListCard';
import { WishListData } from '@/interfaces';
import { auth } from '../firebase/config';
import { User } from '@/interfaces';
import Link from 'next/link';
import UserCard from './UserCard';
import SignOut from './SignOut';

interface Params {
  params: {
    id: any;
    uid: any;
  };
}

const Menu: FC<Params> = ({ params }) => {
  const [wishlists, setWishlists] = useState<WishListData[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [isHide, setIsHide] = useState<boolean>(true)
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
      } else {
        setUser(null);
      }
      console.log(authUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchWishes = async () => {
      if (!uid) return;
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:8000/api/wishlists`);
        const data = await response.json();
        const filteredWishlists = data.filter((wishlist: WishListData) => wishlist.userId === uid);
        setWishlists(filteredWishlists);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWishes();
  }, [uid]);

  return (
    <div className='w-1/5   lg:flex hidden justify-center items-center  '>
    

      <div className='w-full  h-menu    rounded-s-lg flex flex-col justify-between  p-5 pt-7 '>
        <div className='w-full h-auto'>
          <Link href={`/home/${params.uid}`}>
        <div className='w-full h-9 hover:bg-slate-50  rounded flex items-center  ml-0 mr-0 '>
          <div className='w-7 h-7 rounded flex items-center justify-center'>
            <img className='w-5 h-5' src='https://static.thenounproject.com/png/423483-200.png' alt='' />
          </div>
          <p className='text-sm font-medium pl-1'>Home</p>
        </div>
        </Link>

          <div className='w-full h-9 hover:bg-slate-50 rounded flex items-center justify-between mt-1  pr-4'>
            <div className='w-auto h-auto flex items-center'>
                <div className='w-7 h-7 rounded flex items-center justify-center'>
                <img className='w-5 h-5' src='https://cdn-icons-png.freepik.com/512/4305/4305337.png' alt='' />
                </div>
              <p className='text-sm font-medium pl-1'>My wishlists</p>
            </div>
            <button onClick={()=> setIsHide(!isHide)} className='w-6 h-6 bg-slate-50 hover:bg-slate-100 rounded'>
            {
            isHide ? (
              <p className='text-sm'>	&uarr;</p>
            ):(
            
              <p className='text-sm'> 	&darr;</p>

            )
          }
            </button>

          </div>
     {
      isHide && (
        <div className='w-full h-auto flex flex-wrap mt-1'>
        {loading ? (
          <div className='w-full h-auto flex items-center justify-center'>
          {/* <p className='text-sm font-medium'>Loading...</p> */}
            <img className="w-8 h-8 animate-spin" src="https://cdn-icons-png.flaticon.com/512/6175/6175867.png"alt="" />
          </div>
        ) : wishlists.length > 0 ? (
          wishlists.map((wishlist: WishListData) => (
            <Link className='w-full' key={wishlist._id} href={`/home/${params.uid}/wishes/${wishlist._id}`}>
              <WishListCard key={wishlist._id} title={wishlist.title} />
            </Link>
          ))
        ) : (
          <p className='text-sm font-medium pl-2'>No created wishlists </p>
        )}
      </div>

      )
     }
     
     
        <Link className='w-full' href={`/home/${params.uid}/createWishlist`}>
        <div className='w-full h-9 hover:bg-slate-50  rounded flex items-center  ml-0 mr-0 mt-2  pl-1 '>
          <div className='w-6 h-6 bg-gray-50 rounded flex items-center justify-center'>
            <p className='text-sm'>+</p>
          </div>
          <p className='text-sm font-medium pl-1'>New wishlist</p>
        </div>
        </Link>
        </div>
        <SignOut />
      </div>
   
    </div>
  );
};

export default Menu;
