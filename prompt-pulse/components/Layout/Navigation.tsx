"use client"

import { usePathname } from "next/navigation"

interface Props {
    activeItem: Number
}

const navItems = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "About Us",
        link: "/about"
    },
    {
        name: "MarketPlace",
        link: "/marketplace"
    },
    {
        name: "Contact Us",
        link: "/contact"
    },
    {
        name: "Policy",
        link: "/policy"
    }
]

const Navigation = () => {
    const pathname = usePathname()
    return (
        <div className='block md:flex'>
            {
                navItems.map((items, index) => (
                    <div key={items.name}>
                        <h5
                            className={`inline-block md:px-4 xl:px-8 py-5 md:py-0 text-[18px] font-[500] font-Inter ${pathname === items.link && "text-[#6dff4b]"
                                } cursor-pointer`}
                        >
                            {items.name}
                        </h5>
                    </div>
                ))
            }
          
        </div>
    )
}

export default Navigation
