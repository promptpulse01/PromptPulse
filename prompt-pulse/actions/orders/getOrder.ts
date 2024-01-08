"use server"
import { NextResponse } from "next/server";
import prisma from "@/lib/prismaDb";
import { User, currentUser } from "@clerk/nextjs/server";

export const getOrder = async () => {
    try {
        const user: User | null = await currentUser()

        if (!user) {
            return new NextResponse("Please login to access this resources!", {
                status: 400,
            });
        }

        const orders = await prisma.orders.findMany({
            where: {
                userId: user?.id,
            },
            include: {
                prompt: {
                    include: {
                        promptUrl: true,
                        reviews: true,
                    },
                },
            },
        });

        return orders

    } catch (error) {
        console.log(error)
    }
}