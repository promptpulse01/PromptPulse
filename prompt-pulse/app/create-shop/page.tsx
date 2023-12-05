"use client"
import { styles } from '@/utils/styles'
import { Button, Input, Textarea } from '@nextui-org/react'
import React, { useState } from 'react'

interface Props {

}

const Page = (props: Props) => {

    const [formData, setFormData] = useState({
        shopname: "",
        shopdescription: "",
        shopitems: ""
    })

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(formData)
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
                            name='shopname'
                            value={formData.shopname}
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
                            name='shopdescription'
                            value={formData.shopdescription}
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
                            name='shopitems'
                            value={formData.shopitems}
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
