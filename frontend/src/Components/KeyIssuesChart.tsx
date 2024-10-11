import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

interface KeyIssue {
  issue: string;
  frequency: string;
}

// Define the props type for the component
interface KeyIssuesChartProps {
  issues: KeyIssue[];
}

const KeyIssuesChart: React.FC<KeyIssuesChartProps> = ({ issues }) => {
  // Prepare the chart data using the issues passed as props
  const data = {
    labels: issues.map((issue) => issue.issue),
    datasets: [
      {
        label: "Frequency",
        data: issues.map((issue) => Number(issue.frequency)),
        backgroundColor: "rgba(75, 192, 192, 0.6)", 
        borderColor: "rgba(75, 192, 192, 1)", 
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const, 
      },
      title: {
        display: true, 
        text: "Key Issues Frequency",
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default KeyIssuesChart;
