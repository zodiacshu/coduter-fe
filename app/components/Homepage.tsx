"use client"
import React from 'react'
import Image from 'next/image'

const Homepage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative" style={{ top: '-50px' }}>
      <Image className='flex' src='/clogo.png' alt='Logo' width={700} height={700} />
      <div className='space-x-3 ' style={{ marginTop: '-130px', marginLeft: '210px' }}>
        <button className='bg-black text-white px-4 py-2 rounded-md mr-2 border-2 border-red-500 transition-transform duration-300 hover:scale-105 hover:bg-white hover:text-black'>start coding</button>
        <button className='bg-black text-white px-4 py-2 rounded-md mr-2 border-2 border-red-500 transition-transform duration-300 hover:scale-105 hover:bg-white hover:text-black'>invite friend</button>
      </div>
      </div>
    </div>
  ) 
}

export default Homepage