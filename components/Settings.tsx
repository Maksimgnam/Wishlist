import Image from 'next/image';
import React, { FC, useState } from 'react';

interface SettingsData{
  isSettingsChange:()=> void
}

const Settings:FC<SettingsData> = ({isSettingsChange}) => {
  const [selected, setSelected] = useState("Appearance")
  return (
    <div className='w-full h-svh bg-dark flex items-center justify-center  absolute top-0'>
        <div className='w-2/5 h-3/6 bg-white border-2 rounded-lg shadow-2xl flex  '>
        
            <div className='w-full h-full '>
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