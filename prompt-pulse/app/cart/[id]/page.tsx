import { getCartById } from '@/actions/cart/getCartById'
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { TiDelete } from "react-icons/ti";

type Props = {
    params: any
}

const Page = async ({ params }: Props) => {

    const data = JSON.parse(JSON.stringify(await getCartById(params.id)))
    console.log(data.cartItem)



    return (
        <div className="flex flex-col   w-full min-h-screen bg-black  gap-10 pt-10">
            <h1 className=" font-bold text-[#64FF4C] tracking-wider text-center text-5xl ">
                Cart Page
            </h1>
            <div className=" flex w-full   justify-center items-start px-10 gap-10">
                <div className="flex flex-col justify-start items-center  w-2/3   pt-10  bg-black gap-8 ">
                    {data.cartItem.map((item: any) => (
                        <>
                            <div className=" relative  flex bg-slate-900  h-[240px] w-[90%] pr-10 rounded-xl">
                                <button className="absolute -top-4 -right-4 text-[#64FF4C] text-5xl hover:text-green-700">
                                    <TiDelete />
                                </button>
                                <div className=" w-full flex gap-2 object-cover  ">
                                    <div className=" relative w-1/2 rounded-xl  h-full ">
                                        <Image
                                            src={item.prompt.images[0].url}
                                            alt={item.prompt.name}
                                            fill
                                            className='rounded-xl'
                                        />
                                    </div>
                                    <div className=" w-2/3 p-4">
                                        <div className="py-2 flex flex-col gap-4  w-full h-full items-start">
                                            <h2 className=" text-[#64FF4C] text-2xl font-bold">
                                                {item.prompt.name}
                                            </h2>
                                            <h1 className=" text-[#64FF4C] text-2xl font-bold ">$ {item.prompt.price}</h1>
                                            <button className="text-[#64FF4C] text-xl text-baseline  hover:text-green-700">
                                                {` View Prompt ->`}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
                <div className=" rounded-xl flex justify-around flex-col w-[25%] h-[240px] mt-10 font-semibold bg-slate-900  text-[#64FF4C] py-10 gap-4 px-2">
                    <div className=" flex gap-4 flex-col">
                        <div className=" flex justify-around">
                            <span className=" text-xl">Sub Total  : </span>
                            <span className="text-2xl">$ { } {data.cartItem.reduce((total: any, item: any) => total + item.prompt.price, 0)}</span>
                        </div>
                        <div className=" flex justify-around ">
                            <span className="text-xl">Platform Fee:</span>
                            <span className="text-2xl">$ { } {data.cartItem.reduce((total: any, item: any) => total + item.prompt.price, 0) * 0.03}</span>
                        </div>
                    </div>
                    <div className=" flex justify-around  border-solid border-t-2 border-green-500">
                        <span className=" text-xl mt-5">Grand Total :</span>
                        <span className=" text-2xl mt-5">$ {(data.cartItem.reduce((total: any, item: any) => total + item.prompt.price, 0) * 1.03).toFixed(2)}</span>
                    </div>
                </div>
                   {/* <div className=''>
                   <Button className='bg-[#2551b0]   text-white text-xl w-[150px] h-[40px] font-semibold ' >Check Out </Button>
                   </div>
                   <div className=''>
                   <Button className='bg-[#2551b0]   text-white text-xl w-[150px] h-[40px] font-semibold ' >Continue Shopping</Button>
                   </div> */}
            </div>
        </div>

    )
}

export default Page