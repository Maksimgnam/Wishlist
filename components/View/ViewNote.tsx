import React from 'react'

const ViewNote = () => {
  return (
    <div className='w-auto h-auto  flex justify-end   fixed top-16 right-0 sm:pr-16 pr-10'>
        <div className='w-auto  h-auto flex flex-col  '>
        <div className='w-52 h-auto flex justify-end pr-2 relative top-3 '>
            <div className='w-5 h-5 bg-white rounded-full '></div>
        </div>
        <div className='w-52 h-auto max-h-full text-black bg-white rounded-md  shadow-2xl p-3'>
            <p className='text-sm'>Lorem, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti excepturi voluptatibus architecto autem tempora vel velit sed ea est at. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti excepturi voluptatibus architecto autem tempora vel velit sed ea est at. ipsum dolor sit amet consectetur adipisicing elit. Corrupti excepturi voluptatibus architecto autem tempora vel velit sed ea est at.</p>
        </div>
        </div>
    </div>
  )
}

export default ViewNote