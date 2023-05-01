'use client'
import { useRouter } from 'next/navigation'
const Logo = () => {

  return (
    <div className='flex justify-between alignt-center p-8'>
      <img src="logo.png" alt="ingenio logo" className="w-full h-full max-w-[230px]" />
      <div className='
        flex flex-col
      '>
        <div> Docentes exigidos </div>
        <div> Material de calidad </div>
        <div> Presencial al 100% </div>
      </div>

    </div>
  );
}

export default Logo;