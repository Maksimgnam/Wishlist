import React, { FC } from 'react';
import Image from 'next/image';
interface ViewNoteData{
  description: string | undefined
}

const ViewNote:FC<ViewNoteData> = ({description}) => {
  return (
    <div className='w-auto h-auto  flex justify-end   fixed top-16 right-0 sm:pr-16 pr-10'>
        <div className='w-auto  h-auto flex flex-col  '>
        <div className='w-48 h-auto flex justify-end pr-2 relative top-3 '>
            <div className='w-5 h-5 bg-white rounded-full '></div>
        </div>
        <div className='w-48 h-auto max-h-full text-black bg-white rounded-md  shadow-2xl p-3'>
          <div className='w-auto h-auto flex items-center'>
          <div className='w-6 h-6 bg-green-200 rounded flex  items-center justify-center '>
              <Image src='/note.png' width={16} height={16} alt='' className=''/>
              </div>
              <h2 className='text-green-400 pl-2'>Note</h2>
          </div>
          <div className='w-full  h-auto p-2 pl-0'>

          <p className='text-sm  '>{description}</p>
          </div>

        </div>
        </div>
    </div>
  )
}

export default ViewNote