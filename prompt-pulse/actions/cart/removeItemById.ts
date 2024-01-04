'use server'
import prisma from "@/lib/prismaDb";
import { NextResponse } from "next/server";

export async function removeItemById(data:{id:string}) {
    try {
        const { id } = data;
        const deleteitem = await prisma.cartItem.delete({
            where: {
              id: id,
            },
          })
        return "success";
    }catch(error){
        return new NextResponse("Internal Error", { status: 500 });
    }
}