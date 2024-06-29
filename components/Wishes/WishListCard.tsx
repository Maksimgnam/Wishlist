import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
  const deleteWishlist = async (id:string) => {
    try {
      const response = await fetch(`http://localhost:8000/api/delete-wishlist/${id}`, {
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
    <div className={`w-full h-9 hover:bg-slate-50 rounded flex items-center justify-between   pl-1 pr-4  ${isDarkTheme ? 'hover:bg-yellow-200  hover:text-black ' : 'hover:bg-slate-100 '}`}>
     
     <Link className='w-full' key={id} href={`/home/${params.uid}/wishes/${id}`}>
        <li className='text-sm  pl-1 '>{title}</li>
        </Link>
        <button onClick={()=> deleteWishlist(id)} className='w-4 h-4 bg-red-400 rounded-sm flex items-center justify-center '>
          <Image src="/delete.png" width={8} height={8} alt=''/>
       </button>

    </div>
  )
}

export default WishListCard