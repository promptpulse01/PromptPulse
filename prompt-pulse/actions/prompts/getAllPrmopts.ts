"use server"
import prisma from '@/lib/prismaDb'

export const getAllPrompts = async (pageNumber = 1, pageSize = 8) => {
    try {
        const prompt = await prisma.prompts.findMany({
            include: {
                orders: true,
                images: true,
                reviews: true,
                promptUrl: true,
              },
              where: {
                status: "Live",
              },
              take: pageSize,
              skip: (pageNumber - 1) * pageSize,
              orderBy: {
                createdAt: "desc",
              },
              distinct: ["id"],
        })
        return prompt
    } catch (error) {
        console.log("Getting error while getting prompts", error);
    }
};