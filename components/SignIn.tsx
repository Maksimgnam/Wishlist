"use client"
import React, { FC, useState } from 'react';
import { signInWithEmailAndPassword,  UserCredential} from 'firebase/auth';
import { auth } from '../firebase/config'
import { useRouter } from 'next/navigation';
import { Auth } from '@/interfaces';



const SignIn:FC<Auth>  = ({isChange}) => {
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential: UserCredential) => {
            const uid = userCredential.user.uid;
            console.log(userCredential);
            router.push(`/home/${uid}`); 
        })
        .catch((error) => {
            console.log(error);
        });
}


  return (
    <div className='w-80 h-80 border border-pink-500  shadow-2xl  rounded-xl flex flex-col  items-center  justify-between p-6'>
        <h2 className='text-2xl text-black font-medium'> Sign in</h2>
        <div className='w-full h-28 flex flex-col justify-between' >
            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className='w-full h-12 bg-white text-black border border-custom  rounded  outline-none pl-2' placeholder='Email'  />
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className='w-full h-12 bg-white text-black border border-custom    outline-none pl-2' placeholder='Password'  />
        </div>

      
        <button onClick={signIn}   className='w-full h-12  rounded bg-button'>
          <p className='text-lg text-white font-medium'>Sign in</p>
        </button>
  
        <div className='w-full h-6 flex items-center  justify-end' >
            <div className='w-auto h-auto flex '>
                <p onClick={isChange}  className='text-sm text-black font-medium cursor-pointer mr-3'>Sign up</p>
                <p className='text-sm font-medium text-pink-500 cursor-pointer '>Sign In</p>
            </div>
        </div>
    </div>
  )
}

export default SignIn