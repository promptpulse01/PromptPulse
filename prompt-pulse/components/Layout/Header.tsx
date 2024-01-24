"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Navigation from './Navigation'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { FaBars } from 'react-icons/fa'
import { User } from '@clerk/nextjs/server';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FaShoppingCart } from "react-icons/fa";

type Props = {
    activeItem: Number,
    user: User | undefined;
}



const Header = ({ activeItem, user }: Props) => {

    const [active, setactive] = useState(false);
    const [open, setOpen] = useState(false);

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setactive(true);
            } else {
                setactive(false);
            }
        });
    }

    const handleClose = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.id === "screen") {
            setOpen(!open);
        }
    };
    const router = useRouter()

    const goToCart = () => {
        router.push(`/cart/${user?.id}`)
    }

    return (
        <div className={`w-full p-5 border-b min-h-[60px] border-b-[#ffffff32] transition-opacity ${active && "fixed top-0 left-0 bg-[#000] z-[9999]"}`}>
            <div className="hidden md:w-[90%] mx-auto md:flex items-center justify-between">
                <div>
                    <Link href={"/"} className="font-Inter text-3xl cursor-pointer font-semibold">
                        <span className="text-[#64ff4c]">Prompt</span>Pulse
                    </Link>
                </div>
                <div>
                    <Navigation />
                </div>
                <div className='flex items-center ml-10'>
                    <AiOutlineSearch className="text-[25px] mr-5 cursor-pointer text-[#64FF4C] " />
                    <FaShoppingCart className="text-[25px] mr-5 cursor-pointer text-[#64FF4C] " onClick={goToCart} />
                    {user? (
                        <>
                            <Image
                                src={user?.imageUrl}
                                width={45}
                                height={45}
                                alt=''
                                className='cursor-pointer rounded-full'
                                onClick={() => {
                                    router.push(`/profile/${user?.id}`)
                                }}
                            />
                        </>
                    ) : (
                        <>
                            <Link href="/sign-in">
                                <CgProfile className="text-[25px] cursor-pointer" />
                            </Link>
                        </>
                    )}
                </div>
            </div >
            < div className="w-full md:hidden flex items-center justify-between" >
                <div>
                    <Link href="/" className="font-Inter text-3xl cursor-pointer">
                        <span className="text-[#64ff4c]">Prompt</span>Pulse
                    </Link>
                </div>
                <div>
                    <FaBars
                        className="text-2xl cursor-pointer"
                        onClick={() => setOpen(!open)}
                    />
                </div>
                {
                    open && (
                        <div
                            className="fixed md:hidden w-full h-screen top-0 left-0 z-[99999] bg-[unset]"
                            onClick={handleClose}
                            id="screen"
                        >
                            <div className="fixed bg-black h-screen top-0 right-0 w-[60%] z-[9999]">
                                <div className="mt-20 p-5">
                                    <Navigation />
                                </div>
                            </div>
                        </div>
                    )
                }
            </div >
        </div >
    )
}

export default Header