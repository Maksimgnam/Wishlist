
'use client'
import React, { FC, useState } from 'react';
import { WishList } from '@/interfaces';
import { Params } from '@/interfaces';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const CreateWishList:FC<Params> = ({params}) => {
    const router = useRouter()
    const [wishListData, setWishListData] = useState<WishList>({
        title: '',
        description:'',
        createdAt: new Date(),
        userId: `${params.uid}`

    });

    const addWishList = async (event: React.FormEvent)=>{
        if(wishListData.title.trim() === ''){
            alert("Please, type wishlist's title")
       
    }else{
        event.preventDefault();

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/add-wishlist`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(wishListData),
            });
  
            const result = await response.json();
            console.log(result);

  
            setWishListData({
                title: '',
                description:'',
                userId: `${params.uid}`,
                createdAt: new Date(),
            });
            router.push(`/home/${params.uid}`)
  
  
        } catch (error) {
            console.error('Error submitting data:', error);
        }
       
    }

    }
    const inputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setWishListData({
            ...wishListData,
            [name]: value,
        })
      }

  return (
    <div className='w-auto h-auto  flex flex-col relative  bottom-14'>
    <div className='w-80 h-auto flex justify-end m-5  '>
        <Link href={`/home/${params.uid}`}>
            <button className='w-6 h-6 bg-black rounded-full text-center text-white text-sm font-medium '>x</button>
        </Link>

    </div>
   
    <div className='w-80 h-80    border shadow-2xl rounded-xl flex flex-col items-center justify-between p-3'>
        <div className='w-full h-10 flex items-center'>
            <div className='w-7 h-7 bg-yellow rounded flex items-center justify-center'>
                <p className='text-sm  text-white'>W</p>
            </div>
            <h2 className='text-md pl-2 '>New Wish List</h2>
        </div>
        <input value={wishListData.title} onChange={inputChange} name='title' id='title' placeholder='Write your title'  className='w-full h-10  border  rounded outline-none  resize-none p-2 ' />
        <textarea  value={wishListData.description} onChange={inputChange} name='description' placeholder='Write your description'  className='w-full h-28 rounded  outline-none border resize-none p-2 ' />
        <button onClick={addWishList} className='w-full  h-10 bg-yellow rounded-md mt-3'>
            <p className='text-md font-medium text-white'>Add WishList</p>
        </button>
    </div>
    </div>
  )
}

export default CreateWishList;