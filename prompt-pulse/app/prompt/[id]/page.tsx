import { getPromptById } from "@/actions/prompts/getPromptById";
import PromptDetailsPage from "./_page";
import { getUser } from "@/actions/users/getUser";
import { getRelatedPrompts } from "@/actions/prompts/getRelatedPrompts";

type Props = {}

const page =async({params}: {params:any}) => {
    const data=JSON.parse(JSON.stringify(await getUser()))
    const prompt=JSON.parse(JSON.stringify(await getPromptById(params.id)))
    const relatedPrompt = JSON.parse(JSON.stringify(await getRelatedPrompts(prompt.category)))
    return (
        <div>
          <PromptDetailsPage
            user={data?.user}
            isSellerExist={data?.shop ? true : false}
            prompt={prompt}
            relatedPrompt={relatedPrompt}
          />
        </div>
    )
}

export default page