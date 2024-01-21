import { getCartById } from '@/actions/cart/getCartById';
import { getUser } from '@/actions/users/getUser';
import CartCard from '@/components/cart/cartCard';
import CartComponent from '@/components/cart/CartComponent';
import Header from '@/components/Layout/Header';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

type Props = {
    params: any,
}

const Page = async ({ params }: Props) => {

    const data = JSON.parse(JSON.stringify(await getCartById(params.id)))
    return (
        <>
            <div className="flex flex-col   w-full  min-h-screen bg-black  gap-10  py-10">
                <h1 className=" font-bold text-[#64FF4C] tracking-wider text-center text-5xl ">
                    Cart Page
                </h1>
                <div className=" flex w-full   justify-center items-start px-10 gap-10  ">
                    {data.cartItem ? (
                        <>
                            <div className="flex flex-col justify-start items-center  w-2/3   pt-10  bg-black gap-8 ">
                                {data.cartItem.map((item: any) => (
                                    <CartCard key={item.prompt.id} imageURL={item.prompt.images[0].url} name={item.prompt.name} price={item.prompt.price} id={item.prompt.id} secondaryid={item.id} />
                                ))}
                            </div>
                            <CartComponent data={data} />
                        </>
                    ) : (
                        <div className="flex flex-col justify-start items-center  w-2/3   pt-10  bg-black gap-8 ">
                            <h1 className=" font-bold text-[#64FF4C] tracking-wider text-center text-2xl ">
                                Your cart is currently empty. Please browse our selection and add items to proceed to checkout
                            </h1>
                            <Button className={`bg-slate-900 text-[#ffeb3b] border-[#64FF4C] border-solid border-[1px] rounded-md text-lg w-[260px] h-[40px] font-semibold hover:text-gray-900 hover:bg-[#64FF4C]`} ><Link href={"/"}>Continue Shopping</Link></Button>

                        </div>
                    )}

                </div>
            </div>
        </>

    )
}

export default Page