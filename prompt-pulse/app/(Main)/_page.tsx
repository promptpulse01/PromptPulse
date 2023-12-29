import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import PromptCardContainer from '@/components/Prompts/PromptCardContainer'
import About from '@/components/Route/About'
import Future from '@/components/Route/Future'
import Hero from '@/components/Route/Hero'
import BestSeller from '@/components/Shop/BestSeller'
import SellersBanner from '@/components/Shop/SellersBanner'
import { styles } from '@/utils/styles'
import { Divider } from '@nextui-org/react'
import Image from 'next/image'
import { User } from '@clerk/nextjs/server'
import type { Shop } from '../../types'


type Props = {
  user: User | undefined;
  shopdata: Shop | undefined;
  promptdata: any

}

const RouterPage = ({ user, shopdata,promptdata }: Props) => {

  return (
    <>
      <div className="banner">
        <Header activeItem={0} user={user} />
        <Hero />
      </div>
      <Image
        src={"https://pixner.net/aikeu/assets/images/footer/shape-two.png"}
        width={120}
        height={120}
        alt=""
        className="absolute right-[-30px]"
      />
      <br />
      <div className="w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[75%] m-auto">
        <About />
        <div>
          <h1 className={`${styles.heading} p-2 font-Monserrat`}>
            Latest Prompts
          </h1>
          <PromptCardContainer promptdata={promptdata} />
          <br />
          <BestSeller />
          <Future />
          <br />
          <br />
          <SellersBanner />
          <br />
          <br />
          <Divider className="bg-[#ffffff23]" />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default RouterPage