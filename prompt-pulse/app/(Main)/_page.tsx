"use client"
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import PromptCard from '@/components/Prompts/PromptCard'
import About from '@/components/Route/About'
import Future from '@/components/Route/Future'
import Hero from '@/components/Route/Hero'
import BestSeller from '@/components/Shop/BestSeller'
import SellersBanner from '@/components/Shop/SellersBanner'
import Loader from '@/utils/Loader'
import { styles } from '@/utils/styles'
import { Divider } from '@nextui-org/react'
import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getUser } from '@/actions/users/getUser'
import { User } from '@clerk/nextjs/server'
import { getShop } from '@/actions/shops/getShop'


type Props = {
  user: User | undefined;
  shopdata: object

}

const RouterPage = ({ user, shopdata }: Props) => {

  // const data = await getUser()

  const [isSellerExist, setIsSellerExist] = useState(false)
  // console.log(shopdata)



  useEffect(() => {
    if (shopdata?.userId) {
      // console.log(shopdata?.userId)
      setIsSellerExist(true)
    }
  }, [shopdata])
  console.log(isSellerExist)







  // const [user, setUser] = useState(null)
  // const [loading, setLoading] = useState(true)

  // const users = async () => { await getUsers() }
  // console.log(users)

  // useEffect(() => {
  //   users()
  //     , []
  // })
  // useEffect(() => {
  //   axios.get('/api/me').then((res) => {
  //     // setLoading(false)
  //     setUser(res.data.user)
  //   }).catch((error) => {
  //     // setLoading(true)
  //     console.log(error)
  //   })
  // }, [])


  // console.log(user)

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
          <div className="w-full flex flex-wrap mt-5">
            <PromptCard />
            <PromptCard />
            <PromptCard />
            <PromptCard />
            <PromptCard />
            <PromptCard />
            <PromptCard />
            <PromptCard />
          </div>
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
      {/* {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div className="banner">
            <Header activeItem={0} user={user} />
            <Hero />
          </div>
        </>
      )} */}
    </>
  )
}

export default RouterPage