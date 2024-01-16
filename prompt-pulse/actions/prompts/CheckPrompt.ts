"use server"
import prisma from '@/lib/prismaDb'
import { NextRequest , NextResponse} from 'next/server'
import { User, currentUser } from '@clerk/nextjs/server'

export const CheckPrompt = async(promptId:string) => {

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
                promptId: promptId,
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
        if(orders.length>0)
        {
            return true
        }
        return false

    } catch (error) {
        console.log(error)
    }    
}