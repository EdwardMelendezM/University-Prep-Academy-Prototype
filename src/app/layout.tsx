import ClientOnly from './components/ClientOnly'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Academia pre universitaria',
  description: 'Academia pre universitaria cusco cusco',
  keywords: 'academia pre universitaria, academia cusco, academia unsaac'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={nunito.className}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}
