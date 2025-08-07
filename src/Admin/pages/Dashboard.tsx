import { BsSearch } from "react-icons/bs";
import Sidebar from "../components/Sidebar";
import { FaRegBell } from "react-icons/fa";
import userImage from "../../assets/images/userpic.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className="admin-container">
      <Sidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, logs, docs" />
          <FaRegBell />
          <img src={userImage} alt="User" />
        </div>
        <section className="widget-container">
          <WidgetItem
            {...{
              heading: "Revenue",
              value: 34000,
              percent: 40,
              color: "rgb(100,285,255)",
              amount: true,
            }}
          />
          <WidgetItem
            {...{
              heading: "Users",
              value: 400,
              percent: -14,
              color: "rgb(200,122,325)",
            }}
          />

          <WidgetItem
            {...{
              heading: "Transactions",
              value: 23000,
              percent: 80,
              color: "rgb(500,135,155)",
              amount: true,
            }}
          />
          <WidgetItem
            {...{
              heading: "Products",
              value: 1000,
              percent: 30,
              color: "rgb(100,0,255)",
              amount: true,
            }}
          />
        </section>
        <section className="graph-container">
          <div className="revenue-chart">
            <h2>Revenue & Transaction</h2>
            {/* Graph Here */}
          </div>
          <div className="dashboard-categories">
            <h2>Invertory</h2>
          </div>
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
  amount = false,
}: widgetItemProps) => (
  <article className="widget">
    <div className="widget-info">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> +{percent} "%"
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> {percent} + "%"
        </span>
      )}
    </div>
    <div
      className="widget-circle"
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
