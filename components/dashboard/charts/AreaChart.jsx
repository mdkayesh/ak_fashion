import styles from "@/components/styles";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  interaction: {
    mode: "index",
    intersect: false,
  },
  responsive: true,
  elements: {
    line: {
      tension: 0.4,
    },
  },
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
      fill: true,
      label: "Via Referral",
      data: [30, 20, 70, 90, 50, 100, 300, 200, 100, 250, 100, 60],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      fill: true,
      label: "Direct",
      data: [70, 40, 60, 44, 80, 100, 100, 300, 100, 250, 200, 20],
      borderColor: "rgba(143,25,172)",
      backgroundColor: "rgba(143,25,172,0.5)",
    },
    {
      fill: true,
      label: "Via Social",
      data: [40, 60, 70, 22, 40, 60, 300, 200, 190, 230, 70, 50],
      borderColor: "rgb(240,105,255)",
      backgroundColor: "rgb(240,105,255, 0.5)",
    },
  ],
};

const AreaChart = () => {
  return (
    <div className="mt-20">
      <div className={`${styles.shadow} mx-auto px-4 py-7 rounded-2xl`}>
        <h2 className="text-2xl font-semibold text-center mb-4">
          Sales Report
        </h2>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default AreaChart;
