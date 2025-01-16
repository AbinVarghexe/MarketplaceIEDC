'use client'
import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true)

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className='py-1 bg-black text-white flex justify-center items-center relative'>
      <p className='mx-4'>Welcome to Marketplace</p>
      <button onClick={handleClose} className='absolute right-4 text-white'>
        <FaTimes />
      </button>
    </div>
  )
}

export default Banner
