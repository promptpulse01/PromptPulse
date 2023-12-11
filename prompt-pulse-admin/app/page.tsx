"use client"
import Error from '@/components/Error'
import { useAdmin } from '@/utils/useAdmin'
import React from 'react'

type Props = {}

const Page = async (props: Props) => {


  const isAdmin = await useAdmin()


  return (
    <>
      {isAdmin ? (
        <>
          <div>
            <h1 className='text-center font-semibold text-white text-5xl'>Hello <span className='text-[#64FF4B]'>Nikita</span></h1>
          </div>
        </>
      ) : (
        <Error />
      )}
    </>
  )
}

export default Page