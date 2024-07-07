'use client'
import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos'
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 600,
          easing: "ease-out-cubic",
        });
      }, []);
  return (
    <div className='w-full h-auto '>
        <div className='w-full h-auto '>
            <div data-aos="fade-left"   data-aos-delay="50" className='w-auto flex items-center'>
         
                <p className='text-lg text-black font-medium pl-2'>About us </p>
                <span className='text-2xl  pl-2 '>😊</span>
             
            </div>
            <div data-aos="fade-left"   data-aos-delay="150"  className='w-full h-auto mt-3 '>

            <div className='w-11/12 h-8  flex items-center pl-3'>
                <p className='text-xl'>🏰</p>
                <p className='text-sm  text-black font-medium pl-2 pt-1'>History   </p>
            </div>

            <div className='sm:w-11/12 w-full  h-auto p-3 pt-1 pl-5 pr-8 '>
                    <p className='text-md text-black '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ex magnam iste odit eligendi, sunt voluptatem quisquam porro pariatur impedit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ex magnam iste odit eligendi, sunt voluptatem quisquam porro pariatur impedit  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ex magnam iste odit eligendi, sunt voluptatem quisquam porro pariatur impedit?? </p>
            </div>
            </div>
            <div data-aos="fade-left"   data-aos-delay="300"  className='w-full h-auto mt-1 '>

<div className='w-11/12 h-auto  flex items-center pl-3'>
<p className='text-2xl text-black'> 🎯</p>
<p className='text-sm text-black font-medium pl-2 pt-1'>Our aim</p>
</div>

<div className='w-11/12 h-auto p-3 pt-1 pl-5 pr-8 '>
<p className='text-md text-black '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ex magnam iste odit eligendi, sunt voluptatem quisquam porro pariatur impedit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ex magnam iste odit eligendi, sunt voluptatem quisquam porro pariatur impedit  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ex magnam iste odit eligendi, sunt voluptatem quisquam porro pariatur impedit?? </p>
</div>
            </div>
            <div data-aos="fade-left"   data-aos-delay="600" className='w-full h-auto mt-1 '>

<div className='w-11/12 h-auto  flex items-center pl-3'>
<p className='text-xl'>💪</p>
<p className='text-sm text-black font-medium pl-2 pt-1'>What's about future ?</p>
</div>

<div className='w-11/12 h-auto p-3 pt-1 pl-5 pr-8 '>
<p className='text-md text-black '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ex magnam iste odit eligendi, sunt voluptatem quisquam porro pariatur impedit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ex magnam iste odit eligendi, sunt voluptatem quisquam porro pariatur impedit  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ex magnam iste odit eligendi, sunt voluptatem quisquam porro pariatur impedit?? </p>
</div>

            </div>
        </div>
   
          



       
    </div>
  )
}

export default About