'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import {auth} from '../firebase/config'

const SignOut = () => {
    const router = useRouter()
    
    const signOut = async () => {
        try {
            await auth.signOut();
            router.push('/')
    
      
        } catch (error) {
            console.error('Error signing out:', error);
      
        }
      
      }
  return (
    <div className='w-full h-auto mt-5'>
        <button  onClick={signOut} className='w-24 h-9 bg-button rounded '>
            <p className='text-sm text-white font-medium'>Sign out</p>
        </button>
    </div>
  )
}

export default SignOut