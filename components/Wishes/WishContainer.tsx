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
  const [searchWish , setSearchWish] = useState('')
  const filteredWishes = (wishes?.wishes ?? []).filter((wish: WishData) => {

    const filteredStatus = filter === "all" || (filter === 'booked' && wish.isBooked) || (filter === 'free' && !wish.isBooked);
    const filteredSearch = wish.title.toLowerCase().includes(searchWish.toLowerCase());
    return filteredSearch && filteredStatus
  });


  const  wishDeleted = (deletedWishId: string) => {
    if (wishes) {
    wishes.wishes == wishes.wishes.filter(wish => wish.id !== deletedWishId);
      setIsFilter(!isFilter);
    }
  };

  const lenghtOf = filteredWishes?.length
  

  return (
    <div className='w-full h-auto relative  sm:top-4  top-1     '>
    <div className="w-full h-auto flex items-center justify-between m-2 mt-3 ml-0 p-1 pt-0 pb-0">
        <div className='w-auto h-auto sm:flex hidden items-center'>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="   w-20 h-7  bg-transparent  text-sm text-center border rounded  outline-none "
        >
          <option value="all">All</option>
          <option value="booked">Booked</option>
          <option value="free">Free</option>
        </select>


        </div>
        <input type="text" value={searchWish} onChange={(e)=> setSearchWish(e.target.value)} placeholder='Search...' className='sm:w-48 w-40 h-8 bg-transparent sm:flex hidden  border rounded outline-none sm:ml-3 ml-0 pl-2'/>
        <Link className='sm:w-auto w-full' href={`/home/${params.uid}/wishes/${params.id}/createWish`}>
          <button className='sm:w-28 w-full sm:h-7 h-12 text-black bg-green-400 text-sm bg-button rounded-md hover:shadow-2xl  flex items-center justify-center'><p className='sm:flex hidden pl-2'> + <span className='sm:flex hidden pl-2'>New wish</span></p>
          
          <p className='sm:hidden flex text-xl text-white'>Add new wish </p>
           </button>
        </Link>

      </div>
      
     
{
  lenghtOf > 0 ?(
    <div className='w-full sm:h-wish-container  h-small-wish-container flex flex-wrap justify-center sm:justify-start overflow-y-scroll p-1 pl-0'>
      {
       filteredWishes?.map((wish:WishData)=>(
          <WishCard key={wish.id} wish={wish} onDelete={wishDeleted} params={params}/>

        ))
      }
      </div>

  ):(
    <div className='w-full h-wish-container flex items-center justify-center'>
      <p className='text-3xl text-center  mb-60'>No created wishes <span className='text-5xl pl-2  relative top-1'>😞</span></p>
    </div>
  )
}
      
    
      
     
        
    </div>
  )
}

export default WishContainer
