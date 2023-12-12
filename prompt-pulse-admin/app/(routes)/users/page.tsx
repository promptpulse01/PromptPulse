import { getAllUsers } from '@/actions/users/getAllUsers'
import AllUsers from '@/components/Admin/AllUsers'
import Sidebar from '@/components/Sidebar'
import React from 'react'

type Props = {}

const Page = async (props: Props) => {

  const data = JSON.parse(JSON.stringify(await getAllUsers()))

  // console.log(data)


  return (
    <div className="flex min-h-screen">
      <div className="2xl:w-[16%] w-1/5">
        <Sidebar activeItem="Users" />
      </div>
      <div className="2xl:w-[84%] w-[80%] ml-10">
        <AllUsers users={data} />
      </div>
    </div>
  )
}

export default Page