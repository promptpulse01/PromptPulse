import { getUser } from '@/actions/users/getUser'
import React from 'react'
import RouterPage from './_page'

type Props = {
}

const Page = async (props: Props) => {

    const data = await getUser()
    return (
        <div>
            <RouterPage user={data?.user} />
        </div>
    )
}

export default Page