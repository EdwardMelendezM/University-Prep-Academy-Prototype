'use client'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ItemCarrusel from './ItemCarrusel'

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
      <ItemCarrusel
        src='computo.jpg'
        alt='ingresante computo general'
      />
      <ItemCarrusel
        src='derecho.jpg'
        alt='ingresante computo general'
      />
      <ItemCarrusel
        src='medicina.jpg'
        alt='ingresante computo general'
      />
      <ItemCarrusel
        src='petroquimica.jpg'
        alt='ingresante computo general'
      />
      <ItemCarrusel
        src='arquitectura.jpg'
        alt='ingresante computo general'
      />

    </Carousel>
  )
}

export default Ingresantes
