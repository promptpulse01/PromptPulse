import { getUser } from "@/actions/users/getUser";
import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(`${process.env.STRIPE_API_KEY}`, {
  apiVersion: "2023-10-16", 
});

export default async function getStripe(sessionId:string) {
    try{
      const session = await stripe.checkout.sessions.retrieve(sessionId)
      return NextResponse.json(session);
    }
    catch(error)
    {
      return NextResponse.json({error})
    }
}