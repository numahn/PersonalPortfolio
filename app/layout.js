import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import githubicon from '@/public/githubicon.png'
import linkedinicon from '@/public/linkedinicon.png'
import resumeicon from '@/public/resumeicon.png'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Noman Ali',
  description: 'JavaScript TypeScript React Node.js software engineer / developer Noman Ali Porfolio created in next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='nav-container'>
          <div className='navbar'>
            <div className='nav-item'>
              <Link href="/">Home</Link>
            </div>
            {/* <div className='nav-item'>
              <Link href="/about">About</Link>
            </div> */}
            <div className='nav-item'>
              <Link href="/projects">Projects</Link>
            </div>
          </div>
          <div className='nav-icons'>
            <Link href="https://www.linkedin.com/in/noman-710/"> <Image className='linkedin icon' src={linkedinicon.src} alt="LinkedIn" width={20} height={20}></Image> </Link>
            <Link href="https://github.com/numahn"> <Image className='github icon' src={githubicon.src} alt="GitHub" width={20} height={20}></Image> </Link>
            <Link href="" > <Image className='resume icon' src={resumeicon.src} alt="Resume" width={20} height={20}></Image> </Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
