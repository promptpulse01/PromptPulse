"use server"
import { User, currentUser } from '@clerk/nextjs/server'
import prisma from '@/lib/prismaDb'


export const getUser = async () => {
    try {
        const user: User | null = await currentUser()

        if (!user) {
            return null
        }

        const shop = await prisma.shops.findUnique({
            where: {
                userId: user.id
            }
        })
        return { user, shop }
    } catch (error) {
        console.log("load user error", error);
    }
}