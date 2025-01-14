'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Banner = () => {
  const [windowWidth, setWindowWidth] = useState(1000)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const announcements = [
    {
      title: "iPhone 15 Pro",
      image: "/iphone15.png",
      price: "$999",
    },
    {
      title: "Samsung S24 Ultra",
      image: "/samsung-s24.png",
      price: "$899",
    },
    {
      title: "MacBook Pro M3",
      image: "/macbook-m3.png",
      price: "$1999",
    },
    // Add more products as needed
  ]

  return (
    <div className=" text-black py-1 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          animate={{
            x: [-1000, windowWidth],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="flex items-center space-x-16"
        >
          {announcements.map((item, index) => (
            <div key={index} className="flex items-center space-x-4 whitespace-nowrap">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-normal text-md">{item.title}</p>
                  <button className="bg-black text-white px-4 py-1 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all duration-300">
                    Pre-order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Banner
