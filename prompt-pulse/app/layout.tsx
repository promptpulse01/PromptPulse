import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import Provider from './{Providers)/NextUiProvider'
import { Toaster } from 'sonner'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { getUser } from '@/actions/users/getUser'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prompt Pulse',
  description: 'Prompt Pulse',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const  data  = JSON.parse(JSON.stringify(await getUser()))
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Toaster position='top-center' richColors />
          <Header activeItem={0} user={data.user}  />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
