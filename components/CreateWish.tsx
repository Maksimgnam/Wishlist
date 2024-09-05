'use client'
import React, { FC, useState } from 'react';
import { Params, Wish } from '@/interfaces';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const CreateWish:FC<Params> = ({params}) => {
    const router = useRouter()
    const randomId = Math.floor(Math.random() * 10000000)
    const [rangeValue, setRangeValue] = useState(0);
  
    const [wishData, setWishData] = useState<Wish>({
        title: '',
        createdAt: new Date(),
        isBooked: false,
        grade:'',
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
                wishId:`${randomId}`,
                grade: '',
            });
            router.push(`/home/${params.uid}/wishes/${params.id}`)
         
  
  
        } catch (error) {
            console.error('Error submitting data:', error);
        }
       
    }

    }
    const inputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>) => {
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
    <div className='w-72 h-64  border shadow-2xl  rounded-xl flex flex-col items-center justify-between p-3 sm:m-0 ml-4'>
        <div className='w-full h-10 flex items-center'>
            <div className='w-7 h-7 bg-green-400 rounded flex items-center justify-center'>
                <p className='text-sm  text-white'>W</p>
            </div>
            <h2 className='text-md pl-2 '>New wish </h2>
        </div>
        
       

        <input  value={wishData.title} onChange={inputChange} name='title' placeholder='Write your wish'  className='w-full h-11 bg-transparent border rounded outline-none  resize-none p-2 ' />
        <div className='w-full h-auto flex items-center justify-between'>
        <div className='w-auto h-auto flex items-center '>


        </div>




                    <select className='w-full bg-transparent  h-11 outline-none border rounded p-1' name="grade" id="grade"  value={wishData.grade} onChange={inputChange}>
                        <option value="">Gift grade</option>
                        <option value="ok">Ok</option>
                        <option value="well">Well</option>
                        <option value="good">Good</option>
                        <option value="hot">Hot</option>
                        <option value="excited">Excited</option>
                    </select>

                </div>
        <button onClick={addWish} className='w-full  h-10 bg-green-400 rounded-md mt-3'>
            <p className='text-md font-medium text-white'>Add Wish</p>
        </button>


  
    </div>
    </div>
  )
}

export default CreateWish