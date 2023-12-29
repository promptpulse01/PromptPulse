import React from 'react'
import MarketPlace from './MarketPlace';
import { getUser } from '@/actions/users/getUser';


const page = async() => {
  const data = JSON.parse(JSON.stringify(await getUser()));

  return (
    <div>
      <MarketPlace
        user={data?.user}
        isSellerExist={data?.shop ? true : false}
      />
    </div>
  );
}

export default page