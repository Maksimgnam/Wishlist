'use client'
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {auth} from '../../../firebase/config'
import { User } from '@/interfaces';
import Home from '@/components/Home';

const page = () => {
 
  return (
    <div className='w-10/12  min-h-screen  '>
      <Home/>
    </div>
  )
}

export default page
