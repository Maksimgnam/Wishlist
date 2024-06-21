"use client"
import React, { FC, useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/config'
import { useRouter } from 'next/navigation';
import { Auth } from '@/interfaces';



const SignUp:FC<Auth> = ({isChange}) => {
  const router = useRouter()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async (event:React.FormEvent) => {
    event.preventDefault();
   
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res && res.user) {
          await updateProfile(res.user, { displayName: name });
          setEmail('');
          setPassword('');
          setName('');
          alert('Successfully signed up');
          const uid = res.user.uid;
          router.push(`/home/${uid}`)
      } else {
          console.error('Authentication failed');
         
      }
  } catch (error) {
      console.error(error);
      
  }
}
  return (
    <div className='w-80 h-96 border  shadow-2xl  rounded-xl flex flex-col  items-center  justify-between p-6'>
        <h2 className='text-2xl text-black font-medium'> Sign up</h2>
        <div className='w-full h-44 flex flex-col justify-between' >
            <input type="text"  value={name} onChange={(e) => setName(e.target.value)} className='w-full h-12 bg-white text-black border rounded outline-none pl-2' placeholder='Name' />
            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className='w-full h-12 bg-white text-black border  rounded  outline-none pl-2' placeholder='Email'  />
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className='w-full h-12 bg-white text-black border   outline-none pl-2' placeholder='Password'  />
        </div>

      
        <button  onClick={signUp} className='w-full h-12  rounded bg-yellow'>
          <p className='text-lg text-white font-medium'>Sign up</p>
        </button>
  
        <div className='w-full h-6 flex items-center  justify-end' >
            <div className='w-auto h-auto flex '>
                <p className='text-sm font-medium text-blue-500 cursor-pointer mr-3'>Sign up</p>
                <p  onClick={isChange} className='text-sm text-black font-medium cursor-pointer'>Sign in</p>
            </div>
        </div>
    </div>
  )
}

export default SignUp