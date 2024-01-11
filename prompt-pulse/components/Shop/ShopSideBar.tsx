'use client'
import React from 'react'
import { GoArrowSwitch, GoHome } from "react-icons/go";
import { BsWallet2 } from "react-icons/bs";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { TbMoneybag } from "react-icons/tb";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import Link from "next/link";
import { styles } from "@/utils/styles";
import { CgProfile } from "react-icons/cg";
import { usePathname } from 'next/navigation';
import { useParams } from 'next/navigation';

const sideBarItems = [
    {
        icon: <CgProfile />,
        title: "Profile",
        href: "",
    },
    {
        icon: <GoHome />,
        title: "Dashboard",
        href: "/my-shop",
    },
    {
        icon: <MdOutlineCreateNewFolder />,
        title: "Upload Prompt",
        href: `/upload-prompt`,
    },
    {
        icon: <BsWallet2 />,
        title: "Prompts",
        href: "/prompts",
    },
    {
        icon: <TbMoneybag />,
        title: "Shop Orders",
        href: "/shop-order",
    },
    {
        icon: <LiaFileInvoiceDollarSolid />,
        title: "Invoices",
        href: "/invoices",
    },
    {
        icon: <BiMoneyWithdraw />,
        title: "Withdraw Earnings",
        href: "/withdraw",
    },
    {
        icon: <TbMoneybag />,
        title: "My Orders",
        href: "/my-order",
    },
  
];

const ShopSidebar = () => {
    const pathname = usePathname()
    const params= useParams()
    return (
        <div>
            {sideBarItems.map((item, index) => (
                <div className="w-full mx-5 my-10" key={index}>
                    <Link href={`/profile/${params.profile}${item.href}`}>
                        <div className="flex items-center">
                            <div
                                className={`text-3xl ${ `/profile/${params.profile}${item.href}` !== pathname ? "!text-white" : "!text-[#858DFB]"
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

export default ShopSidebar
