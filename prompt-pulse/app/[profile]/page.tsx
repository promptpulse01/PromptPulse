import { getUser } from '@/actions/users/getUser'
import ShopSidebar from '@/components/Shop/ShopSideBar'
import UserSideBar from '@/components/Shop/UserSideBar'
import React from 'react'

type Props = {}

const Page = async (props: Props) => {


    const { user, shop } = JSON.parse(JSON.stringify(await getUser()))
    // console.log(user)
    // console.log(shop)
    return (
        <div className="flex w-full">
            <div className="h-screen sticky top-0 left-0 flex p-2 bg-[#111C42] md:w-[20%] 2xl:w-[17%]">
                {
                    shop ? (
                        <ShopSidebar active={0} />
                    ):(
                        <UserSideBar active={0}/>
                    )
                }
            </div>
            <div className="md:w-[80%] 2xl:w-[83%]">
            </div>
        </div>
    )
}

export default Page