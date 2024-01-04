import { getCartById } from '@/actions/cart/getCartById';
import { getUser } from '@/actions/users/getUser';
import CartCard from '@/components/cart/cartCard';
import CartComponent from '@/components/cart/CartComponent';
import Header from '@/components/Layout/Header';
import React from 'react';

type Props = {
    params: any,
}

const Page = async ({ params }: Props) => {

    const data = JSON.parse(JSON.stringify(await getCartById(params.id)))

    const { user } = JSON.parse(JSON.stringify(await getUser()))


    return (
        <>
            <Header activeItem={1} user={user} />
            <div className="flex flex-col   w-full  min-h-screen bg-black  gap-10  py-10">
                <h1 className=" font-bold text-[#64FF4C] tracking-wider text-center text-5xl ">
                    Cart Page
                </h1>
                <div className=" flex w-full   justify-center items-start px-10 gap-10  ">
                    <div className="flex flex-col justify-start items-center  w-2/3   pt-10  bg-black gap-8 ">
                        {data.cartItem.map((item: any) => (
                            <CartCard key={item.prompt.id} imageURL={item.prompt.images[0].url} name={item.prompt.name} price={item.prompt.price} id={item.prompt.id} secondaryid={item.id} />
                        ))}
                    </div>
                    <CartComponent data={data} />

                </div>
            </div>
        </>

    )
}

export default Page