import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import styles from "@/components/styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  interaction: {
    mode: "index",
    intersect: false,
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Inactive",
      data: [30, 20, 70, 90, 50, 100, 120, 170, 100, 250, 100, 60],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Active",
      data: [40, 60, 70, 22, 40, 60, 190, 200, 190, 230, 70, 50, 300],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const LineChart = () => {
  return (
    <div className="mt-20">
      <div className={`${styles.shadow} mx-auto px-4 py-7 rounded-2xl`}>
        <h2 className="text-2xl font-semibold text-center mb-4">
          Users Activity
        </h2>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default LineChart;
