import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import Provider from './{Providers)/NextUiProvider'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prompt Pulse',
  description: 'Prompt Pulse',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
     <html lang="en">
        <body className={inter.className}>
          <Toaster position='top-center' richColors/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
