"use server"
import { NextResponse } from "next/server";
import prisma from "@/lib/prismaDb";


export const getCartById = async (userId: string) => {
  try {
    if (!userId) {
      return new NextResponse("Missing 'userId' query parameter", {
        status: 400,
      });
    }

    const cart: any = await prisma.cart.findMany({
      include: {
        items: true,
      },
      where: {
        userId: userId,
        isPaid: false
      },
    });

    const cartItem: any = await prisma.cartItem.findMany({
      include: {
        prompt: {
          include:{
            images:true
          }
        },
      },
      where: {
        cartId: cart[0].id,
      },
    });

    return { cart, cartItem };
  } catch (error) {
    console.log("get prompts error", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};