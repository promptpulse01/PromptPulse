import { getAllUsers } from '@/actions/users/getAllUsers'
import AllUsers from '@/components/Admin/AllUsers'
import Sidebar from '@/components/Sidebar'
import React from 'react'

type Props = {}

const Page = async (props: Props) => {

  const data = JSON.parse(JSON.stringify(await getAllUsers()))

  return (
    <>
      <AllUsers users={data}/>
    </>
  )
}

export default Page