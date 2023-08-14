"use client";

import NewCustomers from "@/components/dashboard/NewCustomers";
import RecentOrders from "@/components/dashboard/RecentOrders";
import AreaChart from "@/components/dashboard/charts/AreaChart";
import LineChart from "@/components/dashboard/charts/LineChart";
import PieCharts from "@/components/dashboard/charts/PieCharts";
import styles from "@/components/styles";
import { Products, Usd, UserIn, UserClock } from "@/utils/icons";

const statistics = [
  {
    title: "Daily Signup",
    number: "1,503",
    icon: <UserIn />,
  },
  {
    title: "Daily Visitors",
    number: "2,787",
    icon: <UserClock />,
  },
  {
    title: "Daily Orders",
    number: "17,563",
    icon: <Products />,
  },
  {
    title: "Daily Revenue",
    number: "1,503",
    icon: <Usd />,
  },
];

const Dashboard = () => {
  return (
    <div className={`${styles.paddingX} dashboard pt-12 overflow-hidden`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {statistics.map((item) => (
          <div
            className="flex justify-between items-center shadow-md py-5 px-6 rounded-2xl bg-slate-50"
            key={item.title}
          >
            <div className="">
              <h3 className="text-2xl mb-2 font-semibold">{item.number}</h3>
              <p>{item.title}</p>
            </div>
            <div className="icon bg-blue-500 text-white p-2 text-2xl rounded-xl">
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      <AreaChart />
      <PieCharts />
      <LineChart />
      <RecentOrders />
      <NewCustomers />
    </div>
  );
};

export default Dashboard;
