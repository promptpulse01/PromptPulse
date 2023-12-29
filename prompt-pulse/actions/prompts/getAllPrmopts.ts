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
    const totalPrompts: any = await prisma.prompts.findMany({
      where: {
        status: "Live",
      },
      include: {
        images: true,
      },
    });

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
    for (const prompt of totalPrompts) {
      const shop = await prisma.shops.findUnique({
        where: {
          userId: prompt.sellerId,
        },
      });
      prompt.shop = shop;
    }

  return { prompts, totalPrompts };
  } catch (error) {
    console.log("Getting error while getting prompts", error);
  }
};