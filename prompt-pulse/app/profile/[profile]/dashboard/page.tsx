import { getUser } from "@/actions/users/getUser";
import { getShopOrders } from "@/actions/orders/getShopOrder";
import { getPrompts } from "@/actions/prompts/getPrompts";
import DashBoard from "./_page";

type Props = {};

const Page = async (props: Props) => {
  const sellerId: any = JSON.parse(JSON.stringify(await getUser()));
  const ordersData = JSON.parse(JSON.stringify(await getShopOrders( {sellerId:sellerId?.user.id} )));
  const promptsData = JSON.parse(JSON.stringify(await getPrompts()));

  return (
        <DashBoard ordersData={ordersData} promptsData={promptsData} />
  );
};

export default Page;