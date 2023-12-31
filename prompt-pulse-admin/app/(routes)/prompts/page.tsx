import { getPrompts } from "@/actions/prompts/getPrompts";
import AllPrompts from "@/components/Admin/AllPrompts";

type Props = {};

const Page = async (props: Props) => {
  const data = JSON.parse(JSON.stringify(await getPrompts()));
  return (
    <>
      <AllPrompts  data={data} />
    </>
  );
};

export default Page;
