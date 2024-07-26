"use client"
import React, { FC, useState } from 'react';
import { signInWithEmailAndPassword,  UserCredential} from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/config'
import { useRouter } from 'next/navigation';
import { Auth } from '@/interfaces';
import Cookies from 'js-cookie';
import Image from 'next/image';




const SignIn:FC<Auth>  = ({isChange}) => {
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential: UserCredential) => {
            const uid = userCredential.user.uid;
            console.log(userCredential);
            Cookies.set('dealer', 'dealer', { expires: 7 }); 
            router.push(`/home/${uid}`); 
        })
        .catch((error) => {
            console.log(error);
            if(error?.toString().slice(30) ==='(auth/invalid-credential).'){
              alert('Wrong email or password. Try again')
            }

        });
}

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const uid = user.uid;
        Cookies.set('dealer', 'dealer', { expires: 7 }); 
        router.push(`/home/${uid}`); 
        console.log('User signed in:', user);

      })
      .catch((error) => {
        console.error('Error signing in with Google:', error);
      });
 
  };



  return (
    <div className='w-80 h-96 bg-white border    rounded-xl shadow-xl flex flex-col  items-center  justify-between p-6'>
        <h2 className='text-2xl text-black  font-medium'> Sign in</h2>
        <div className='w-full h-28 flex flex-col justify-between' >
            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className='w-full h-12 bg-transparent text-black border   rounded  outline-none pl-2' placeholder='Email'  />
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className='w-full h-12 bg-transparent text-black border    outline-none pl-2' placeholder='Password'  />
        </div>

      
        <button onClick={signIn}   className='w-full h-12  rounded bg-black'>
          <p className='text-lg text-white font-medium'>Sign in</p>
        </button>
        <button onClick={googleSignIn} className='w-full h-12 rounded bg-slate-50 flex items-center justify-center'>

            <Image src='/google-logo.png' width={24} height={24} alt='' className=' relative right-3'/>
            <p className='text-md text-black font-medium'>Sign in with Google</p>
          </button>
  
        <div className='w-full h-6 flex items-center  justify-end' >
        <div className='w-auto h-auto flex'>
          <p onClick={isChange} className='text-sm font-medium  text-black cursor-pointer mr-3'>Sign up</p>
          <p  className='text-sm text-blue-500 font-medium cursor-pointer'>Sign in</p>
        </div>
        </div>
    </div>
  )
}

export default SignIn