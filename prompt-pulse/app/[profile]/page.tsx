import { getUser } from '@/actions/users/getUser'

import React from 'react'

type Props = {}

const Page = async (props: Props) => {


    const { user, shop } = JSON.parse(JSON.stringify(await getUser()))
    return (
        <>
        </>
    )
}

export default Page