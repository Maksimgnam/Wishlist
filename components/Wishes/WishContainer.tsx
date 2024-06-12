import React, { FC , useState} from 'react'
import WishCard from './WishCard'
import { WishData, WishListData } from '@/interfaces';
import { Params } from '@/interfaces';
interface WishContainerData{
  params:{
    id:any
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
    <div className='w-full h-full    p-2    '>
      {
        isFilter &&   <div className="w-full h-auto flex items-center justify-between m-2 mt-1 ml-0 p-1 pt-0 pb-0">
        <div className='w-auto h-auto flex items-center'>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="h-7 w-20 text-sm text-center text-white rounded bg-wish outline-none "
        >
          <option value="all">All</option>
          <option value="booked">Booked</option>
          <option value="free">Free</option>
        </select>
        {/* <input type="text" placeholder='Search...' className='w-44 h-8   border border-pink-300 rounded outline-none ml-3 pl-2'/> */}

        </div>
        <button onClick={()=> setIsFilter(false)} className='w-6 h-6 bg-wish shadow-lg rounded-full text-center text-white   text-sm font-medium '>x</button>
      </div>
      }
     
{
  lenghtOf > 0 ?(
    <div className='w-full h-full flex flex-wrap overflow-y-scroll'>
      {
       filteredWishes?.map((wish:WishData)=>(
          <WishCard key={wish._id} wish={wish}/>

        ))
      }
      </div>

  ):(
    <div className='w-full min-h-screen flex items-center justify-center'>
      <p className='text-3xl  mb-60'>No created wishes <span className='text-5xl pl-2  relative top-1'>😞</span></p>
    </div>
  )
}
      
    
      
     
        
    </div>
  )
}

export default WishContainer
