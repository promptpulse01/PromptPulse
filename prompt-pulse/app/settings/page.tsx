import { checkSubscription } from '@/lib/subscription';
import React from 'react'
import SettingPage from './SettingPage';

type Props = {}

const Page = async(props: Props) => {

const isPro = await checkSubscription();

  return (
    <>
    <SettingPage ispro={isPro} />
    </>
  )
}

export default Page