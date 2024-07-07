'use client'
import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos'
import "aos/dist/aos.css";
import Link from 'next/link';


const Header = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className='w-full h-14  flex items-center justify-between sm:p-0 sm:pt-0 p-4 pt-7 '>
      <div data-aos="fade-left"  data-aos-delay="20"  className='w-auto h-auto flex  items-center'>
        <div className='w-8 h-8 bg-yellow-200 rounded flex items-center justify-center'>
          <img className='w-4 h-4' src="https://cdn-icons-png.freepik.com/512/868/868517.png" alt="" />
        </div>
        <h2 className='text-xl text-black font-medium pl-2' >Wishlist</h2>
   
      </div>
      <Link href={`/registration`}>
        <button className='w-16 h-8 text-black  bg-yellow-200 rounded-md sm:hidden flex items-center  justify-center  mt-1 mr-1'>
          <p className='text-mini font-medium'>Let's go</p>
        </button>
        </Link>
      
    
      
    </div>
  )
}

export default Header