import { Analytics } from '@vercel/analytics/react';

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rafa e Luiz em: A descoberta do verdadeiro Face | Agenda',
  description: 'Agenda de shows da Rafa e Luiz',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <head>
      <link href="https://fonts.cdnfonts.com/css/ostrich-sans-2" rel="stylesheet"/>
      <link href="https://fonts.cdnfonts.com/css/bracheos" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/>
      <link href="https://fonts.cdnfonts.com/css/walrus" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet" />

      </head>
      <body className={inter.className}>
      <div id="modal-root"></div>
        {children}
        <Analytics />
        </body>
    </html>
  )
}
