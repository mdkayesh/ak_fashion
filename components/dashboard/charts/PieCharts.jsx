import styles from "@/components/styles";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "Order Completed",
    "Order Unpaid",
    "Order returned",
    "Order Pending",
    "Order Canceled",
    "Order Broken",
  ],
  datasets: [
    {
      label: "Orders",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132)",
        "rgba(54, 162, 235)",
        "rgba(255, 206, 86)",
        "rgba(75, 192, 192)",
        "rgba(153, 102, 255)",
        "rgba(255, 159, 64)",
      ],
    },
  ],
};

const PieCharts = () => {
  return (
    <div className="mt-20">
      <div className={`${styles.shadow} rounded-2xl px-4 py-7`}>
        <h2 className="text-2xl font-semibold text-center mb-4">
          Order Details
        </h2>
        <div className="mx-auto max-w-xs">
          <Pie data={data}>PieCharts</Pie>
        </div>
      </div>
    </div>
  );
};

export default PieCharts;
