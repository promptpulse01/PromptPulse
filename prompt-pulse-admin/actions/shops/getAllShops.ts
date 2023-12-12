import prisma from "@/lib/prismaDb";
import { clerkClient } from "@clerk/nextjs";
async function getAllShops() {
  try {
    const shops: any = await prisma.shops.findMany();
    for (const shop of shops) {
      const userId = shop?.userId;
      if (userId) {
        try {
          const user = await clerkClient.users.getUser(userId);
          shops.user = user;
        } catch (error) {
          console.log("user ID not found");
          shops.user = null;
        }
      }
    }
    return shops;
  } catch (error) {
    console.log(error);
  }
}
export default getAllShops;
