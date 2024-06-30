import { WishData } from '@/interfaces'
import React, { FC } from 'react';
import Image from 'next/image';
interface WishCardData{
  wish:WishData,
  onDelete: (wishId: string) => void;
  params:{
    id:any, uid:any
  },
  
}
const WishCard:FC<WishCardData> = ({wish, onDelete, params}) => {
  const handleDelete = async (wishId:string) => {
    try {
      const response = await fetch(`http://localhost:8000/api/delete-wish/${params.id}/${wishId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      window.location.reload()
      console.log(response)
      
    } catch (error) {
      console.error('Error deleting wish:', error);
      alert('Error deleting wish');
    }
  };
  return (
    <div className='w-60 h-44 border rounded-md hover:shadow-lg flex flex-col items-center justify-between p-6 m-2  '>
      <p className='text-xl  text-center  break-words'>
    {wish.title}
 
      
</p>
      <div className='w-full h-auto flex items-center justify-between '>
      <button onClick={()=> handleDelete(wish.id)} className='w-5 h-5 bg-red-400 rounded flex items-center justify-center '>
          <Image src="/delete.png" width={10 } height={10} alt=''/>
      </button>
        {
          wish.isBooked  === true ?(
            <div className='w-16 h-6 bg-green-400 rounded  flex items-center justify-center'>
            <p className='text-sm text-white'>Booked</p>
          </div>

          ):(
            <div className='w-11 h-6 bg-gray-300 rounded  flex items-center justify-center'>
              <p className='text-sm text-white'>Free</p>
            </div>

          )
        }
   
      </div>
    </div>
  )
}

export default WishCard