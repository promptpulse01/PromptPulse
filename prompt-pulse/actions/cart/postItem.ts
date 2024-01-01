" use server"
import prisma from "@/lib/prismaDb";
import { NextRequest } from "next/server"

export const createCart = async (req: NextRequest) => {
  try {

    const data = await req.json();

    const newCart = await prisma.cart.create({ data });

    return newCart
  } catch (error) {
    console.log("Error comming while careating cart", error);
  }
}