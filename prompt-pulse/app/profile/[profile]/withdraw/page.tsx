import { getInvoice } from '@/actions/invoices/getInvoice'
import { getSellerInfo } from '@/actions/shops/getSellerInfo'
import React from 'react'
import WithDraw from './WithDraw'

type Props = {}

const page = async (props: Props) => {

    const {shop,orders}: any = JSON.parse(JSON.stringify(await getSellerInfo()))
    const sellerId =  shop.id
    const invoices = JSON.parse(JSON.stringify(await getInvoice( { sellerId: sellerId})))


    return (
        <div>
            <>
                <WithDraw
                    shop={shop}
                    orders={orders}
                    invoices={invoices} />
            </>
        </div>
    )
}

export default page