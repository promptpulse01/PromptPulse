"use client"
import UserSideBar from '@/components/Shop/UserSideBar'
import { styles } from '@/utils/styles'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {}

const Page = (props: Props) => {

    const router = useRouter()

    const handleClick = () => {
        router.push('/create-shop')
    }

    return (
        <div className="flex w-full">
            <div className="h-screen flex p-2 bg-[#111C42] md:w-[20%] 2xl:w-[17%]">
                <UserSideBar active={1} />
            </div>
            <div className="md:w-[80%] 2xl:w-[83%]">
                <h1 className='text-center mt-10'>Switch to Seller</h1>
                <div className='flex justify-center items-center'>
                    <Button className={`${styles.button}} bg-blue-600  mt-10`} onClick={handleClick}> Submit </Button>
                </div>
            </div>
        </div>
    )
}

export default Page