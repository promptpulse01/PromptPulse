'use client'
import { useSearchParams } from "next/navigation"
import { useEffect, useRef } from "react"
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios";
import { useRouter } from "next/navigation";
const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`)

const page = () => {

  const searchParam = useSearchParams()
  const sessionId = searchParam.get("session_id")
  const router = useRouter()
  const effectRan = useRef(false);
  useEffect(() => {
    const abortController = new AbortController();
    const func = async (sessionId: any) => {
      if (!effectRan.current) {
        const stripe = await stripePromise;
        if (!stripe) {
          return alert("Something went wrong");
        }
        const res = await axios.post("/api/confirm", { sessionId,signal: abortController.signal })
        if (res) {
          router.push("/")
        }
      }
    
    }

    func(sessionId)
    return () => effectRan.current = true;

  }, [])



  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-semibold">Just a moment, please! We're putting the finishing touches on your order.</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default page