'use client'
import { FcVoicePresentation } from '@react-icons/all-files/fc/FcVoicePresentation'
import { FaChalkboardTeacher } from '@react-icons/all-files/fa/FaChalkboardTeacher'
import { FaBookReader } from '@react-icons/all-files/fa/FaBookReader'
import { motion } from 'framer-motion'

const Logo = () => {
  return (
    <div className='flex sm:flex-row flex-col justify-between alignt-center p-8 sm:p-4 gap-3 overflow-x-hidden'>
      <img src='logo.png' alt='ingenio logo' className='hidden md:block w-full h-full max-w-[230px]' />
      <motion.div
        drag='x'
        whileFocus={{ scale: 1.2 }}
        dragConstraints={{ left: 10, right: 5 }}
        className='flex sm:flex-col gap-2 text-center items-center justify-center text-xl bg-gray-200 sm:p-3 rounded-2xl  p-8
        hover:cursor-pointer border-b-4 border-blue-700
        '
      > Docentes exigidos <FaChalkboardTeacher style={{ color: 'blue', fontSize: '1.5em' }} />
      </motion.div>
      <motion.div
        drag='x'
        whileFocus={{ scale: 1.2 }}
        dragConstraints={{ left: 10, right: 5 }}
        className='flex sm:flex-col gap-2 text-center items-center justify-center text-xl bg-gray-200 sm:p-3 rounded-2xl p-8 border-b-4 border-red-700 hover:cursor-pointer'
      > Material de calidad<FaBookReader style={{ color: 'red', fontSize: '1.5em' }} />
      </motion.div>
      <motion.div
        drag='x'
        whileFocus={{ scale: 1.2 }}
        dragConstraints={{ left: 10, right: 5 }}
        className='flex sm:flex-col gap-2 text-center items-center justify-center text-xl bg-gray-200 sm:p-3 rounded-2xl  p-8  border-b-4 border-yellow-700 hover:cursor-pointer'
      > Presencial al 100%<FcVoicePresentation style={{ color: 'red', fontSize: '1.5em' }} />
      </motion.div>

    </div>
  )
}

export default Logo
