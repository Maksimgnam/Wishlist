import React, { FC, useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { WishListData } from '@/interfaces';
import ClipboardJS from 'clipboard';
interface WishHeaderData{
  params:{
    id:any,
    uid:any
  },
  wishes:WishListData | null,
  setIsFilter: React.Dispatch<React.SetStateAction<boolean>>;

}

const WishHeader:FC<WishHeaderData> = ({params, wishes, setIsFilter}) => {
  const [isHide, setIsHide] = useState<boolean>(false)
  const link = `${process.env.NEXT_PUBLIC_URL}/view/${params.id}`
  const buttonRef = useRef(null);
  useEffect(()=>{
    if (buttonRef.current) {
      const clipboard = new ClipboardJS(buttonRef.current, {
        text: () => link,
       
      }
    );
  
  
      return () => {
        clipboard.destroy(); 
      
      };
    }
  },[])
  

 

  return (
    <div className='w-full h-auto  z-50 '>
      <div className='w-full h-auto flex items-center justify-between'>
      <h2 className='text-3xl font-medium'>{wishes?.title}</h2>
      {/* <Link href={`/view/${params.id}`}>
      </Link> */}
      <div className='w-auto h-auto flex items-center'>
        <button  onClick={()=> setIsFilter(true)} className='w-6 h-6  rounded bg-red-200 flex items-center justify-center mr-2'>

          <img className='w-3 h-3'  src="https://cdn-icons-png.freepik.com/512/1836/1836109.png" alt="" />
        </button>

   
      <button  ref={buttonRef} onClick={()=> setIsHide(!isHide)} className='w-6 h-6  rounded bg-red-200 flex items-center justify-center mr-2'>
        <img className='w-3 h-3' src="https://static-00.iconduck.com/assets.00/share-icon-256x238-1v6dh0eg.png" alt="" />
      </button>
   
      <Link href={`/home/${params.uid}/wishes/${params.id}/createWish`}>
        <button className='w-7 h-7 text-white bg-button rounded'>+</button>
      </Link>
      </div>
      </div>
      <div className='w-full h-auto flex justify-end'>
     

    {
      isHide && (
        <div className='w-48 h-9 bg-white shadow-md rounded-md flex items-center justify-between mr-9 p-2   mt-1 '>
          <p className='text-sm'>{link.slice(0, 19)}...</p>
          <button ref={buttonRef} onClick={()=> setIsHide(false)} className='w-6 h-6 text-white bg-button rounded flex items-center justify-center '>
          <img className='w-3 h-3' src="https://cdn-icons-png.flaticon.com/512/1621/1621635.png" alt="" />
          </button>
        </div>

        )
    }
     
      </div>
     
      
    </div>
  )
}

export default WishHeader