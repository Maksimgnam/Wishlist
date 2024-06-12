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
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/wishlists`);
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
    <div className='w-2/12 min-h-screen lg:flex hidden flex-col p-3 pr-5 pt-4'>
      <div className='w-full h-auto bg-red-50 rounded-lg p-1'>
        <UserCard name={user?.displayName} />
        <div className='w-full h-auto p-1 '>
          <Link href={`/home/${params.uid}/createWishList`}>
            <div className='w-11/12 h-8 rounded flex items-center '>
              <button className='w-6 h-6 bg-button rounded flex items-center justify-center'>
                <p className='text-sm text-white font-medium '>+</p>
              </button>
              <p className='text-sm font-medium pt-1 pl-2'>Add Wishlist </p>
            </div>
          </Link>
        </div>
      </div>

      <div className='w-full h-auto bg-red-50 rounded-md mt-4 p-3 '>
        <div className='w-11/12 h-5 rounded flex items-center '>
          <div className='w-7 h-7 bg-button rounded flex items-center justify-center'>
            <img className='w-4 h-4' src='/wishlist.png' alt='' />
          </div>
          <p className='text-sm font-medium pl-1'>Wish Lists</p>
        </div>

        <div className='w-full h-auto flex flex-wrap mt-3'>
          {loading ? (
            <div className='w-full h-auto flex items-center justify-center'>
            {/* <p className='text-sm font-medium'>Loading...</p> */}
              <img className="w-9 h-9 animate-spin" src="https://cdn-icons-png.flaticon.com/512/6175/6175867.png"alt="" />
            </div>
          ) : wishlists.length > 0 ? (
            wishlists.map((wishlist: WishListData) => (
              <Link className='w-full' key={wishlist._id} href={`/home/${params.uid}/wishes/${wishlist._id}`}>
                <WishListCard key={wishlist._id} title={wishlist.title} />
              </Link>
            ))
          ) : (
            <p className='text-sm font-medium'>No created wishlists </p>
          )}
        </div>
      </div>
      <SignOut />
    </div>
  );
};

export default Menu;
