import prisma from "@/lib/prismaDb";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
    try {
        const data = await req.json();
        const { id } = data;
        const deleteitem = await prisma.cartItem.delete({
            where: {
              id: id,
            },
          })
        return NextResponse.json(deleteitem);
    }catch(error){
        return new NextResponse("Internal Error", { status: 500 });
    }
}