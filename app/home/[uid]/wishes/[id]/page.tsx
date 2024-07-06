import Wishes from '@/components/Wishes/Wishes'
import { Params } from '@/interfaces'
import React, { FC } from 'react'

const page:FC<Params> = ({params}) => {
  return (
    <div className=' w-full h-full  rounded-e-lg  '>
        <Wishes params={params}/>
    </div>
  )
}

export default page