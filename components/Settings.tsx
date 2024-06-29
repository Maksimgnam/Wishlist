import Image from 'next/image';
import React, { FC, useState } from 'react';

interface SettingsData{
  isSettingsChange:()=> void
}

const Settings:FC<SettingsData> = ({isSettingsChange}) => {
  const [selected, setSelected] = useState("Appearance")
  return (
    <div className='w-full h-svh bg-dark flex items-center justify-center  absolute top-0'>
        <div className='w-3/5 h-4/6 bg-white border-2 rounded-lg shadow-2xl flex  '>
            <div className='w-64  h-full bg-slate-50  p-4 '>
                <h2 className='text-xl '>Settings</h2>
                <div className='w-full h-auto'>
                  <div className='w-full h-8 hover:bg-slate-100  rounded flex items-center pl-1  m-2 ml-0 mr-0 mt-1 mb-0'>
                    <Image src='/appearance.png' width={20} height={20} alt=''/>
                    <p  className='text-sm pl-2'>Apearence</p>
                  
                  </div>
                  <div className='w-full h-8 hover:bg-slate-100  rounded flex items-center pl-1  m-2 ml-0 mr-0 mt-1 mb-0'>
                    <Image src='/settings.png' width={17} height={17} alt=''/>
                    <p  className='text-sm pl-2'>Settings</p>
                  
                  </div>
                </div>
            </div>
            <div className='w-4/5 h-full '>
              <div className='w-full h-11  flex items-end justify-between  pl-6 pr-6  '>
                <h2 className='text-lg'>{selected}</h2>
                <p className='text-lg pb-1 ' onClick={isSettingsChange}>x</p>
              </div>
              <div className='w-full h-auto p-8 pt-2'>
                <div className='w-40 h-12 rounded border'></div>
              </div>
              <div className='w-full h-auto'></div>
            </div>
        </div>
    </div>
  )
}

export default Settings