
import Error from '@/components/Error'
import Sidebar from '@/components/Sidebar'
import { useIsAdmin } from '@/utils/useAdmin'

import React from 'react'


const Page = async () => {


  const isAdmin = await useIsAdmin()


  return (
    <>
      {isAdmin ? (
        <>
          <div>
            <h1 className='text-center font-semibold text-white text-5xl'>Hello <span className='text-[#64FF4B]'>AFKians</span></h1>
            <div className="flex min-h-screen">
              <div className="2xl:w-[16%] w-1/5">
                <Sidebar activeItem="Dashboard" />
              </div>
              </div>
          </div>
        </>
      ) : (
        <Error />
      )}
    </>
  )
}

export default Page