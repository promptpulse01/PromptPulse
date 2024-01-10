import Link from 'next/link'
import React from 'react'
import about from '@/public/Assets/about.png'

type Props = {}

const Page = (props: Props) => {
    return (
        <>
            <div className=" text-4xl  font-bold text-white text-center pt-10">
                Unlocking Innovation: About <span className='text-[#64ff4c]'>Prompt Pulse</span>
            </div>
            <div className=" flex w-full min-h-screen justify-center items-center bg-gray-950 ">
                <div className="flex  w-[80%]  h-[70vh] rounded-xl">
                    <div className=" w-[50%] h-full bg-gray-950">
                        <img
                            src={about.src}
                            alt="image"
                            className="w-full h-full  opacity-80 block bg-cover rounded-xl "
                        />
                    </div>
                    <div className="flex flex-col text-gray-200    h-full w-[50%]    pl-20   ">
                        <h1 className=" text-4xl font-bold text-[#64ff4c]">About Us</h1>
                        <div className="flex flex-col mt-5 h-full justify-start items-start">
                            <p className="mt-5 text-2xl font-semibold">
                                At PromptPulse, we empower creative minds with the hidden language of AI. We're not just a marketplace, we're a vibrant community where seasoned prompt engineers unlock the secrets of DALL-E, ChatGPT, and beyond, and aspiring creators fuel their imaginations with ready-made magic. Whether you're chasing the perfect AI-generated masterpiece or want to monetize your mastery of code-whispering, PromptPulse is your pulse on the future of creativity. Join us, spark the revolution, and let your imagination rule the pixels, prose, and possibilities
                            </p>
                            <Link href={'/contact'} className="mt-10 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-bold rounded-lg text-xl px-8 py-3 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                Contact Us
                            </Link >
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page