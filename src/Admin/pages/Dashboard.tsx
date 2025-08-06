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
              percent: 72,
              color: "rgb(100,285,255)",
              amount: true,
            }}
          />
          <WidgetItem
            {...{
              heading: "Revenue",
              value: 12000,
              percent: 45,
              color: "rgb(500,135,155)",
              amount: true,
            }}
          />
          <WidgetItem
            {...{
              heading: "Revenue",
              value: 1200000,
              percent: 15,
              color: "rgb(200,122,325)",
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
        <span className="">
          <HiTrendingDown /> +{percent} + "%"
        </span>
      )}
    </div>
    <div
      className="widgetCircle"
      style={{
        background: `conic-gradient(${color} ${
          Math.abs(percent) * 3.6
        }deg, rgb(255,255,255) 0)`,
      }}
    >
      <span color={color}>{percent}%</span>
    </div>
  </article>
);

export default Dashboard;
