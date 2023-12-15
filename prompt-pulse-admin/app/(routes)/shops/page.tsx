import getAllShops from "@/actions/shops/getAllShops";
import AllShops from "@/components/Admin/AllShops";
import Sidebar from "@/components/Sidebar";

type Props = {};

const Page = async (props: Props) => {
  const data = JSON.parse(JSON.stringify(await getAllShops()));

  return (
    <>
      <AllShops shopsData={data} />
    </>
  );
};

export default Page;
