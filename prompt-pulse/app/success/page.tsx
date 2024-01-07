'use client'
import { useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios";
import {useRouter }from "next/navigation";
const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`)

const page = () => {

  const searchParam=useSearchParams()
  const sessionId=searchParam.get("session_id")
  const router=useRouter()
  useEffect(()=>{
    const func=async(sessionId:any)=>{
      const stripe = await stripePromise ;
      if(!stripe){
        return alert("Something went wrong");
    }
      const res= await axios.post("/api/confirm",{sessionId})
      if(res.data.success)
      {
        router.push("/")
      }
    }
    func(sessionId)
   
  },[])
    
  return (
    <div>
      Payment successfull
    </div>
  )
}

export default page