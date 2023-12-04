import prisma from '@/lib/prismaDb'
import { User, currentUser } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async(req:NextRequest)=>{
    try {

        const data = await req.json()
        
        const userId = data?.userId


        const user  = await prisma.shops.findUnique({
            where:{
                userId
            }
        })

        if(user){
            return new NextResponse("Shop with this name already exists",{
                status: 400
            })
        }

        const shop = await prisma.shops.create({data})

        return NextResponse.json({user,shop})
    } catch (error) {
        return new  NextResponse("Something went wrong",{status:501})
    }
}