'use client'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Ingresantes = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  return (
    <Carousel
      responsive={responsive}
      ssr // means to render carousel on server-side.
      infinite
      autoPlay

    >
      <div className='flex flex-col gap-2 w-full'>
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
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
            src='computo.jpg'
            alt='ingresante computo general'
            className='
            object-cover
            h-full
            w-full
            group-hover:scale-110
            transition'
          />
        </motion.div>
      </div>
      <div className='flex flex-col gap-2 w-full'>
        <div className='aspect-square w-full relative overflow-hidden rounded-xl'>
          <img
            src='derecho.jpg'
            alt='ingresante computo general'
            className='
            object-cover
            h-full
            w-full
            group-hover:scale-110
            transition'
          />
        </div>
      </div>
      <div className='flex flex-col gap-2 w-full'>
        <div className='aspect-square w-full relative overflow-hidden rounded-xl'>
          <img
            src='medicina.jpg'
            alt='ingresante computo general'
            className='
            object-cover
            h-full
            w-full
            group-hover:scale-110
            transition'
          />
        </div>
      </div>
      <div className='flex flex-col gap-2 w-full'>
        <div className='aspect-square w-full relative overflow-hidden rounded-xl'>
          <img
            src='petroquimica.jpg'
            alt='ingresante computo general'
            className='
            object-cover
            h-full
            w-full
            group-hover:scale-110
            transition'
          />
        </div>
      </div>
      <div className='flex flex-col gap-2 w-full'>
        <div className='aspect-square w-full relative overflow-hidden rounded-xl'>
          <img
            src='arquitectura.jpg'
            alt='ingresante computo general'
            className='
            object-cover
            h-full
            w-full
            group-hover:scale-110
            transition'
          />
        </div>
      </div>

    </Carousel>
  )
}

export default Ingresantes
