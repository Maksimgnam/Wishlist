'use client'
import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos'
import "aos/dist/aos.css";


const Header = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className='w-full h-14 flex items-center '>
      <div data-aos="fade-left"  data-aos-delay="20"  className='w-auto h-auto flex  items-center'>
        <div className='w-8 h-8 bg-yellow-200 rounded flex items-center justify-center'>
          <img className='w-4 h-4' src="https://cdn-icons-png.freepik.com/512/868/868517.png" alt="" />
        </div>
        <h2 className='text-xl text-black font-medium pl-2' >Wishlist</h2>
   
      </div>
      
    
      
    </div>
  )
}

export default Header