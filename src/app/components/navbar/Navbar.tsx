'use client'

import { usePathname } from 'next/navigation'
import Container from '../Container'
import ItemNavbar from './ItemNavbar'
interface itemNavbar{
  text:string
  url:string
  isHidden:boolean
}
const navbarItem: Array<itemNavbar> = [
  {
    text: 'CICLOS',
    url: '/ciclos',
    isHidden: false

  },
  {
    text: 'MATRICULAS EN LINEA',
    url: '/matriculas',
    isHidden: true

  },
  {
    text: 'INGRESANTES',
    url: '/',
    isHidden: false
  },
  {
    text: 'COLEGIO',
    url: '/colegio',
    isHidden: true
  },
  {
    text: 'CONOCENOS',
    url: '/conocenos',
    isHidden: false
  },
  {
    text: 'CONTACTO',
    url: '/contactos',
    isHidden: true
  }
]

const Navbar = () => {
  const path = usePathname()

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
                  url={itemNavbar.url}
                  isHidden={itemNavbar.isHidden}
                  isSelect={path.split('/')[1] === itemNavbar.url.substring(1)}
                />))
            }

          </div>
        </Container>
      </div>

    </div>
  )
}

export default Navbar
