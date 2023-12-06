import React from 'react'
import { GoArrowSwitch } from "react-icons/go";
import Link from "next/link";
import { styles } from "@/utils/styles";
import { CgProfile } from "react-icons/cg";

interface Props {
    active: number
}
const sideBarItems = [
    {
        icon: <CgProfile />,
        title: "Profile",
        href: "/profile",
    },
    {
        icon:<GoArrowSwitch/>,
        title: "Switch to Seller",
        href: "/profile/switch-seller",
    }
  
];

const UserSideBar = ({ active }: Props) => {
    return (
        <div>
            {sideBarItems.map((item, index) => (
                <div className="w-full mx-5 my-10" key={index}>
                    <Link href={item.href}>
                        <div className="flex items-center">
                            <div
                                className={`text-3xl ${active !== index ? "!text-white" : "!text-[#858DFB]"
                                    }`}
                            >
                                {item.icon}
                            </div>
                            <span
                                className={`${styles.label} ${active !== index ? "!text-white" : "!text-[#858DFB]"
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
