import Ratings from '@/utils/Ratings'
import { styles } from '@/utils/styles'
import { Avatar, Card } from '@nextui-org/react'
import React from 'react'

interface Props {
  avatar: string,
  name: string,
  rating: number,
  sales: number  
}

const SellerCard = ({name,avatar,rating,sales}: Props) => {

  
    return (
        <Card className="py-4 bg-[#100d21] m-3 w-full md:w-[31%] 2xl:w-[23%] flex flex-col items-center text-white border border-[#ffffff22]">
            <Avatar src={avatar} className="w-[80px] h-[80px]" />
            <span className={`${styles.label} py-2 text-xl`}>@{name}</span>
            <div className="flex items-center">
              <span className={`${styles.label} pr-2`}>{rating}/5</span>
              <Ratings rating={rating} />
            </div>
            <span className={`${styles.label} py-2`}>
              Total Sales: {sales}
            </span>
      </Card>
    )
}

export default SellerCard
