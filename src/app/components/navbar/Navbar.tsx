'use client'

import Container from '../Container'
import ItemNavbar from './ItemNavbar'
interface itemNavbar{
  text:string
  url:string
}
const navbarItem: Array<itemNavbar> = [
  {
    text: 'CICLOS',
    url: ''
  },
  {
    text: 'MATRICULAS EN LINEA',
    url: ''
  },
  {
    text: 'RECURSOS',
    url: ''
  },
  {
    text: 'COLEGIO',
    url: ''
  },
  {
    text: 'CONOCENOS',
    url: ''
  },
  {
    text: 'CONTACTO',
    url: ''
  }
]

const Navbar = () => {
  const onClick = () => {
    console.log('Onichan')
  }
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
            {
              navbarItem.map((itemNavbar) => (
                <ItemNavbar
                  key={itemNavbar.text}
                  text={itemNavbar.text}
                  url=''
                  onClick={onClick}
                />))
            }

          </div>
        </Container>
      </div>

    </div>
  )
}

export default Navbar
