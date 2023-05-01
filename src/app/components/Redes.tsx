'use client'
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook'
import { FaFacebookMessenger } from '@react-icons/all-files/fa/FaFacebookMessenger'
import { FaWhatsapp } from '@react-icons/all-files/fa/FaWhatsapp'
import { FiPhone } from '@react-icons/all-files/fi/FiPhone'
import { SiTiktok } from '@react-icons/all-files/si/SiTiktok'
import { useRouter } from 'next/navigation'

const Redes = () => {
  const router = useRouter()
  return (
    <div className='
      hidden
      md:block
      z-11
      fixed
      top-1/3
      right-0
      w-[60px]
      h-[390px]
      b-red
      bg-white
      rounded-tl-full
      rounded-bl-full
      '
    >
      <div className='ml-1 w-full h-full flex flex-col g-3 justify-around items-center p-2'>
        <FaFacebook
          style={{ color: 'blue', fontSize: '2em' }}
          className='hover:border-blue-950 hover:border-b-2 hover:cursor-pointer transition-all'
          onClick={() => { router.push('https://www.facebook.com/profile.php?id=100063746628373') }}
        />
        <FaFacebookMessenger
          style={{ color: 'blue', fontSize: '2em' }}
          className='hover:border-blue-950 hover:border-b-2 hover:cursor-pointer transition-all'
          onClick={() => { }}
        />
        <FaWhatsapp
          style={{ color: 'blue', fontSize: '2em' }}
          className='hover:border-blue-950 hover:border-b-2 hover:cursor-pointer transition-all'
          onClick={() => { }}
        />
        <FiPhone
          style={{ color: 'blue', fontSize: '2em' }}
          className='hover:border-blue-950 hover:border-b-2 hover:cursor-pointer'
          onClick={() => { }}
        />
        <SiTiktok
          style={{ color: 'blue', fontSize: '2em' }}
          className='hover:border-blue-950 hover:border-b-2 hover:cursor-pointer'
          onClick={() => { }}
        />

      </div>

    </div>
  )
}

export default Redes
