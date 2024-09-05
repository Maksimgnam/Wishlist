import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useStore from '@/store/store';

interface WishListCardData{
    title:string,
    id:string,
    isDarkTheme: boolean,
    params:{
      id:any, uid:any
    },
}

const WishListCard:FC<WishListCardData> = ({title, isDarkTheme, id, params}) => {
  const router = useRouter()
  const closeMenuBar = useStore((state) => state.closeMenuBar);
  const deleteWishlist = async (id:string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/delete-wishlist/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
       
      });
      router.push(`/home/${params.id}`)
      window.location.reload()


    
    
    } catch (error) {
      console.log('Error sending email', error);
    }
  };
  return (
    <div  className={`w-full h-9 hover:bg-green-300 rounded flex items-center justify-between   pl-1 pr-5  ${isDarkTheme ? 'hover:bg-green-300  hover:text-black ' : 'hover:bg-slate-100 '}`}>
     
     <Link onClick={closeMenuBar}  className='w-full' key={id} href={`/home/${params.uid}/wishes/${id}`}>
        <li className='text-sm  pl-1 '>{title}</li>
        </Link>
        <button onClick={()=> deleteWishlist(id)} className='w-4 h-4 bg-red-400 cursor-pointer rounded-sm flex items-center justify-center '>
          <Image src="/delete.png" width={8} height={8} alt=''/>
       </button>

    </div>
  )
}

export default WishListCard