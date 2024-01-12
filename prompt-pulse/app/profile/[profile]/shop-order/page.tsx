import { getUser } from '@/actions/users/getUser';
import React from 'react'
import ShopOrder from './ShopOrder';
import { getShopOrders } from '@/actions/orders/getShopOrder';

type Props = {}

const Page = async(props: Props) => {

    const {shop}= JSON.parse(JSON.stringify(await getUser()))
    const sellerId = shop?.userId
    const ordersData = JSON.parse(JSON.stringify(await getShopOrders({sellerId:sellerId})))

  return (
    <>
    <ShopOrder orderdata={ordersData} isDashboard={false} />
    </>
  )
}

export default Page