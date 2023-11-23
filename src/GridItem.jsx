import React from 'react'
import { Link } from 'react-router-dom'

function GridItem({text, children}) {
  return (
    <div className='
        flex
        flex-col 
        justify-center 
        items-center 
        h-48 w-48 max-w-[12rem] 
        rounded-lg drop-shadow-lg 
        hover:drop-shadow-2xl 
        bg-gray-900 
        bg-clip-padding 
        backdrop-filter 
        backdrop-blur-lg 
        hover:animate-pulse
        filter 
        hover:grayscale 
        hover:contrast-200
        transition duration-1000 scale-100 hover:scale-105
        hover:border-sky-200 
        hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]
        '
        >
        <div>{children}</div>
        <div className='text-sky-200'>{text}</div>
        </div>
  )
}

export default GridItem