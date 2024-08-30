import { useState, useEffect } from "react";
import DashboardCard from "./DashboardCard";
import Chart from "./Chart/DoughnutChart";
import BarChart from "./Chart/BarChart";
import { useGlobalState } from "../components/context/GlobalStateContext";
import ClipLoader from "react-spinners/ClipLoader";
// import Books from "./Books";
import axios from "axios";
import Students from "./Students";
const Dashboard = () => {
  const { totalBooks, setTotalBooks, totalStudents, setTotalStudents } =
    useGlobalState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const countBook = async () => {
      try {
        const response = await axios.get(
          "https://backend-mini-project-main.vercel.app/api/books/count"
        );
        setTotalBooks(response.data.total);
      } catch (error) {
        console.error({ "Error fetching books": error });
      } finally {
        setLoading(false); // Set loading to false when data fetching is complete
      }
    };

    const countStudent = async () => {
      try {
        console.log("Fetching total students count..."); // Log before the API call
        const response = await axios.get(
          "https://backend-mini-project-main.vercel.app/api/students/countStudent"
        );
        console.log("Students count response:", response.data); // Log after receiving the response
        setTotalStudents(response.data.total);
        console.log("Total students:", response.data); // Log total students after setting the state
      } catch (error) {
        console.error("Error fetching students count:", error); // Improved error logging
      } finally {
        setLoading(false); // Set loading to false when data fetching is complete
      }
    };
    countBook();
    countStudent();
  }, [setTotalBooks, setTotalStudents]);

  return (
    <div className="dark">
      <div className="flex justify-between">
        <DashboardCard
          title="Books in Library"
          number={
            loading ? (
              <ClipLoader color="#000000" loading={loading} size={20} />
            ) : (
              totalBooks
            )
          }
          color="bg-red-500"
        />
        <DashboardCard
          title="Borrowed Books "
          number={
            loading ? (
              <ClipLoader color="#000000" loading={loading} size={20} />
            ) : (
              totalStudents
            )
          }
          color="bg-blue-500"
        />
        <DashboardCard
          title="Returned Books"
          number="5"
          color="bg-yellow-500"
        />
        <DashboardCard title="Misplaced Books" number="0" color="bg-black" />
      </div>
      <div className="flex justify-around items-center my-10">
        <div>
          <Chart />
        </div>
        <div>
          <BarChart />
        </div>
      </div>
      <div>
        <Students />
      </div>
    </div>
  );
};

export default Dashboard;
