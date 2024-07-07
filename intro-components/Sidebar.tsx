'use client'
import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos'
import "aos/dist/aos.css";
import Link from 'next/link';


const SideBar = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (

   
    <div data-aos="fade-right"  data-aos-delay="50"   className='w-sidebar min-h-screen  bg-yellow-100 lg:flex hidden flex-col justify-between lg:p-7 p-3 pt-7  '>
        <div className='w-full'>
        <div className='w-full  h-auto flex items-center'>
        <h2 className='xl:text-3xl text-xl text-black font-medium relative '>How it works </h2>
        <span className='xl:text-4xl text-3xl pl-2  relative xl:bottom-0  bottom-1' >👌🏻</span>
        </div>


        <p className='xl:text-md text-sm text-black pt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quibusdam eveniet numquam, aspernatur recusandae eius harum ullam velit laudantium assumenda.</p>


        </div>
        <>
        <Link href={`/registration`}>
        <button className='w-full h-12 text-black font-medium bg-yellow-200 rounded-md'>Let's go   <span className='text-lg font-medium pl-2'>&rarr;</span></button>
        </Link>
        </>
    </div>


  )
}

export default SideBar