import React, { FC, useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { WishListData } from '@/interfaces';
import ClipboardJS from 'clipboard';
import { redirect, useRouter } from 'next/navigation';
import Image from 'next/image';
interface WishHeaderData{
  params:{
    id:any,
    uid:any
  },
  wishes:WishListData | null,
  setIsFilter: React.Dispatch<React.SetStateAction<boolean>>;

}

const WishHeader:FC<WishHeaderData> = ({params, wishes, setIsFilter}) => {
  const router = useRouter()
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
  const deleteWishlist = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/delete-wishlist/${params.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
       
      });
      router.push(`/home/${params.id}`)


    
    
    } catch (error) {
      console.log('Error sending email', error);
    }
  };
  

 

  return (
    <div className='w-full h-auto  z-50 '>
      <div className='w-full h-auto flex items-center justify-between'>
      <h2 className='text-xl font-medium'>{wishes?.title}</h2>
      {/* <Link href={`/view/${params.id}`}>
      </Link> */}
      <div className='w-16 h-6 flex items-center justify-between'>
   
<button onClick={deleteWishlist} className='w-6 h-6 bg-red-400 rounded flex items-center justify-center '>
  <Image src="/delete.png" width={12 } height={12} alt=''/>
</button>
   
      <button  ref={buttonRef} onClick={()=> setIsHide(!isHide)} className='w-6 h-6  rounded bg-yellow flex items-center justify-center mr-2'>
        <img className='w-3 h-3' src="https://static-00.iconduck.com/assets.00/share-icon-256x238-1v6dh0eg.png" alt="" />
      </button>
   
 
      </div>
      </div>
      <div className='w-full h-auto flex justify-end'>
     

    {
      isHide && (
        <div className='w-48 h-9  shadow-md rounded-md flex items-center justify-between mr-9 p-2   mt-1 '>
          <p className='text-sm'>{link.slice(0, 19)}...</p>
          <button ref={buttonRef} onClick={()=> setIsHide(false)} className='w-6 h-6 text-white bg-yellow rounded flex items-center justify-center '>
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