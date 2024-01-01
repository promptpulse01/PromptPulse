import prisma from "@/lib/prismaDb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        const newCart = await prisma.cart.create({ data });

        return NextResponse.json(newCart);
    } catch (error) {
        console.log("create shop error", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}