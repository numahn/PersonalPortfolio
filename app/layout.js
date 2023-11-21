import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='navbar'>
          <div className='nav-item'>
            <Link href="/">Home</Link>
          </div>
          <div className='nav-item'>
            <Link href="/">About</Link>
          </div>
          <div className='nav-item'>
            <Link href="/">Projects</Link>
          </div>
        </div>
        <div className='nav-icons'>
            <div>
              L
            </div>
            <div>
              G
            </div>
        </div>
        {children}
      </body>
    </html>
  )
}
