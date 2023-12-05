// import prisma from "@/lib/prismaDb";


// export const getShop = async () => {
//   try {
//     const shops: any = await prisma.shops.findMany();


//     return shops;
//   } catch (error) {
//     console.log(error);
//   }
// };


"use server"
import { User, currentUser } from '@clerk/nextjs/server'
import prisma from '@/lib/prismaDb'


export const getShop = async () => {
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
        return  shop 
    } catch (error) {
        console.log("load user error", error);
    }
}