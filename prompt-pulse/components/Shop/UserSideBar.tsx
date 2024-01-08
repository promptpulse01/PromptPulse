'use client'
import React from 'react'
import { GoArrowSwitch } from "react-icons/go";
import Link from "next/link";
import { styles } from "@/utils/styles";
import { CgProfile } from "react-icons/cg";
import { usePathname } from 'next/navigation';
import { useParams } from 'next/navigation';
import { TbMoneybag } from 'react-icons/tb';

const sideBarItems = [
    {
        icon: <CgProfile />,
        title: "Profile",
        href: "",
    },
    {
        icon:<GoArrowSwitch/>,
        title: "Switch to Seller",
        href: `/switch-seller`,
    },
    {
        icon: <TbMoneybag />,
        title: "My Orders",
        href: "/my-order",
    },
  
];

const UserSideBar = () => {
    const pathname = usePathname()
    const params =useParams()
    return (
        <div >
            {sideBarItems.map((item, index) => (
                <div className="w-full mx-5 my-10" key={index}>
                    <Link href={`/profile/${params.profile}${item.href}`}>
                        <div className="flex items-center">
                            <div
                                className={`text-3xl ${`/profile/${params.profile}${item.href}`  !== pathname ? "!text-white" : "!text-[#858DFB]"
                                    }`}
                            >
                                {item.icon}
                            </div>
                            <span
                                className={`${styles.label} ${`/profile/${params.profile}${item.href}`  !== pathname ? "!text-white" : "!text-[#858DFB]"
                                    } pl-4`}
                            >
                                {item.title}
                            </span>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default UserSideBar
