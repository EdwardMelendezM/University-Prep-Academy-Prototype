'use client'

import Container from '../Container'

const Navbar = () => {
  return (
    <div className='
      fixed w-full bg-white z-10 shadow-sm
    '
    >
      <div className='
        py-4 border-b-[1px]
      '
      >
        <Container>
          <div className='
            flex flex-row items-center justify-between gap-3 md:gap-0 text-sm sm:text-md md:text-lg
          '
          >
            <div className=''>CICLOS</div>
            <div className='hidden sm:block'>MATRICULAS EN LINEA</div>
            <div className=''>RECURSOS</div>
            <div className='hidden sm:block'>COLEGIO</div>
            <div className=''>CONÓCENOS</div>
            <div className='hidden sm:block'>CONTACTO</div>
          </div>
        </Container>
      </div>

    </div>
  )
}

export default Navbar
