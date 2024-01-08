import { getUser } from "@/actions/users/getUser";
import prisma from "@/lib/prismaDb";
import { getCartById } from "@/actions/cart/getCartById";
import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(`${process.env.STRIPE_API_KEY}`, {
  apiVersion: "2023-10-16",
});

export async function POST(req: NextRequest) {

  const { sessionId } = await req.json();
  const session = await stripe.checkout.sessions.retrieve(sessionId)
  if (!session) return NextResponse.json({ error: "Session Not Found" })
  if (session.payment_status !== "paid") return NextResponse.json({ error: "Payment Not Completed" })

  const { user }: any = await getUser();
  if (!user) return NextResponse.json({ error: "User Not Found" })

  const data: any = await getCartById(user.id)
  if (!data.cartItem || !data.cart) return NextResponse.json({ error: "Cart Not Found" })
  console.log(data.cartItem)

  await prisma.orders.createMany({
    data: data.cartItem.map((item: any) => {
      return {
        userId: user.id as string,
        promptId: item.promptId as string,
        payment_id: session.payment_intent as string,
        payment_method: session.payment_method_types[0] as string,
      }
    })
  })


  await prisma.cart.update({
    where: {
      id: data.cart[0].id
    },
    data: {
      isPaid: true,
      payment_id: session.payment_intent as string,
      payment_method: session.payment_method_types[0] as string
    }
  })
  return NextResponse.json("success");
}

