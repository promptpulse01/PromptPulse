import { User, currentUser } from '@clerk/nextjs/server'

export const useAdmin = async () => {
    const user: User | null = await currentUser()
    if (user && user?.emailAddresses.find((i) => i.emailAddress === process.env.EMAIL_ADDRESS)) {
        return true
    }
    else {
        return false
    }
}