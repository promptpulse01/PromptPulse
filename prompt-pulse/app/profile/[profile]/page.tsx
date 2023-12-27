import { getUser } from '@/actions/users/getUser'
import React from 'react'

type Props = {}

const page = async (props: Props) => {

    const { user, shop } = JSON.parse(JSON.stringify(await getUser()))

    return (
        <>
            <h1 className="text-4xl  font-bold mt-10 text-[#858DFB] text-center">My&nbsp;<span className="text-4xl text=[#858DFB] font-bold uppercase">Profile</span></h1>
            <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover flex justify-center  items-center h-[85%]  w-full  ">
                <div className=" flex h-3/4 w-3/4   bg-slate-900/75 rounded-xl gap-10 pr-8 mb-20">
                    <div className="flex justify-center items-center w-1/3   rounded-full">
                        <img
                            src={user?.imageUrl}
                            className=" w-80  h-80 rounded-full ml-10 "
                        />
                    </div>
                    <div className=" w-2/3 py-7 ">
                        <form>
                            <div className="mb-10 mt-5">
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Name
                                </label>
                                <div className="flex">

                                    <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        {user.firstName} { } {user.lastName}
                                    </div>
                                </div>
                            </div>
                            <div className="mb-10">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your Email
                                </label>
                                <div className="flex">

                                    <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        {user?.emailAddresses[0].emailAddress}
                                    </div>
                                </div>
                            </div>

                            <div className="mb-10">
                                <label
                                    htmlFor="Roll"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Roll
                                </label>
                                <div className="flex">
                                    <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        {shop ? ("Seller") : ("Buyer")}
                                    </div>
                                </div>
                            </div>
                            {shop ? (
                                <>
                                    <div className="mb-10">
                                        <label
                                            htmlFor="Shope name"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Shop Name
                                        </label>
                                        <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            {shop?.name}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                               <div className="mb-10">
                                        <label
                                            htmlFor="Shope name"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Shop Name
                                        </label>
                                        <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                           You don't own any shop, switch to seller to create a shop
                                        </div>
                                    </div>
                                </>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page