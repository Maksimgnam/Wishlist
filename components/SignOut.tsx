'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import {auth} from '../firebase/config'
import Cookies from 'js-cookie';

const SignOut = () => {
    const router = useRouter()
    
    const signOut = async () => {
        try {
            await auth.signOut();
            router.push('/')
            Cookies.remove('dealer')
    
      
        } catch (error) {
            console.error('Error signing out:', error);
      
        }
      
      }
  return (
    <div className='w-full h-auto  mb-3 '>
        <button  onClick={signOut} className='w-full h-11 bg-yellow rounded flex items-center justify-center '>
            <p className='text-md text-white font-medium'>Sign out</p>
        </button>
    </div>
  )
}

export default SignOut