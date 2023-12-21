import React from 'react'
import SellerCard from './SellerCard'
import { styles } from '@/utils/styles'
import { getTopSeller } from '@/actions/topseller/getTopSeller'

interface Props {

}

const BestSeller = async (props: Props) => {

    const seller = JSON.parse(JSON.stringify(await getTopSeller()))
    return (
        <div className="mb-10 cursor-pointer">
            <h1 className={`${styles.heading} p-2 font-Monserrat mb-5`}>
                Top Sellers
            </h1>
            <div className="flex flex-wrap">
                {seller.map((item) => (
                    <>
                        <SellerCard avatar={item.avatar} name={item.name} sales={item.totalSales} rating={item.ratings} />
                    </>
                ))}
            </div>
        </div>
    )
}

export default BestSeller
