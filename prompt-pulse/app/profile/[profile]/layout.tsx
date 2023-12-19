import type { Metadata } from 'next'
import { getUser } from '@/actions/users/getUser'
import ShopSidebar from '@/components/Shop/ShopSideBar'
import UserSideBar from '@/components/Shop/UserSideBar'

export const metadata: Metadata = {
  title: `Profile - Prompt Pulse`,
  description: 'Prompt Pulse',
}

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, shop } = JSON.parse(JSON.stringify(await getUser()))
  return (
    <div className="flex w-full">
      <div className="h-screen sticky top-0 left-0 flex p-2 bg-[#111C42] md:w-[20%] 2xl:w-[17%]">
        {
          shop ? (
            <ShopSidebar />
          ) : (
            <UserSideBar />
          )
        }
      </div>
      <div className="md:w-[80%] 2xl:w-[83%]">
        {children}
      </div>
    </div>
  )
}