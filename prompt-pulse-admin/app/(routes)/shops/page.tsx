import getAllShops from "@/actions/shops/getAllShops";
import AllShops from "@/components/Admin/AllShops";
import Sidebar from "@/components/Sidebar";

type Props = {};

const Page = async (props: Props) => {
  const data = JSON.parse(JSON.stringify(await getAllShops()));

  // console.log(data)

  return (
    <div className="flex min-h-screen">
      <div className="2xl:w-[16%] w-1/5">
        <Sidebar activeItem="Shops" />
      </div>
      <div className="2xl:w-[84%] w-[80%] ml-10">
        <AllShops shopsData={data} />
      </div>
    </div>
  );
};

export default Page;
