'use client'
import React, { FC, useState, useEffect } from 'react';
import WishListCard from './Wishes/WishListCard';
import { WishListData } from '@/interfaces';
import { auth } from '../firebase/config';
import { User } from '@/interfaces';
import Link from 'next/link';
import SignOut from './SignOut';
import useStore from '@/store/store';

interface Params {
  params: {
    id: any;
    uid: any;
  },isDarkTheme:boolean
}


const Menu: FC<Params> = ({ params, isDarkTheme }) => {
  const [wishlists, setWishlists] = useState<WishListData[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [isHide, setIsHide] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(true);
  const uid = user?.uid;
  const toggleCreateWishlist = useStore((state) => state.toggleCreateWishlist);



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
    const fetchWishlists = async () => {
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

    fetchWishlists();
  }, [uid]);

  return (
    <div className={`w-1/5   lg:flex hidden justify-center  rounded-s-lg   ${isDarkTheme ? 'bg-darkness-theme border-yellow-200' : 'bg-white text-black'}  `}>
    

      <div className={`w-full  h-full ${isDarkTheme ? '   border-yellow-00' : ' text-black'}    rounded-s-lg flex flex-col justify-between  p-5 pb-0  `}>
        <div className='w-full h-auto '>
          <Link href={`/home/${params.uid}`}>
        <div className={`w-full h-9  rounded flex items-center  ml-1 mr-0  ${isDarkTheme ? 'hover:bg-green-300  hover:text-black ' : 'hover:bg-slate-100 '}`}>
          <div className={`w-6 h-6 rounded flex items-center justify-center ${isDarkTheme ? 'bg-green-300 text-black ' : ' '}`}>
            <img className={`${isDarkTheme ? 'w-3 h-3 ' : ' w-5 h-5 '}`} src='https://static.thenounproject.com/png/423483-200.png' alt='' />
          </div>
          <p className='text-sm font-medium pl-1'>Home</p>
        </div>
        </Link>

          <div className={`w-full h-9 rounded flex items-center justify-between mt-1  pr-4  ${isDarkTheme ? 'hover:bg-green-300  hover:text-black ' : 'hover:bg-slate-100 '}`}>
            <div className='w-auto h-auto  flex items-center pl-1'>
                <div className={`w-6 h-6  rounded flex items-center justify-center ${isDarkTheme ? 'bg-green-300 text-black ' : ' '}`}>
                  <p >               <img className={`${isDarkTheme ? 'w-3 h-3 ' : ' w-5 h-5 '}`} src='https://cdn-icons-png.freepik.com/512/4305/4305337.png' alt='' /></p>

                </div>
              <p className='text-sm font-medium pl-1'>My wishlists</p>
            </div>
            <button onClick={()=> setIsHide(!isHide)} className={`w-6 h-6  rounded ${isDarkTheme ? 'hover:bg-green-300 ' : 'hover:bg-slate-100 '} `}>
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

            <img className="w-8 h-8 animate-spin" src="https://cdn-icons-png.flaticon.com/512/6175/6175867.png"alt="" />
          </div>
        ) : wishlists.length > 0 ? (
          wishlists.map((wishlist: WishListData) => (

              <WishListCard key={wishlist._id} id={wishlist._id} title={wishlist.title} isDarkTheme={isDarkTheme} params={params} />
      
          ))
        ) : (
          <p className='text-sm font-medium pl-2'>No created wishlists </p>
        )}
      </div>

      )
     }
     

        <div onClick={toggleCreateWishlist} className={`w-full h-9   rounded flex items-center  ml-0 mr-0 mt-2  pl-1 ${isDarkTheme ? 'hover:bg-green-300  hover:text-black ' : 'hover:bg-slate-100 '} `}>
          <div className={`w-6 h-6  rounded flex items-center justify-center ${isDarkTheme ? 'bg-green-300 text-black ' : 'bg-slate-100 '}`}>
            <p className='text-mini'>+</p>
          </div>
          <p className='text-sm font-medium pl-1'>New wishlist</p>
        </div>

        </div>
        <SignOut />
      </div>
   
    </div>
  );
};

export default Menu;
