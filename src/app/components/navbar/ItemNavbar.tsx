'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
interface ItemNavbarProps{
  text:string
  url:string
  isHidden?:boolean
  isSelect?:boolean
}

const ItemNavbar:React.FC<ItemNavbarProps> = (
  {
    text,
    url,
    isSelect,
    isHidden
  }) => {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(url)}
      className={`
        hover:cursor-pointer
        transition
        text-gray-800
        hover:text-gray-400
        ${!isHidden ? 'hidden' : ''}
        sm:block

        ${isSelect ? 'font-bold' : ''}
        `}
    >
      {text}

    </div>
  )
}

export default ItemNavbar
