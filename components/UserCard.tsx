"use client"
import React, {FC, useEffect, useState} from 'react';
import {auth} from '../firebase/config'

interface UserCardData{
    name:string | undefined
}


const UserCard:FC<UserCardData> = ({name}) => {
    
   
  return (
    <div className='w-full h-9  rounded flex items-center p-1'>
      {
        name &&     <>
   
        <div className='w-7 h-7 bg-button rounded flex items-center justify-center'>
            <p className='text-sm text-white font-medium '>{name?.slice(0, 1)}</p>
        </div>
        <p className='text-md font-medium pl-2 pt-1'>{name}</p>
        </>
      }
  
    </div>
  )
}

export default UserCard