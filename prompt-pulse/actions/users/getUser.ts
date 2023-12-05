"use server"
import { User, currentUser } from '@clerk/nextjs/server'


export const getUser = async () => {
    try {
        const user: User | null = await currentUser()

        if (!user) {
            return null
        }
        return { user }
    } catch (error) {
        console.log("load user error", error);
    }
}