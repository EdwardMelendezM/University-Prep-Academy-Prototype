/* eslint-disable @next/next/no-img-element */
'use client'
import { FcVoicePresentation } from '@react-icons/all-files/fc/FcVoicePresentation'
import { FaChalkboardTeacher } from '@react-icons/all-files/fa/FaChalkboardTeacher'
import { FaBookReader } from '@react-icons/all-files/fa/FaBookReader'
import CardLittle from './CardLittle'

const Logo = () => {
  return (
    <div className='flex sm:flex-row flex-col justify-between alignt-center p-8 sm:p-4 gap-3 overflow-x-hidden '>
      <img src='logo.png' alt='ingenio logo' className='hidden md:block w-full h-full max-w-[230px]' />
      <CardLittle
        text='Docentes exigidos'
        icon={FaChalkboardTeacher}
        color='black'
        border='border-slate-900'
      />
      <CardLittle
        text='Presencial al 100%'
        icon={FcVoicePresentation}
      />
      <CardLittle
        text='Material de calidad'
        icon={FaBookReader}
        border='border-yellow-700'
        color='red'
      />

    </div>
  )
}

export default Logo
