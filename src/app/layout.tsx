import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kolawole Joshua - Web Developer',
  description: 'Building things that matter, I help brands worldwide elevate their digital presence.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth' style={{scrollBehavior:'smooth'}}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
