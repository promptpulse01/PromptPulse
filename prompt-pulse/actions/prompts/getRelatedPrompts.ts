"use server"
import { User, currentUser } from '@clerk/nextjs/server'
import prisma from '@/lib/prismaDb'

export const getRelatedPrompts = async (promptCategory:string) => {
    try {

        const prompt: any = await prisma.prompts.findMany({
            include: {
                orders: true,
                images: true,
                reviews: true,
                promptUrl: true,
            },
            where: {
                category: promptCategory,
            },
        });

        for (const singlePrompt of prompt) {
            if (singlePrompt) {
                const shop = await prisma.shops.findUnique({
                    where: {
                        userId: singlePrompt?.sellerId,
                    },
                });
                singlePrompt.shop = shop;
            }
        }

        return prompt
    } catch (error) {
        console.log("load user error", error);
    }
};