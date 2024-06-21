import React, { FC , useState} from 'react'
import WishCard from './WishCard'
import { WishData, WishListData } from '@/interfaces';
import { Params } from '@/interfaces';
import Link from 'next/link';
interface WishContainerData{
  params:{
    id:any, uid:any
  },
  wishes:WishListData | null,
  isFilter:boolean,
  setIsFilter: React.Dispatch<React.SetStateAction<boolean>>;

}

const  WishContainer:FC<WishContainerData> = ({params, wishes, isFilter, setIsFilter}) => {
  const [filter, setFilter] = useState('all');
  const filteredWishes = (wishes?.wishes ?? []).filter((wish: WishData) => {
    if (filter === 'booked') return wish.isBooked === true;
    if (filter === 'free') return wish.isBooked === false;
    return true;
  });
  const lenghtOf = filteredWishes?.length
  

  return (
    <div className='w-full h-96  relative  top-4      '>
    <div className="w-full h-auto flex items-center justify-between m-2 mt-3 ml-0 p-1 pt-0 pb-0">
        <div className='w-auto h-auto flex items-center'>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="h-7 w-20 text-sm text-center border text-black rounded  outline-none "
        >
          <option value="all">All</option>
          <option value="booked">Booked</option>
          <option value="free">Free</option>
        </select>
        {/* <input type="text" placeholder='Search...' className='w-44 h-8   border border-pink-300 rounded outline-none ml-3 pl-2'/> */}

        </div>
        <Link href={`/home/${params.uid}/wishes/${params.id}/createWish`}>
        <button className='w-32 h-8 text-white bg-yellow text-sm bg-button rounded-md'>+ New wish</button>
      </Link>

      </div>
      
     
{
  lenghtOf > 0 ?(
    <div className='w-full h-wish-container flex flex-wrap overflow-y-scroll p-1 pl-0'>
      {
       filteredWishes?.map((wish:WishData)=>(
          <WishCard key={wish.id} wish={wish}/>

        ))
      }
      </div>

  ):(
    <div className='w-full h-wish-container flex items-center justify-center'>
      <p className='text-3xl  mb-60'>No created wishes <span className='text-5xl pl-2  relative top-1'>😞</span></p>
    </div>
  )
}
      
    
      
     
        
    </div>
  )
}

export default WishContainer
