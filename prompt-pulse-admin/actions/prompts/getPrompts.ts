import prisma from "@/lib/prismaDb";

export const getPrompts = async () => {
    try {
        const prompts: any = await prisma.prompts.findMany(
        {
            include: {
                orders: true
            }
        }
        );
        return prompts;
      } catch (error) {
        console.log(error);
      }
};