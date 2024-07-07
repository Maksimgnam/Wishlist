import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import About from './About'
import Motos from './Motos'
import Footer from './Footer'

const Main = () => {
  return (
    <div className='w-full h-svh'>
    <div className='w-full h-svh flex '>
        <Sidebar/>
       <div className='lg:w-4/5 w-full h-svh sm:p-5 sm:pl-7 sm:pr-7 '>
          <Header/>
          <div className='w-full  h-auto overflow-y-scroll p-3 '>
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