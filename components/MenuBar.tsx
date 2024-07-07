'use client'
import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import { User } from '@/interfaces'
import {auth} from '../firebase/config'
import { WishList } from '@/interfaces'
import { WishListData } from '@/interfaces'
import WishListCard from './Wishes/WishListCard'
import useStore from '@/store/store'
import Link from 'next/link'
interface MenuBarData{
    isDarkTheme:boolean,
    params: {
      id: any;
      uid: any;
    };
}

const MenuBar:FC<MenuBarData> = ({isDarkTheme, params}) => {
    const [user, setUser] = useState<User | null>(null);
    const [wishlists, setWishlists] = useState<WishListData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const toggleMenuBar = useStore((state) => state.toggleMenuBar);
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
    <div className='w-full h-svh bg-dark flex justify-end absolute top-0'>
        <div className={`w-10/12 h-full p-4 ${isDarkTheme ? 'bg-darkness-theme text-white  border-none' : 'bg-white text-black'}  `}>
            <div className='w-full h-auto flex items-center justify-between '>
                <div className='w-auto h-auto  rounded flex items-center p-1'>
      {
         user &&     <>
                 <div className='w-8 h-8 bg-yellow rounded flex items-center justify-center'>
            <p className='text-md text-black  font-medium '>{user?.displayName.slice(0, 1)}</p>
        </div>
        <p className='text-lg font-medium  pl-2 '>{user?.displayName}</p>


        </>
      }
  
                </div>
                <button onClick={toggleMenuBar} className='text-2xl  mr-6'>x</button>
            </div>
            <div className='w-full h-auto mt-2'>
              <Link href={`/home/${params.uid}`}>
            <div onClick={toggleMenuBar}  className='w-full h-auto  pl-1'>
            <div className={`w-full h-12  rounded flex items-center  ml-1 mr-0  ${isDarkTheme ? 'hover:bg-yellow-200  hover:text-black ' : 'hover:bg-slate-100 '}`}>
          <div className={`w-8 h-8 rounded flex items-center justify-center ${isDarkTheme ? 'bg-yellow-200 text-black ' : ' bg-slate-100'}`}>
            <img className={`${isDarkTheme ? 'w-4 h-4 ' : ' w-5 h-5 '}`} src='https://static.thenounproject.com/png/423483-200.png' alt='' />
          </div>
          <p className='text-md font-medium pl-1'>Home</p>
        </div>
            </div>
            </Link>
            <div className='w-full h-auto  pl-1'>
            <div className={`w-full h-12  rounded flex items-center  ml-1 mr-0  ${isDarkTheme ? '  ' : 'hover:bg-slate-100 '}`}>
                <div className={`w-8 h-8  rounded flex items-center justify-center ${isDarkTheme ? 'bg-yellow-200 ' : ' bg-slate-100'}`}>
                  <p><img className={`${isDarkTheme ? 'w-4 h-4 ' : ' w-5 h-5 '}`} src='https://cdn-icons-png.freepik.com/512/4305/4305337.png' alt='' /></p>
                </div>
              <p className='text-md  font-medium pl-1'>My wishlists</p>
            </div>
            {
              loading ? (
                <div className='w-full h-auto flex items-center justify-center'>

                <img className="w-8 h-8 animate-spin" src="https://cdn-icons-png.flaticon.com/512/6175/6175867.png"alt="" />
              </div>

              ):(

                <>
                { 
               
                wishlists.length > 0  ? (
                    wishlists.map((wishlist: WishListData) => (
    
                      <WishListCard key={wishlist._id} id={wishlist._id} title={wishlist.title} isDarkTheme={isDarkTheme} params={params} />
              
                  ))
                ):(
               
                  <p className='pl-1 m-2 ml-0 mr-0'>{`No created wishlist's`}</p>
            
                )
                }
          
                </>

              )
            }
          
            </div>
            <Link className='w-full' onClick={toggleMenuBar} href={`/home/${params.uid}/createWishlist`}>
        <div  className={`w-full h-9   rounded flex items-center  ml-0 mr-0 mt-2  pl-2 ${isDarkTheme ? 'hover:bg-yellow-200  hover:text-black ' : 'hover:bg-slate-100 '} `}>
          <div className={`w-7 h-7 rounded flex items-center justify-center ${isDarkTheme ? 'bg-yellow-200 text-black ' : 'bg-slate-100 '}`}>
            <p className='text-sm'>+</p>
          </div>
          <p className='text-md font-medium pl-1'>New wishlist</p>
        </div>
        </Link>
            </div>
        </div>
    </div>
  )
}

export default MenuBar