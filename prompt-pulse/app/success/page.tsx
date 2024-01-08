'use client'
import { useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`)

const page = () => {

  const searchParam = useSearchParams()
  const sessionId = searchParam.get("session_id")
  const router = useRouter()
  useEffect(() => {
    const func = async (sessionId: any) => {
      const stripe = await stripePromise;
      if (!stripe) {
        return alert("Something went wrong");
      }
      const res = await axios.post("/api/confirm", { sessionId })
      console.log(res)
      if (res.data.success) {
        router.push("/")
      }
    }
    func(sessionId)

  }, [])

  return (
    <>
      <h1 className=" font-bold text-[#64FF4C] tracking-wider text-center text-5xl ">
       Payment Succesfull
      </h1>
      <Link className=" font-bold text-[#64FF4C] tracking-wider text-center text-5xl " href={'/'}>Go to Main Page</Link>
    </>
  )
}

export default page