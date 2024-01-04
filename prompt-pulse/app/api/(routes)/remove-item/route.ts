import prisma from "@/lib/prismaDb";
import { NextRequest, NextResponse } from "next/server";
export async function DELETE({params}:{params:{id:string}}) {
  try {
    const id=params.id
    const deleteitem = await prisma.cartItem.delete({
      where: {
        id: id,
      },
      })
      console.log(deleteitem)
    return NextResponse.json(deleteitem);
  }catch(error){
    return new NextResponse("Internal Error", { status: 500 });
  }
} 