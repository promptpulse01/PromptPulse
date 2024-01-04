'use client'
import Image from "next/image";
import { TiDelete } from "react-icons/ti";
import Link from "next/link";
import { removeItemById } from "@/actions/cart/removeItemById";
import { useRouter } from "next/navigation";
type Props={
    imageURL:string
    name:string
    price:number
    id:string
    secondaryid:string
}
const CartCard = ({ imageURL, name, price, id,secondaryid }:Props) => {
    const router=useRouter()
    const handleDelete = async(id:string) => {
        const res= await removeItemById(JSON.parse(JSON.stringify({id})))
        console.log(res)
        router.refresh()
    }
    return (
        <>
            <div className=" relative  flex bg-slate-900  h-[25%] w-[80%] pr-10 rounded-xl border-[#64FF4C] border-solid border-[3px] ">
                <button className="absolute -top-4 -right-4 text-[#64FF4C] text-5xl hover:text-green-700" onClick={() => {handleDelete(secondaryid)}}>
                    <TiDelete />
                </button>
                <div className=" w-full flex gap-2 object-cover  ">
                    <div className=" relative w-1/2 rounded-xl  h-full ">
                        <Image
                            src={imageURL}
                            alt={name}
                            fill
                            className='rounded-xl'
                        />
                    </div>
                    <div className=" w-2/3 p-4">
                        <div className="py-2 flex flex-col gap-4  w-full text-[#ffeb3b] h-full items-start">
                            <h2 className="  text-2xl font-bold">
                                {name}
                            </h2>
                            <h1 className="  text-2xl font-bold ">$ {price}</h1>
                            <Link className=" text-xl text-baseline  hover:text-green-700" href={`/prompt/${id}`}>View Prompt</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartCard