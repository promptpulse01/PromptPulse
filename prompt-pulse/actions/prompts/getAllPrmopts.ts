"use server"
import prisma from '@/lib/prismaDb'

export const getAllPrompts = async (pageNumber = 1, pageSize = 8) => {
  try {
    const prompts = await prisma.prompts.findMany({
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


    if (prompts) {
      for (const prompt of prompts) {
        const shop = await prisma.shops.findUnique({
          where: {
            userId: prompt.sellerId,
          },
        });
        (prompt as any).shop = shop;
      }
    }
    return prompts
  } catch (error) {
    console.log("Getting error while getting prompts", error);
  }
};