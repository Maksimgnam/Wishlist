"use client"
import React, { FC, useState, useEffect } from 'react'
import { Params, viewWishListData } from '@/interfaces';
import ViewWishCard from './ViewWishCard';
import { ViewParams } from '@/interfaces';
import Image from 'next/image';
import ViewNote from './ViewNote';
import useStore from '@/store/store';
import Link from 'next/link';

const View:FC<ViewParams> = ({params}) => {
    const [viewWishes, setViewWishes] = useState<viewWishListData | null>(null)
    const [loading, setLoading] = useState<boolean>(true);
    const [password, setPassword] = useState('');
    const [isAccess, setIsAccess] = useState<boolean>(false);

    const [isSticker, setIsSticker] = useState<boolean>(false)
    const [isCard, setIsCard] = useState<boolean>(true)
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
            <button onClick={passwordChange} className='w-9 h-10 bg-green-300 rounded flex items-center justify-center relative right-2 '>
              <img className='w-4 h-4' src="https://cdn-icons-png.freepik.com/256/167/167025.png?semt=ais_hybrid" alt="" />
            </button>
           </div>
            <button onClick={checkPassword} className='w-full h-10 bg-green-400 rounded text-md font-medium flex items-center justify-center '>{`Let's go`}</button>
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
            <div className='w-auto h-auto flex items-center'>
            <div className='w-14 h-auto flex justify-between mr-2'>
              <button onClick={()=>{
                setIsSticker(true)
                setIsCard(false)
              }} className='w-6 h-6 bg-green-200 rounded text-black text-mini  flex items-center justify-center'>
                   <Image src='/cards.png' width={16} height={16} alt='' className=''/>
              </button>
              <button onClick={()=>{
                setIsSticker(false)
                setIsCard(true)
              }} className='w-6 h-6 bg-green-200 rounded  text-black text-mini flex items-center justify-center'>
                  <Image src='/stickers.webp' width={16} height={16} alt='' className=''/>
              </button>
            </div>
            <button onClick={toggleViewNote} className='w-20 h-8 bg-green-100  rounded-lg flex items-center pl-2  '>
              <div className='w-6 h-6 bg-green-200 rounded flex  items-center justify-center '>
              <Image src='/note.png' width={16} height={16} alt='' className=''/>
              </div>
           
                <p className='text-sm text-black pl-1'>Note</p>
              </button>

            </div>
           
       


          </div>
{
  isSticker &&  <div className='w-full h-wish-container  flex justify-center  '>
  <div className='sm:w-11/12 w-full h-full flex  flex-wrap justify-center  mt-7'>

    {
      viewWishes?.wishes?.map((view)=>(
        <Link key={view._id} href={`/view/${params.id}/${view.wishId}`}> 
          <div key={view._id} className={`w-60 h-56 ${view.isBooked ? 'bg-green-300 border-none hover:shadow-none' : 'bg-gray-100 border text-black'}  rounded-xl hover:shadow-xl flex items-center justify-center m-3 `}>
            {
              view.isBooked ? (
                <p className='text-2xl break-words'>booked</p>

              ):(
                <p className='text-2xl break-words'>{view.title}</p>

              )
            }

          </div>
        </Link>
    ))
  }
</div>

</div>
}
{
  isCard  &&  <div className='w-full h-wish-container  flex justify-center  '>
  <div className='sm:w-11/12 w-full h-full flex  flex-wrap justify-center  mt-7'>

    {
      viewWishes?.wishes?.map((view)=>(
<ViewWishCard key={view._id} view={view} params={params}/>
    ))
  }
</div>

</div>

}


          

          {
            isViewNote &&     <ViewNote description={viewWishes?.description}/>
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