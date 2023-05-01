'use client'
import { useRouter } from 'next/navigation'
import { FaBook } from "@react-icons/all-files/fa/FaBook"
import { FcVoicePresentation } from "@react-icons/all-files/fc/FcVoicePresentation"
import { FaChalkboardTeacher } from "@react-icons/all-files/fa/FaChalkboardTeacher"
import { FaBookReader } from "@react-icons/all-files/fa/FaBookReader"



const Logo = () => {

  return (
    <div className='flex sm:flex-row flex-col justify-between alignt-center p-8 sm:p-4 gap-3'>
      <img src="logo.png" alt="ingenio logo" className="hidden md:block w-full h-full max-w-[230px]" />

      <div className='flex sm:flex-col gap-2 text-center items-center justify-center text-xl bg-gray-200 sm:p-3 rounded-2xl  p-8'> Docentes exigidos<FaChalkboardTeacher style={{ color: 'blue', fontSize: '1.5em' }} /></div>
      <div className='flex sm:flex-col gap-2 text-center items-center justify-center text-xl bg-gray-200 sm:p-3 rounded-2xl p-8'> Material de calidad<FaBookReader style={{ color: 'red', fontSize: '1.5em' }} /></div>
      <div className='flex sm:flex-col gap-2 text-center items-center justify-center text-xl bg-gray-200 sm:p-3 rounded-2xl  p-8'> Presencial al 100%<FcVoicePresentation style={{ color: 'red', fontSize: '1.5em' }} /></div>


    </div>
  );
}

export default Logo;