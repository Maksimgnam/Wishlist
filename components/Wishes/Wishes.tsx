"use client"
import React, { FC, useState, useEffect } from 'react'
import WishHeader from './WishHeader'
import WishContainer from './WishContainer';
import { WishData, WishListData } from '@/interfaces';
import { Params } from '@/interfaces';

const Wishes:FC<Params> =  ({params}) => {
  const [wishes, setWishes] = useState<WishListData | null>(null);
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(()=>{
    const fetchWishes = async ()=>{
      setLoading(true);
      try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/wishes/${params.id}`);
        const data =  await response.json();
        setWishes(data)

      }catch(error){
        console.log(error)
      } finally {
        setLoading(false);
      }
    }
  

    fetchWishes()

  }, [])



  return (
    <div className='w-full  h-full p-8 '>
      {loading ? (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <img className="w-60 h-60 animate-spin mb-32" src="https://cdn-icons-png.flaticon.com/512/6175/6175867.png"alt="" />
        </div>

      ):(
        <>
      

        <WishHeader params={params} wishes={wishes} setIsFilter={setIsFilter}/>
        
       <WishContainer params={params}  wishes={wishes} isFilter={isFilter} setIsFilter={setIsFilter}/>
       </>

      )}
     
    </div>
  )
}

export default Wishes