"use client"
import { Button } from "@nextui-org/react"
import { useRouter } from "next/navigation"
import CheckOut from "../checkout/Checkout"


const CartComponent = ({ data }: any) => {
    const subTotal = data.cartItem.reduce(
        (total: any, item: any) => total + item.prompt.price,
        0
    )
    const platformFee = subTotal * 0.02
    const total = subTotal + platformFee

    const router = useRouter()



    return (
        <div className=" flex justify-around flex-col w-[25%]  mt-10">
            <div className=" rounded-xl  font-semibold bg-slate-900 h-[25%] text-[#ffeb3b] py-10 gap-4 px-2 border-[#64FF4C] border-solid border-[3px] ">
                <div className=" flex gap-4 flex-col">
                    <div className=" flex justify-around">
                        <span className=" text-xl text-[#ffeb3b]">Sub Total : </span>
                        <span className="text-2xl">
                            $ { }{" "}
                            {subTotal}
                        </span>
                    </div>
                    <div className=" flex justify-around ">
                        <span className="text-xl text-[#ffeb3b]">Platform Fee:</span>
                        <span className="text-2xl">
                            $ { }{" "}
                            {platformFee.toFixed(2)}
                        </span>
                    </div>
                </div>
                <div className=" flex justify-around  border-solid border-t-2 border-green-500">
                    <span className=" text-xl mt-5 text-[#ffeb3b]">Grand Total :</span>
                    <span className=" text-2xl mt-5">
                        ${" "}
                        {total.toFixed(2)}
                    </span>
                </div>
            </div>
            <div className="flex flex-col   justify-around items-center gap-5  mt-7">
                <CheckOut cart={data.cart} price={total}/>
                <Button className={`bg-slate-900 text-[#ffeb3b] border-[#64FF4C] border-solid border-[1px] rounded-md text-lg w-[260px] h-[40px] font-semibold hover:text-gray-900 hover:bg-[#64FF4C]`} onClick={() => { router.push('/') }}>Continue Shopping</Button>
            </div>
        </div>
    )
}

export default CartComponent