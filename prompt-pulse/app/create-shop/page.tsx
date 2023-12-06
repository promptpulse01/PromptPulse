"use client"
import { styles } from '@/utils/styles'
import { useUser } from '@clerk/nextjs'
import { Button, Input, Textarea } from '@nextui-org/react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import {toast} from "sonner"

interface Props {

}

const Page = (props: Props) => {

    const { user } = useUser()

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        shopProductsType: "",
        avatar: user?.imageUrl || "",
    })

    const router = useRouter()

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        if (user) {
            const data = {
                name: formData.name,
                description: formData.description,
                shopProductsType: formData.shopProductsType,
                avatar: user?.imageUrl || "",
                userId: user?.id,
            };

            await axios.post('/api/create-shop',
                data
            ).then((res) => {
                setFormData({
                    name: "",
                    description: "",
                    shopProductsType: "",
                    avatar: user?.imageUrl || "",
                })
                console.log("object")
                toast.success("Shop created successfully",{
                    className: "font-Monserrat text-green-500",
                })
                router.push('/')
            }).catch((error) => {
                toast.error("User has already created a shop",{
                    className: "font-Monserrat text-red-500",
                })
                console.log(error)
            })
        }
    }
    return (
        <div className="w-full h-screen flex flex-col justify-center">
            <div>
                <h1 className={`${styles.heading} text-center font-Monserrat`}>
                    Start to selling with us
                </h1>
                <form className="2xl:w-[40%] xl:w-[50%] md:w-[70%] w-[90%] m-auto" onSubmit={handleSubmit}>
                    <div className="w-full my-5">
                        <label className={`${styles.label} mb-2 block`}>Shop Name</label>
                        <Input
                            isRequired
                            type="name"
                            label="Enter Shop name"
                            size="sm"
                            variant="bordered"
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-full my-5">
                        <label className={`${styles.label} mb-2 block`}>
                            Shop Description (Max 120 letters)
                        </label>
                        <Input
                            isRequired
                            type="text"
                            label="lorem ipsum"
                            size="sm"
                            variant="bordered"
                            maxLength={120}
                            name='description'
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-full my-5">
                        <label className={`${styles.label} mb-2 block`}>
                            What you wanna sale with us?
                        </label>
                        <Textarea
                            variant="bordered"
                            required
                            placeholder="Chatgpt,Midjoureney Prompts..."
                            className="col-span-12 md:col-span-6 md:mb-0"
                            name='shopProductsType'
                            value={formData.shopProductsType}
                            onChange={handleChange}
                        />
                        <br />
                        <Button
                            className="mb-3 w-full bg-transparent h-[45px] border border-[#16c252] text-[#16c252] hover:bg-[#16c252] hover:text-black duration-300 transition-opacity font-Inter font-[600]"
                            type="submit"
                        >
                            Create Shop
                        </Button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Page
