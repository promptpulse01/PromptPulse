import { getInvoice } from '@/actions/invoices/getInvoice';
import { getSellerInfo } from '@/actions/shops/getSellerInfo';
import React from 'react'
import Invoice from './Invoice';

type Props = {}

const Page = async (props: Props) => {

  const {shop,orders}: any = JSON.parse(JSON.stringify(await getSellerInfo()))
  const sellerId =  shop.id
  const invoices = JSON.parse(JSON.stringify(await getInvoice( { sellerId: sellerId})))
  return (
    <>
    <Invoice invoices={invoices} />
    </>
  )
}

export default Page