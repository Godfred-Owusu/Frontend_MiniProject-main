import { LiaBookSolid } from "react-icons/lia";

const DashboardCard = ({ title, number, color }) => {
  return (
    <div>
      <div className=" shadow-md p-5 rounded">
        <div className="flex gap-5">
          <div className={`w-fit p-3 rounded-full ${color}`}>
            <LiaBookSolid fontSize={25} color="white" />
          </div>
          <div>
            <p>{title}</p>
            <p className="font-bold">{number}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
