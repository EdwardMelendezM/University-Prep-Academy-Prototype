'use client'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

interface ItemCarruselProps{
  src:string
  alt:string
}

const ItemCarrusel: React.FC<ItemCarruselProps> = ({ src, alt }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const handleMouseEnter = () => {
    setIsHovered(true)
  }
  const handleMouseLeave = () => {
    setIsHovered(false)
  }
  return (
    <div className='flex flex-col gap-2 w-full'>
      <motion.div
        animate={{
          scale: isHovered ? 1.05 : 1,
          transition: {
            duration: 0.2,
            ease: 'linear'
          }
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='aspect-square w-full relative overflow-hidden rounded-xl'
      >

        <img
          src={src}
          alt={alt}

        />
      </motion.div>
    </div>
  )
}

export default ItemCarrusel
