"use client"
import React, { FC, useState, useEffect } from 'react'
import { Params, viewWishListData } from '@/interfaces';
import ViewWishCard from './ViewWishCard';

const View:FC<Params> = ({params}) => {
    const [viewWishes, setViewWishes] = useState<viewWishListData | null>(null)
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(()=>{
        const fetchViewWishes = async ()=>{
          setLoading(true);
          try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/wishes/${params.id}`);
            const data =  await response.json();
            setViewWishes(data)
    
          }catch(error){
            console.log(error)
          } finally {
            setLoading(false);
          }
          
        }
      
    
        fetchViewWishes()
    
      }, [])
  return (
    <div className='w-full  min-h-screen p-20 pt-16'>
      {
        loading ? (
          <div className='w-full min-h-screen flex items-center justify-center'>
            <img className="w-60 h-60 animate-spin mb-20" src="https://cdn-icons-png.flaticon.com/512/6175/6175867.png"alt="" />
          </div>

        ):(
          <>
   
        <div className='w-full h-auto flex justify-center'>
            <h2 className='text-3xl font-medium mb-3'>{viewWishes?.title}</h2>
        </div>

          {
        viewWishes?.wishes?.map((view)=>(
  <ViewWishCard key={view._id} view={view}/>

        ))
      }
         </>
          
        )
      }
      

    </div>
  )
}

export default View