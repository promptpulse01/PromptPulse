import React from 'react'
import SellerCard from './SellerCard'
import { styles } from '@/utils/styles'

interface Props {

}

const BestSeller = (props: Props) => {
    return (
        <div className="mb-10 cursor-pointer">
            <h1 className={`${styles.heading} p-2 font-Monserrat mb-5`}>
                Top Sellers
            </h1>
            <div className="flex flex-wrap">
                <SellerCard />
                <SellerCard />
                <SellerCard />
                <SellerCard />
            </div>
        </div>
    )
}

export default BestSeller
