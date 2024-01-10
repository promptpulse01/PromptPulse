import React from 'react'
import { getUser } from '@/actions/users/getUser'

type Props = {}

const Page = async (props: Props) => {

    const user = JSON.parse(JSON.stringify(await getUser()))

    return (
        <>

            <div className="flex flex-col min-h-screen w-full bg-gray-950 pb-10">
                <div className=" text-5xl font-bold text-[#64ff4c]   mt-10  text-center">
                    Get in Touch with us
                </div>
                <div className="relative h-[48vh] bg-gray-950 w-full mt-10">
                    <img
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29ycG9yYXRlJTIwZW52aXJvbm1lbnR8ZW58MHx8MHx8fDA%3D"
                        alt="image"
                        className="  opacity-30  w-full h-full object-cover "
                    />
                    <p className=" text-6xl font-bold text-white absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                        Contact us
                    </p>
                </div>
                <div className=" flex justify-around items-center text-gray-200  text-xl font-semibold mt-20">
                    <div className=" flex flex-col  items-center gap-2">
                        <h2 className="text-2xl font-bold text-[#64ff4c]    ">Phone</h2>
                        <a href="tel:678-136-7092">678-136-7092</a>
                    </div>
                    <div className=" flex flex-col  items-center gap-2">
                        <h2 className="text-2xl font-bold text-[#64ff4c]    ">Email</h2>
                        <a href="mailto:promptpulse0@gmail.com"  > promptpulse0@email.com</a>
                    </div>
                    <div className=" flex flex-col  items-center gap-2">
                        <h2 className="text-2xl font-bold text-[#64ff4c]    ">For Suggetion</h2>
                        <a href="mailto:promptpulse0@gmail.com">promptpulse0@email.com</a>
                    </div>
                </div>
                <div className=" flex  flex-col gap-4 text-gray-200 justify-center items-center mt-20 tracking-wider text-xl font-semibold">
                    <p>
                        <span className="text-[#64ff4c]     font-bold">Oue Team </span>is happy
                        and ready to assist you
                    </p>
                    <p>
                        Please! Allow up to{" "}
                        <span className="text-[#64ff4c]     font-bold">2 business days</span> for
                        response
                    </p>
                    <p>
                        you can also ans{" "}
                        <span className="text-red-400 font-bold"> your query </span>in our{" "}
                        <span className="text-[#64ff4c]     font-bold">policy section</span>{" "}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Page