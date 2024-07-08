
'use client'
import React, { FC, useState } from 'react';
import { WishList } from '@/interfaces';
import { Params } from '@/interfaces';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';


const CreateWishList:FC<Params> = ({params}) => {
    const router = useRouter()
    const [wishListData, setWishListData] = useState<WishList>({
        title: '',
        description:'',
        createdAt: new Date(),
        userId: `${params.uid}`,
        private: false,
        password:""

    });
    const [isPrivate, setIsPrivate] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [isSelected, setIsSelected] = useState<'public' | 'private' | null>('public');

    const addWishList = async (event: React.FormEvent)=>{
        if(wishListData.title.trim() === ''){
            alert("Please, type wishlist's title")
       
    }else{
        event.preventDefault();
        const dataToSubmit = { ...wishListData };
        if (isPrivate && password.trim() !== '') {
          dataToSubmit.private = true;
          dataToSubmit.password = password;
        }

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/add-wishlist`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSubmit),
            });
     
  
            const result = await response.json();
            console.log(result);

  
            setWishListData({
                title: '',
                description:'',
                userId: `${params.uid}`,
                createdAt: new Date(),
                private: false,
                password:""
            });
            setPassword('');
            setIsPrivate(false);
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
      const handlePrivacyChange = (privacy: 'public' | 'private') => {
        setIsPrivate(privacy === 'private');
        setIsSelected(privacy);
        if (privacy === 'public') {
          setPassword('');
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
    <div className='w-auto h-auto  flex flex-col relative  bottom-14'>
    <div className='w-80 h-auto flex justify-end m-5  '>
        <Link href={`/home/${params.uid}`}>
            <button className='w-6 h-6 bg-black rounded-full text-center text-white text-mini font-medium '>x</button>
        </Link>

    </div>
   
    <div className='w-80 min-h-96  h-auto   border shadow-2xl rounded-xl flex flex-col items-center justify-between p-3 ml-4'>
        <div className='w-full h-10 flex items-center'>
            <div className='w-7 h-7 bg-yellow rounded flex items-center justify-center'>
                <p className='text-sm  text-white'>W</p>
            </div>
            <h2 className='text-md pl-2 '>New Wish List</h2>
        </div>
        <input value={wishListData.title} onChange={inputChange} name='title' id='title' placeholder='Write your title'  className={`w-full h-10 bg-transparent  border  rounded outline-none  resize-none p-2 `} />
        <div className='w-full h-auto flex items-center '>
        <button  onClick={()=>  handlePrivacyChange('public')} className={`w-24 h-8 ${isSelected === 'private' ? 'bg-stone-300' : 'bg-yellow-300'}   rounded flex items-center justify-center`}>
            <Image src='/public.png' width={20} height={20} alt=''  className=' relative right-1'/>
            <p className='text-sm text-black font-medium'>Public</p>
        </button>
        <button onClick={()=> handlePrivacyChange('private')} className={`w-24 h-8 ${isSelected=== 'public' ? 'bg-stone-300' : 'bg-yellow-300'}  rounded flex items-center justify-center ml-3`}>
            <Image src='/private.png' width={16} height={16} alt='' className=' relative right-1'/>
            <p className='text-sm text-black font-medium'>Private</p>
        </button>
        </div>
        {
            isPrivate && 
            <div className='w-full h-auto flex items-center'>
           
            <input type="password" id="myInput" placeholder='Write password' value={password} onChange={(e)=> setPassword(e.target.value)} className='w-10/12 h-9 bg-transparent rounded border  outline-none pl-2' />
            <button onClick={passwordChange} className='w-9 h-9 bg-yellow-300 rounded flex items-center justify-center relative right-2'>
            <img className='w-4 h-4' src="https://cdn-icons-png.freepik.com/256/167/167025.png?semt=ais_hybrid" alt="" />
            </button>
            </div>
        }
 
        <textarea  value={wishListData.description} onChange={inputChange} name='description' placeholder='Write your description'  className='w-full h-28 bg-transparent  rounded  outline-none border resize-none p-2 ' />
        <button onClick={addWishList} className='w-full  h-10 bg-yellow rounded-md mt-3'>
            <p className='text-md font-medium text-white'>Add WishList</p>
        </button>
    </div>
    </div>
  )
}

export default CreateWishList;