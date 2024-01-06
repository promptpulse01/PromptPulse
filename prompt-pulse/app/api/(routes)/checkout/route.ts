import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(`${process.env.STRIPE_API_KEY}`, {
    apiVersion: "2023-10-16", 
});

export  async function POST(req: NextRequest,res:NextResponse) {
        const {price}=await req.json();
        try{
            const session = await stripe.checkout.sessions.create({
                line_items: [
                    {
                        price_data: {
                            currency: "usd",
                            product_data: {
                                name: "T-Shirt",
                            },
                            unit_amount: Math.round(price),
                        },
                        quantity: 1,
                    }
                ],
                mode: "payment",
                success_url: "http://localhost:3000/success",
                cancel_url: "http://localhost:3000/cancel",
            })
            return NextResponse.json({sessionId:session.id})
        }
        catch(error)
        {
            return NextResponse.json({error})
        }
    }