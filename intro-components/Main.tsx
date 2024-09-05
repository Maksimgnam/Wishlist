'use client'
import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import About from './About'
import Motos from './Motos'
import Footer from './Footer'
import { useRouter } from 'next/navigation'

const Main = () => {
  const router = useRouter();


  useEffect(()=>{
    router.push('/registration')
  }, [])
  return (
    <div className='w-full h-svh'>
    <div className='w-full h-svh flex  '>
        <Sidebar/>
       <div className='lg:w-4/5 w-full h-svh  '>

          <div className='w-full  h-svh overflow-y-scroll  overflow-x-hidden'>
            {/* <div className='w-full h-auto'>
              <div className='w-64 h-44 bg-white rounded-xl  border'></div>
            </div> */}
            <About/>
            <Motos/>
          
           
                      </div>
        </div>
      
       
    </div>
    </div>
  )
}

export default Main