import prisma from "@/lib/prismaDb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { promptData, userId ,payment_method,payment_id} = await req.json();
        const IsCartExist= await prisma.cart.findMany({
            where: {
                userId,
                isPaid: false
            },
            include: {
                items: true
            }
        })
        if(IsCartExist.length>0)
        {
            let flag=false
            const prompts=IsCartExist[0].items
            prompts.map((item)=>{
                if(item.promptId==promptData.id)
                {
                    flag=true
                }
            })
            if(flag)
            {
                return NextResponse.json({message:"Already in cart"})
            }
            const newCart = await prisma.cart.update({
                where: {
                    id: IsCartExist[0].id
                },
                data: {
                    items: {
                        create: {
                            prompt:{
                                connect:{
                                    id:promptData.id
                                }
                            }
                        }
                    },
                    payment_method: payment_method,
                    payment_id: payment_id
                },
                include: {
                    items: true
                }
            })
            return NextResponse.json(newCart)
        }
            const newCart = await prisma.cart.create({
                data: {
                    userId,
                    items: {
                        create: {
                            prompt:{
                                connect:{
                                    id:promptData.id
                                }
                            }
                        }
                    },
                    payment_method: payment_method,
                    payment_id: payment_id
                },
                include: {
                    items: true
                }
            })
            return NextResponse.json(newCart)
    } catch (error) {
        console.log("create shop error", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}