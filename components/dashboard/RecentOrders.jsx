import styles from "../styles";
import DashDrop from "./DashDrop";

const RecentOrders = () => {
  return (
    <div className="recent-orders mt-20">
      <div className={`${styles.shadow} py-7 px-4 overflow-auto rounded-xl`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Recent Orders</h2>
          <DashDrop
            options={["select-1", "select-2", "select-3"]}
            onSelect={() => {}}
          />
        </div>

        <table className="table-auto w-full text-left whitespace-nowrap [&_th]:py-3 [&_th]:pr-2 [&_td]:py-4 [&_td]:pr-3 [&_td]:text-sm">
          <thead className="border-b">
            <tr className="md:text-lg">
              <th>Order ID</th>
              <th>Product Name</th>
              <th className="text-center">Units</th>
              <th className="text-center">Order Date</th>
              <th className="text-center">Order Cost</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(7)].map((_, index) => (
              <tr key={index}>
                <td>36438</td>
                <td>Coach Swagger something like that</td>
                <td className="text-center">5</td>
                <td className="text-center">Oct 20, 2018</td>
                <td className="text-center">$230</td>
                <td>
                  <p className="bg-green-500 p-1 text-xs rounded w-fit text-white">
                    Completed
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
