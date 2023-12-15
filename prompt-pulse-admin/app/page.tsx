import Error from '@/components/Error'
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
          </div>
        </>
      ) : (
        <Error />
      )}
    </>
  )
}

export default Page