import Wishes from '@/components/Wishes/Wishes'
import { Params } from '@/interfaces'
import React, { FC } from 'react'

const page:FC<Params> = ({params}) => {
  return (
    <div className='lg:w-full w-full h-full bg-white rounded-e-lg  '>
        <Wishes params={params}/>
    </div>
  )
}

export default page