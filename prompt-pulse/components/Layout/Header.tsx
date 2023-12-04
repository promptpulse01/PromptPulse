"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Navigation from './Navigation'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { RxCross1 } from "react-icons/rx";
import { FaBars } from 'react-icons/fa'
import { User, currentUser } from '@clerk/nextjs/server';
import Image from 'next/image'
import DropDown from './DropDown'
import { UserProfile, useClerk } from '@clerk/nextjs'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { styles } from '@/utils/styles'

type Props = {
    activeItem: Number,
    user: User | null;
}



const Header = ({ activeItem, user }: Props) => {

    const [active, setactive] = useState(false);
    const [open, setOpen] = useState(false);
    const [activeProfile, setActiveProfile] = useState(false)

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

    
    const handleProfile = () => {
        setActiveProfile(!activeProfile)
    }

    const { signOut } = useClerk();
    const router = useRouter()

    const handlelogout = async()=>{
       await signOut()
       router.push("/sign-in");
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
                    <Navigation activeItem={activeItem} />
                </div>
                <div className='flex items-center ml-10'>
                    <AiOutlineSearch className="text-[25px] mr-5 cursor-pointer " />
                    {user ? (
                        <>
                        {/* <h1>Rajan</h1> */}
                            <Image
                                src={user?.imageUrl}
                                width={45}
                                height={45}
                                alt=''
                                className='cursor-pointer rounded-full'
                            />
                            {/* <Button  className={`${styles.button} !py-2 !px-3 text-center mb-3 ml-10 mt-4 w-full text-white bg-transparent border border-[#16c252] hover:bg-[#16c252] hover:text-black duration-300 transition-opacity font-Inter font-[600]`} onClick={handlelogout}>Logout</Button> */}
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
            {/* <div className="w-full fixed h-screen overflow-hidden flex justify-center items-center top-0 left-0 bg-[#00000068] z-[9999]">
                <div className="w-min relative h-[90vh] overflow-y-scroll bg-white rounded-xl shadow">
                    <UserProfile />
                    <RxCross1
                        className="absolute text-black text-2xl top-10 right-10 cursor-pointer"
                    />
                </div>
            </div> */}
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
                                    <Navigation activeItem={activeItem} />
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