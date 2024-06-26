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
       <div className='w-4/5 h-svh p-5 pl-7 plr-7 '>
          <Header/>
          <div className='w-full h-auto overflow-y-scroll p-3 '>
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