import React from 'react'
import MyOrder from './_page'
import { getOrder } from '@/actions/orders/getOrder'
import { getUser } from '@/actions/users/getUser'

type Props = {}

const Page = async(props: Props) => {

    const order = JSON.parse(JSON.stringify(await getOrder()))
    console.log(order)
    const {user} = JSON.parse(JSON.stringify(await getUser()))

  return (
    <>
    <MyOrder order={order} user={user}/>
    </>
  )
}

export default Page