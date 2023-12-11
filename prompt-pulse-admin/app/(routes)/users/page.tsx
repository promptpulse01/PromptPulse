import Sidebar from '@/components/Sidebar'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <div> <div className="flex min-h-screen">
    <div className="2xl:w-[16%] w-1/5">
      <Sidebar activeItem="Users" />
    </div>
    <div className="2xl:w-[84%] w-[80%]">
      <h1>All Users</h1>
    </div>
  </div></div>
  )
}

export default Page