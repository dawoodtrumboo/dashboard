import { Card, Flex } from "antd";
import StatCard from "./components/StatCard";
import {
  Cart4,
  CartCheck,
  CartCross,
  MoneyBag,
  AltArrowRight,
} from "solar-icon-set";
import ProfitCard from "./components/ProfitCard";
import Activity from "./components/Activity";
import { GoGoal } from "react-icons/go";
import { PiHamburgerDuotone } from "react-icons/pi";
import { BiDish } from "react-icons/bi";
import Table from "./components/Table";
import CommentCard from "./components/CommentCard";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col  w-full gap-[24px] justify-between ">
      <Flex
        className="w-full flex-col sm:flex-row"
        justify="space-between"
        gap={24}
      >
        <Flex
          justify="space-between"
          className="flex flex-wrap h-full lg:flex-nowrap sm:w-[65%] "
          gap={24}
        >
          <StatCard
            title="Total Orders"
            icon={<Cart4 iconStyle="Bold" color="#697FD8" size={20} />}
            value={75}
            percentage={3}
            increase={true}
            color="#697FD8"
          />
          <StatCard
            title="Total Delivered"
            value={75}
            icon={<CartCheck iconStyle="Bold" color="#00CE8E" size={20} />}
            percentage={3}
            increase={false}
            color="#00CE8E"
          />
          <StatCard
            title="Total Canceled"
            value={75}
            icon={<CartCross iconStyle="Bold" color="#F45D5B" size={20} />}
            percentage={3}
            increase={true}
            color="#F45D5B"
          />
          <StatCard
            title="Total Revenue"
            icon={<MoneyBag iconStyle="Bold" color="#DE439B" size={20} />}
            value={75}
            percentage={3}
            increase={false}
            color="#DE439B"
          />
        </Flex>
        <ProfitCard />
      </Flex>
      <Flex gap={24} className="flex-col md:flex-row">
        <Activity />
        <Card className="text-white md:w-[35%] rounded-xl justify-items-center place-items-center content-center">
          <Card.Grid className="flex items-center justify-between w-full cursor-pointer ">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center bg-orange-500 rounded-full bg-opacity-25 text-lg text-orange-500">
                <GoGoal />
              </div>
              Goals
            </div>
            <div className="flex items-center justify-center bg-white bg-opacity-25 h-5 w-5 rounded-full">
              <AltArrowRight />
            </div>
          </Card.Grid>
          <Card.Grid className="flex items-center justify-between w-full cursor-pointer ">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center bg-violet-500 rounded-full bg-opacity-25 text-lg text-violet-500">
                <PiHamburgerDuotone />
              </div>
              Popular Dishes
            </div>
            <div className="flex items-center justify-center bg-white bg-opacity-25 h-5 w-5 rounded-full">
              <AltArrowRight />
            </div>
          </Card.Grid>
          <Card.Grid className="flex items-center justify-between w-full cursor-pointer ">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center bg-teal-500 rounded-full bg-opacity-25 text-lg text-teal-500">
                <BiDish />
              </div>
              Menus
            </div>
            <div className="flex items-center justify-center bg-white bg-opacity-25 h-5 w-5 rounded-full">
              <AltArrowRight />
            </div>
          </Card.Grid>
        </Card>
      </Flex>
      <Flex gap={24} className="flex-col md:flex-row  ">
        <Card
          title="Recent Orders"
          className="text-white md:w-[65%] rounded-xl justify-items-center place-items h-[500px] "
        >
          <Table />
        </Card>
        <Card
          title="Customer's Feedback"
          className="text-white md:w-[35%] rounded-xl justify-items-center place-items  "
        >
          <div className=" overflow-y-scroll h-[420px]">
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
          </div>
        </Card>
      </Flex>
    </div>
  );
};

export default DashboardLayout;
