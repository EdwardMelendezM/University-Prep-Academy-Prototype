import React from 'react'
import ClientOnly from './components/ClientOnly'
import Footer from './components/Footer'
import Redes from './components/Redes'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Academia pre universitaria',
  description: 'Academia pre universitaria cusco cusco',
  keywords: 'academia pre universitaria, academia cusco, academia unsaac'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body className={nunito.className}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        <div className='w-full h-full min-h-[100vh] pt-28  absolute top-0 left-0 bg-custom-bg bg-custom-opacity bg-cover'>
          {/* bg-gradient-to-b from-blue-500 to-yellow-300 */}
          {children}
        </div>
        <ClientOnly>
          <Redes />
          <hr />
          <Footer />
        </ClientOnly>
      </body>
    </html>
  )
}
