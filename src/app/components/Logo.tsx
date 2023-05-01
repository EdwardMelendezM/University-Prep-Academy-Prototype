'use client'
import { useRouter } from 'next/navigation'
import { FaBook } from "@react-icons/all-files/fa/FaBook"
import { FcVoicePresentation } from "@react-icons/all-files/fc/FcVoicePresentation"
import { FaChalkboardTeacher } from "@react-icons/all-files/fa/FaChalkboardTeacher"
import { FaBookReader } from "@react-icons/all-files/fa/FaBookReader"



const Logo = () => {

  return (
    <div className='flex sm:flex-row flex-col justify-between alignt-center p-8 sm:p-4'>
      <img src="logo.png" alt="ingenio logo" className="w-full h-full max-w-[230px]" />

      <div className='flex sm:flex-col flex-row gap-2 text-center items-center justify-center text-2xl bg-gray-200 p-3 rounded-2xl'> Docentes exigidos<FaChalkboardTeacher style={{ color: 'blue', fontSize: '1.5em' }} /></div>
      <div className='flex sm:flex-col flex-row gap-2 text-center items-center justify-center text-2xl bg-gray-200 p-3 rounded-2xl'> Material de calidad<FaBookReader style={{ color: 'red', fontSize: '1.5em' }} /></div>
      <div className='flex sm:flex-col flex-row gap-2 text-center items-center justify-center text-2xl bg-gray-200 p-3 rounded-2xl'> Presencial al 100%<FcVoicePresentation style={{ color: 'red', fontSize: '1.5em' }} /></div>


    </div>
  );
}

export default Logo;