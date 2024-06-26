'use client'
import React, { FC, useState } from 'react';
import { Params, Wish } from '@/interfaces';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const CreateWish:FC<Params> = ({params}) => {
    const router = useRouter()
    const randomId = Math.floor(Math.random() * 10000000)
    const [wishData, setWishData] = useState<Wish>({
        title: '',
        createdAt: new Date(),
        isBooked: false,
        wishId:`${randomId}`
    });

    const addWish = async (event: React.FormEvent)=>{
        if(wishData.title.trim() === ''){
            alert("Please, type jar's title")
       
    }else{
        event.preventDefault();

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/add-wish/${params.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(wishData),
            });
  
            const result = await response.json();
            console.log(result);
            
            setWishData({
                title: '',
                createdAt: new Date(),
                isBooked: false,
                wishId:`${randomId}`
            });
            router.push(`/home/${params.uid}/wishes/${params.id}`)
         
  
  
        } catch (error) {
            console.error('Error submitting data:', error);
        }
       
    }

    }
    const inputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setWishData({
            ...wishData,
            [name]: value,
        })
      }

  return (
    <div className='w-auto h-auto flex flex-col relative  bottom-14'>
    <div className='w-72 h-auto flex justify-end m-5  '>
        <Link href={`/home/${params.uid}/wishes/${params.id}`}>
            <button className='w-6 h-6 bg-black rounded-full text-center text-white text-sm font-medium '>x</button>
        </Link>

    </div>
    <div className='w-72 h-72  border shadow-2xl  rounded-xl flex flex-col items-center justify-between p-3'>
        <div className='w-full h-10 flex items-center'>
            <div className='w-7 h-7 bg-yellow rounded flex items-center justify-center'>
                <p className='text-sm  text-white'>W</p>
            </div>
            <h2 className='text-md pl-2 '>New wish </h2>
        </div>
        <textarea  value={wishData.title} onChange={inputChange} name='title' placeholder='Write your wish'  className='w-full h-32 bg-transparent border rounded outline-none  resize-none p-2 ' />
        <button onClick={addWish} className='w-full  h-10 bg-yellow rounded-md mt-3'>
            <p className='text-md font-medium text-white'>Add Wish</p>
        </button>
    </div>
    </div>
  )
}

export default CreateWish