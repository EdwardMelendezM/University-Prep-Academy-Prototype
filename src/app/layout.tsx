import React from 'react'
import ClientOnly from './components/ClientOnly'
import Footer from './components/Footer'
import Redes from './components/Redes'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'
import MoveWindows from './components/MoveWindows'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Academia ingenio',
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
        <MoveWindows>
          {children}
        </MoveWindows>

        <ClientOnly>
          <Redes />
          <hr />
          <Footer />
        </ClientOnly>
      </body>
    </html>
  )
}
