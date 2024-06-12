import Wishes from '@/components/Wishes/Wishes'
import { Params } from '@/interfaces'
import React, { FC } from 'react'

const page:FC<Params> = ({params}) => {
  return (
    <div className='lg:w-10/12 w-full h-svh '>
        <Wishes params={params}/>
    </div>
  )
}

export default page