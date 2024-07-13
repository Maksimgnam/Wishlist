"use client"
import React, { FC, useState, useEffect } from 'react'
import { Params, viewWishListData } from '@/interfaces';
import ViewWishCard from './ViewWishCard';
import { ViewParams } from '@/interfaces';
import Image from 'next/image';
import ViewNote from './ViewNote';
import useStore from '@/store/store';

const View:FC<ViewParams> = ({params}) => {
    const [viewWishes, setViewWishes] = useState<viewWishListData | null>(null)
    const [loading, setLoading] = useState<boolean>(true);
    const [password, setPassword] = useState('');
    const [isAccess, setIsAccess] = useState<boolean>(false)
    const isViewNote = useStore((state) => state.isViewNote);
    const toggleViewNote = useStore((state) => state.toggleViewNote);
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
      const checkPassword = () => {
        if (viewWishes?.password === password) {
          setIsAccess(true);
        } else {
          alert('Incorrect password. Please try again.');
        }
      };
      const  passwordChange =() => {
        const x = document.getElementById("myInput") as HTMLInputElement | null;
        if (x?.type === "password") {
          x.type = "text";
        } else if(x) {
          x.type = "password";
        }
      }

   
      
  return (
    <>
    {
      viewWishes?.private === true  && !isAccess ?(
        <div className='w-full h-svh    text-black flex items-center justify-center'>
          <div className='w-64 h-44 bg-white rounded border flex flex-col items-center justify-between p-4'>
            <div className='w-auto h-auto flex items-center'>

            <Image src='/private.png' width={24} height={24} alt='' className=' relative right-1'/>
            <h2 className='text-lg font-medium pt-1'>Password</h2>

            </div>

          <div className='w-full h-auto flex items-center'>
            <input type="password" id="myInput" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder={`${viewWishes.title}'s password`} className='w-10/12 h-10 border  text-black rounded outline-none pl-2' />
            <button onClick={passwordChange} className='w-9 h-10 bg-yellow-200 rounded flex items-center justify-center relative right-2 '>
              <img className='w-4 h-4' src="https://cdn-icons-png.freepik.com/256/167/167025.png?semt=ais_hybrid" alt="" />
            </button>
           </div>
            <button onClick={checkPassword} className='w-full h-10 bg-yellow-300 rounded text-md font-medium flex items-center justify-center '>{`Let's go`}</button>
          </div>
        </div>
      ):(
        <div className='w-full   h-svh sm:p-12 p-7 sm:pt-10 pt-7 '>
        {
          loading ? (
            <div className='w-full min-h-screen flex items-center justify-center'>
              <img className="w-60 h-60 animate-spin mb-20" src="https://cdn-icons-png.flaticon.com/512/6175/6175867.png"alt="" />
            </div>
  
          ):(
            <>

          <div className='w-full h-auto flex items-center justify-between pr-3  '>
            <div className='w-auto h-auto flex items-center'>
              <p className='text-3xl'>🎁</p>
              <h2 className='sm:text-2xl text-lg text-red-500 font-medium  mb-1 pl-2'>{viewWishes?.title}<span className='text-black'>{`'s wishes`}</span></h2>
            </div>
            <button onClick={toggleViewNote} className='w-16 h-7 bg-yellow-200 rounded flex items-center justify-center'>
                <Image src='/note.png' width={19} height={19} alt='' className=' relative right-1'/>
                <p className='text-mini text-black'>Note</p>
              </button>


          </div>
          
          <div className='w-full h-wish-container  mt-7  '>
          {
          viewWishes?.wishes?.map((view)=>(
    <ViewWishCard key={view.wishId}  view={view} params={params}/>
  
          ))
        }
          </div>

          {
            isViewNote &&     <ViewNote/>
          }
    
       

        
           </>
            
          )
        }
        
  
      </div>
      )
    }


    </>
  )
}

export default View