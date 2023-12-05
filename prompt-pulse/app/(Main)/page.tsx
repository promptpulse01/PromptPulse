import { getUser } from '@/actions/users/getUser'
import React from 'react'
import RouterPage from './_page'
import { getShop } from '@/actions/shops/getShop'

type Props = {
}

const Page = async (props: Props) => {

    // const data = await getUser()
    const data = JSON.parse(JSON.stringify(await getUser()));
    // console.log(data)
    const shopdata = JSON.parse(JSON.stringify(await getShop()));
    // console.log(shopdata)
    return (
        <div>
            <RouterPage user={data?.user} shopdata={shopdata}  />
        </div>
    )
}

export default Page