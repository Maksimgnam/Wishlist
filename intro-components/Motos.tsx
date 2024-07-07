'use client'
import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos'
import "aos/dist/aos.css";

const Motos = () => {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 600,
          easing: "ease-out-cubic",
        });
      }, []);
  return (
    <div className='w-full h-auto mt-5 '>
    <div data-aos="fade-left"  data-aos-delay="600"  className='w-auto flex items-center'>
 
        <p className='text-lg font-medium pl-2'>Our Motos </p>
        <span className='text-2xl  pl-2 '>✌️</span>
     
    </div>
    <div className='w-full h-auto flex  flex-wrap p-3  animation-fadeIn'>
        <div data-aos="fade-up"  data-aos-delay="650"  className='w-56 sm:h-28 hover:shadow-l text-blackg rounded border p-3 pr-0 m-3 mt-1 ml-2  '>
            <div className='w-full h-auto flex  items-center'>
                <div className='w-7 h-7 bg-yellow-200 rounded flex items-center justify-center'>✌️</div>
                <p className=' font-mono text-black pl-2'>#1</p>
            </div>
            <p className='text-md text-black pt-2'>Where Dreams Become Reality</p>
        </div>
        <div data-aos="fade-up"  data-aos-delay="750" className='w-56 h-28 hover:shadow-l text-blackg rounded border p-3 pr-0 m-3 mt-1 ml-2 '>
            <div className='w-full h-auto flex  items-center'>
                <div className='w-7 h-7 bg-yellow-200 rounded flex items-center justify-center'>✌️</div>
                <p className=' font-mono text-black pl-2'>#2</p>
            </div>
            <p className='text-md text-black pt-2'>Wishes Come True Here</p>
        </div>
        <div data-aos="fade-up"  data-aos-delay="850" className='w-56 h-28 hover:shadow-l text-blackg rounded border p-3 pr-0 m-3 mt-1 ml-2 '>
            <div className='w-full h-auto flex  items-center'>
                <div className='w-7 h-7 bg-yellow-200 rounded flex items-center justify-center'>✌️</div>
                <p className=' font-mono text-black pl-2'>#3</p>
            </div>
            <p className='text-md text-black pt-2'>Turning Dreams into Possibilities</p>
        </div>

       
        <div data-aos="fade-up"  data-aos-delay="950" className='w-56 h-28 hover:shadow-l text-blackg rounded border p-3 pr-0 m-3 mt-1 ml-2 '>
            <div className='w-full h-auto flex  items-center'>
                <div className='w-7 h-7 bg-yellow-200 rounded flex items-center justify-center'>✌️</div>
                <p className=' font-mono text-black pl-2'>#4</p>
            </div>
            <p className='text-md text-black pt-2'>From Wishes to Wonders</p>
        </div>
        
    </div>

        
</div>
  )
}

export default Motos