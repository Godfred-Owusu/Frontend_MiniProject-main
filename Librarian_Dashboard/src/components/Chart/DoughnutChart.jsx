import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useGlobalState } from "../context/GlobalStateContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const { totalStudents, totalBooks } = useGlobalState();
  let total = totalStudents + totalBooks + 5 + 0;
  const data = {
    labels: [
      "Libary Books",
      "Books Borrowed",
      "Books Remaining",
      "Misplaced Books",
    ],
    datasets: [
      {
        label: "# of Books",
        data: [
          (totalBooks / total) * 100,
          (totalStudents / total) * 100,
          (5 / total) * 100,
          (1 / total) * 100,
        ], // Dummy data
        backgroundColor: [
          "rgba(255, 99, 132, 0.9)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(0, 0, 0, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(0, 0, 0, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: "400px", height: "400px" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
