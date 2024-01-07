import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(`${process.env.STRIPE_API_KEY}`, {
    apiVersion: "2023-10-16", 
});

export  async function POST(req: NextRequest,res:NextResponse) {
        const {price}=await req.json();
        try{
            const date= new Date().toISOString().slice(0, 10); 
            const session = await stripe.checkout.sessions.create({
                line_items: [
                    {
                        price_data: {
                            currency: "usd",
                            product_data: {
                                name: "INV-"+date,
                            },
                            unit_amount: Math.round(price*100),
                        },
                        quantity: 1,
                    }
                ],
                mode: "payment",
                success_url: "http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}",
                cancel_url: "http://localhost:3000/cancel",
            })
            return NextResponse.json({sessionId:session.id})
        }
        catch(error)
        {
            return NextResponse.json({error})
        }
    }