"use server"
import { User, currentUser } from '@clerk/nextjs/server'
import prisma from '@/lib/prismaDb'

export const getPrompts = async () => {
    try {
        const user: User | null = await currentUser()

        if (!user) {
            return null
        }

        const prompt = await prisma.prompts.findMany({
            where: {
                sellerId: user.id
            },
            include:{
                orders:true,
            }
        })
        return  prompt
    } catch (error) {
        console.log("load user error", error);
    }
};