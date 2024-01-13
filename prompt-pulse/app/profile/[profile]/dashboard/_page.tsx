"use client";

import OrderAnalytics from "@/components/dashboard/OrderAnalytics";
import UserPrompts from "@/components/Prompts/AllPrompts";
import ShopAllOrders from "@/components/Shop/ShopAllOrders";
import { styles } from "@/utils/styles";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import { BiBorderLeft } from "react-icons/bi";

const DashBoard = ({
  ordersData,
  promptsData,
}: {
  ordersData: any;
  promptsData: any;
}) => {
  const totalSales = ordersData?.reduce(
    (total: number, item: any) => (item?.prompt?.price || 0) + total,
    0
  );

  return (
    <div>
      <div className="mt-[5px] min-h-screen">
        <h1 className=" text-center font-bold text-4xl pt-5 uppercase">
          DESABOARD
        </h1>
        <div className="grid grid-cols-[75%,25%] ">
          <div className="px-8">
            {/* border-solid border-2 border-[#5432D3] */}
            <OrderAnalytics isDashboard={true} />
          </div>

          <div className="pt-[50px] pr-8">
            <div className="w-full bg-[#141829] rounded-xl shadow border-solid border-2 border-[#5432D3]">
              <div className="flex items-center p-5 justify-between">
                <div className="w-full flex flex-col items-center">
                  <BiBorderLeft className="text-[#5432D3] text-[30px]" />
                  <h5 className="pt-2 font-Poppins text-[#fff] text-[20px]">
                    {ordersData?.length}
                  </h5>
                  <h5 className="py-2 font-Poppins text-[#5432D3] text-[17px] font-[400]">
                    Total Sales
                  </h5>
                </div>
              </div>
            </div>

            <div className="w-full bg-[#141829] rounded-xl shadow my-8 border-solid border-2 border-[#5432D3]">
              <div className="flex items-center p-5 justify-between">
                <div className="w-full flex flex-col items-center">
                  <AiOutlineMoneyCollect className="text-[#5432D3] text-[30px]" />
                  <h5 className="pt-2 font-Poppins text-[#fff]  text-[20px]">
                    US$ {totalSales}
                  </h5>
                  <h5 className="py-2 font-Poppins text-[#5432D3] text-[17px] font-[400]">
                    Total Sales
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[65%,34%] mt-[-20px]">
          <div className=" w-[94%]  h-[43vh] shadow-xl m-auto  ">
            <h1
              className={`text-[#fff] text-[20px] font-[400] font-Poppins pb-5`}
            >
              All Prompts
            </h1>
            <div className="mt-[-30px] ">
              <UserPrompts promptsData={promptsData} isDashboard={true} />
            </div>
          </div>
          <div className="p-3">
            <h5 className="text-[#fff] text-[20px] font-[400] font-Poppins pb-3">
              Recent Orders
            </h5>
            <ShopAllOrders isDashboard={true} ordersData={ordersData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
