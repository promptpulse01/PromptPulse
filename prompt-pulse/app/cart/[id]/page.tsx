import { getCartById } from '@/actions/cart/getCartById'
import Link from 'next/link'
import React from 'react'

type Props = {
    params: any
}

const Page = async ({ params }: Props) => {

    const data = JSON.parse(JSON.stringify(await getCartById(params.id)))
    console.log(data.cartItem)



    return (
        <div className="p-10">
            <h1 className="text-2xl  text-center text-white">Your&nbsp;<span className="text-2xl font-bold text-white uppercase">Cart</span></h1>

            <div className="mt-10 flex flex-col-reverse md:flex-row gap-10">
                <div className="flex-1">
                    <h1 className="font-semibold text-lg text-gray-700">All Items</h1>
                    <div className="h-1 my-2 bg-gray-700"></div>
                    {data.cartItem === 0 ? (
                        <>
                        <h1>Empty Cart</h1>
                        </>
                    ):(<>
                    <div className='flex '>

                    </div>
                    </>)}
                </div>
            </div>
        </div>

    )
}

export default Page