"use client"
import { styles } from "@/utils/styles"
import PromptCardDetails from "./PromptCardDetails"
import PromptInformation from "./PromptInformation"
import { useState } from "react";
import PromptCardLoader from "@/utils/PromptCardLoader";
import PromptCardContainer from "../PromptCardContainer";
import SellersBanner from "@/components/Shop/SellersBanner";

const PromptDetails = ({ promptData, relatedPrompt }: any) => {

  const [loading, setLoading] = useState(false);


  return (
    <div >
      <PromptCardDetails promptData={promptData} />
      <br />
      <br />
      <PromptInformation promptData={promptData} />
      <br />
      <h1 className={`${styles.heading} px-2 pb-2`}>Related Prompts</h1>
      {loading ? (
        [...new Array(4)].map((i) => (
          <>
            <PromptCardLoader />
          </>
        ))
      ) : (
        <>
          <PromptCardContainer promptdata={relatedPrompt} />
        </>
      )}
      <br />
      <br />
      <SellersBanner />
      <br />
    </div>

  )
}

export default PromptDetails