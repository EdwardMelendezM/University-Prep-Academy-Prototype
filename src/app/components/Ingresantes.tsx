'use client'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const Ingresantes = () => {
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
        <div className='aspect-square w-full relative overflow-hidden rounded-xl'>
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
        </div>
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
