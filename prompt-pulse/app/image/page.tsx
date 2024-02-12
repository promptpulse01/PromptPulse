import { checkApiLimit } from '@/lib/api-limit';
import React from 'react'
import ImageGenerator from './ImageGenerator';
import { checkSubscription } from '@/lib/subscription';

type Props = {}

const Page = async(props: Props) => {

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();


  return (
   <>
   <ImageGenerator freetrial={freeTrial} ispro={isPro} />
   </>
  )
}

export default Page