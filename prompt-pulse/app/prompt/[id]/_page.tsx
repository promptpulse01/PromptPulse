'use client'
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import ShopBanner from "@/components/Shop/ShopBanner";
import { User } from "@clerk/nextjs/server";
import { Divider } from "@nextui-org/react";
import PromptDetails from "@/components/Prompts/PromptDetails/PromptDetails";

type Props = {
    user: User | undefined,
    isSellerExist  : boolean,
    prompt:any,
}

const PromptDetailsPage = ({user, isSellerExist, prompt}: Props) => {
  return (
    <>
        <div>
          <div className="shop-banner">
            <Header activeItem={2} user={user}/>
            <ShopBanner title={prompt?.name!} />
          </div>
          <div>
            <div className="w-[95%] md:w-[80%] xl:w-[85%] 2xl:w-[80%] m-auto">
              <PromptDetails
                promptData={prompt}
              />
              <Divider className="bg-[#ffffff14] mt-5" />
              <Footer />
            </div>
          </div>
        </div>
    </>
  )
}

export default PromptDetailsPage