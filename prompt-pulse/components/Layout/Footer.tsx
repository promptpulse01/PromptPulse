import { styles } from '@/utils/styles'
import Link from 'next/link'
import React from 'react'

interface Props {

}

const Footer = (props: Props) => {
    return (
        <div className="mt-8">
            <div className="w-full mb-5 flex justify-between items-center">
                <div>
                    <Link href={"/"}>
                        <h1 className="font-Inter text-3xl cursor-pointer">
                            <span className="text-[#64ff4c]">Prompt</span>Pulse
                        </h1>
                    </Link>
                </div>
                <div>
                    <ul className="flex items-center flex-wrap">
                        <li>
                            <Link
                                href="/"
                                className={`${styles.label} hover:text-[#64ff4b] duration-200 transition px-4`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contactus"
                                className={`${styles.label} hover:text-[#64ff4b] duration-200 transition px-4`}
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/marketplace"
                                className={`${styles.label} hover:text-[#64ff4b] duration-200 transition px-4`}
                            >
                                MarketPlace
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <p className={`${styles.paragraph} text-center`}>
                Copyright © 2023 Prompt Pulse . All Rights Reserved
            </p>
            <br />
            <br />
        </div>
    )
}

export default Footer
