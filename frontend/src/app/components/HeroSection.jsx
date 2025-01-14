'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { client } from '@/lib/sanity'
import { urlForImage } from '@/lib/image'

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [banners, setBanners] = useState([])

  useEffect(() => {
    const fetchBanners = async () => {
      const query = `
        *[_type == "banner"] | order(order asc) {
          _id,
          title,
          subtitle,
          "imageUrl": image.asset->url,
          link
        }
      `
      try {
        const data = await client.fetch(query)
        setBanners(data)
      } catch (error) {
        console.error('Error fetching banners:', error)
      }
    }

    fetchBanners()
  }, [])

  useEffect(() => {
    let interval
    if (!isPaused && banners.length > 0) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % banners.length)
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [isPaused, banners.length])

  if (banners.length === 0) {
    return <div>Loading...</div>
  }

  const currentBanner = banners[currentIndex]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative">
      <div className="container mx-auto px-4">
        <AnimatePresence mode='wait'>
          <div className="flex flex-col lg:flex-row items-center justify-between py-20 gap-12" key={currentBanner._id}>
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="flex-1 max-w-2xl"
            >
              <h1 className="text-6xl font-bold mb-4">
                {currentBanner.title}
              </h1>
              <p className="text-2xl text-gray-600 mb-6">
                {currentBanner.subtitle}
              </p>
              <a href={currentBanner.link} className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
                Learn More
              </a>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex-1 relative"
            >
              <div className="relative w-full aspect-square max-w-[600px] mx-auto">
                <Image
                  src={urlForImage(currentBanner.imageUrl).url()}
                  alt={currentBanner.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default HeroSection
