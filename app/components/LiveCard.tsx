
import React from 'react'
import { LiveItem } from '../types/app'
type LiveCardProps =LiveItem;
import Image from 'next/image';

const LiveCard = ({title, img}:LiveCardProps) => {
  return (
    <div className='cursor-pointer hover:scale-105 transform duration-300 ease-out ' >
        <div className='relative h-80 w-80'>
            <Image src={img} alt='LiveCard-Img' fill />


        </div>
        <h3 className='text-2xl mt-3'>{title}</h3>

    </div>
  )
}

export default LiveCard