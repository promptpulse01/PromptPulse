import Ratings from '@/utils/Ratings'
import { styles } from '@/utils/styles'
import { Avatar, Card, Divider } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    promptdata: any
}

const PromptCard = async ({ promptdata }: Props) => {


    return (
        <div className="w-full flex flex-wrap mt-5">
            {promptdata.map((item: any) => (
                <Card key={item.id}
                    radius="lg"
                    className="w-full md:w-[31%] 2xl:w-[23%] max-h-[410px] p-4 bg-[#130f23] m-3"
                >
                    <div className="relative">
                        <div className='w-full h-[200px]'>
                            <Image
                                src={item?.images[0].url}
                                alt=""
                                className="h-full w-full object-cover rounded-xl"
                                fill
                                loading='lazy'
                            />
                        </div>
                        <div className="absolute bottom-2 left-2">
                            <div className="w-max bg-black hover:bg-[#16252] duration-300 transition-opacity hover:text-black text-white p-[10px] items-center flex rounded-xl">

                                <Image
                                    src="https://pixner.net/aikeu/assets/images/category/chat.png"
                                    width={25}
                                    height={25}
                                    alt=""
                                />

                                <span className={`${styles.label} pl-2 text-white`}>
                                    {item?.category}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-between py-2">
                        <h3 className={`${styles.label} text-[18px] text-white truncate ... w-[209px] `}>
                            {item?.name}
                        </h3>
                        <p className={`${styles.paragraph}`}>${item?.price}</p>
                    </div>
                    <Divider className="bg-[#ffffff18] my-3" />
                    <div className="w-full flex items-center justify-between ">
                        <div className="flex flex-2 items-center">
                            <Avatar src={item?.shop?.avatar} />
                            <span className={`${styles.label} pl-3  truncate ... w-[91px] `}>@{item?.shop?.name}</span>
                        </div>
                        <Ratings rating={item?.rating} />
                    </div>
                    <br />
                    <Link href={`/prompt/${item?.id}`} className="w-full">
                        <div
                            className={`${styles.button} !py-2 !px-3 text-center mb-3 w-full text-white bg-transparent border border-[#16c252] hover:bg-[#16c252] hover:text-black duration-300 transition-opacity font-Inter font-[600]`}
                        >
                            Get Prompts
                        </div>
                    </Link>
                </Card>
            ))}
        </div>
    )
}

export default PromptCard
