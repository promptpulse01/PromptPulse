import { getPrompts } from "@/actions/prompts/getPrompts";
import UserPrompts from "@/components/Prompts/AllPrompts";

type Props = {};

const Page = async (props: Props) => {
  const data = JSON.parse(JSON.stringify(await getPrompts()));
  return (
    <>
        <UserPrompts data={data} />
    </>
  );
};

export default Page;
