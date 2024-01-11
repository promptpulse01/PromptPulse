import { getInvoice } from '@/actions/invoices/getInvoice';
import { getSellerInfo } from '@/actions/shops/getSellerInfo';
import React from 'react'

type Props = {}

const Page = async (props: Props) => {

  const data: any = JSON.parse(JSON.stringify(await getSellerInfo()))
  const invoices = JSON.parse(JSON.stringify(await getInvoice({ sellerId: data && data?.shop[0]?.userId })))
  return (
    <div>Page</div>
  )
}

export default Page