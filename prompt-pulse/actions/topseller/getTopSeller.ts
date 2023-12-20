"use server"
import prisma from '@/lib/prismaDb'


export const getTopSeller = async () => {
    try {
        const sellers = await prisma.shops.findMany({
          take: 4,
          orderBy: {
            ratings: "desc",
          },
        });
    
        return  sellers 
    } catch (error) {
        console.log("load user error", error);
    }
}