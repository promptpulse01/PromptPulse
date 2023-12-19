import { getUser } from '@/actions/users/getUser'
import React from 'react'
import RouterPage from './_page'
import { getShop } from '@/actions/shops/getShop'
import { getAllPrompts } from '@/actions/prompts/getAllPrmopts'

type Props = {
}

const Page = async (props: Props) => {
    const data = JSON.parse(JSON.stringify(await getUser()));
    const shopdata = JSON.parse(JSON.stringify(await getShop()));
 
    return (
        <div>
            <RouterPage user={data?.user} shopdata={shopdata}  />
        </div>
    )
}

export default Page