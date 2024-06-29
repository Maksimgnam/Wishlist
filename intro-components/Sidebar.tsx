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

   
    <div data-aos="fade-right"  data-aos-delay="50"   className='w-sidebar min-h-screen  bg-yellow-100 flex flex-col justify-between p-8 pt-7  '>
        <div className='w'>
        
        <h2 className='text-3xl font-medium'>How it works <span className='text-4xl'>👌🏻</span></h2>

        <p className='text-md pt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quibusdam eveniet numquam, aspernatur recusandae eius harum ullam velit laudantium assumenda.</p>


        </div>
        <>
        <Link href={`/registration`}>
        <button className='w-full h-12 font-medium bg-yellow-200 rounded-md'>Let's go   <span className='text-lg font-medium pl-2'>&rarr;</span></button>
        </Link>
        </>
    </div>


  )
}

export default SideBar