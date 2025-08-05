import { BsSearch } from "react-icons/bs";
import Sidebar from "../components/Sidebar";
import { FaRegBell } from "react-icons/fa";
import userImage from "../../assets/images/userpic.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      <Sidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, logs, docs" />
          <FaRegBell />
          <img src={userImage} alt="User" />
        </div>
        <section className="widgetcontainer">
          <WidgetItem
            {...{
              heading: "Revenue",
              value: 12000,
              percent: 15,
              color: "rgb(0,115,255)",
              amount: true,
            }}
          />
          <WidgetItem
            {...{
              heading: "Revenue",
              value: 12000,
              percent: 15,
              color: "rgb(0,115,255)",
              amount: true,
            }}
          />
          <WidgetItem
            {...{
              heading: "Revenue",
              value: 12000,
              percent: 15,
              color: "rgb(0,115,255)",
              amount: true,
            }}
          />
        </section>
      </main>
    </div>
  );
};

interface widgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}
const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount,
}: widgetItemProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> +{percent} "%"
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> +{percent} + "%"
        </span>
      )}
    </div>
  </article>
);

export default Dashboard;
