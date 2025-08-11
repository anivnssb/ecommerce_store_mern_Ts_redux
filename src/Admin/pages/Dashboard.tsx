import { BsSearch } from "react-icons/bs";
import Sidebar from "../components/Sidebar";
import { FaRegBell } from "react-icons/fa";
import userImage from "../../assets/images/userpic.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../../assets/data.json";
import { BarChart } from "../components/Charts";

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
            <BarChart
              data_1={[300, 200, 141, 500, 400, 275, 214]}
              data_2={[200, 300, 241, 400, 350, 175, 314]}
              title_1="Revenue"
              title_2="Transactions"
              bgColor_1="rgb(100,285,255)"
              bgColor_2="rgb(500,135,155)"
              labels={[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
              ]}
            />
          </div>
          <div className="dashboard-categories">
            <h2>Invertory</h2>
            <div>
              {data.categories.map((i) => (
                <CategoryItem
                  key={i.heading}
                  color={`hsl(${i.value * 4},${i.value}%,50%)`}
                  value={i.value}
                  heading={i.heading}
                />
              ))}
            </div>
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

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) => (
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
      <div style={{ backgroundColor: color, width: `${value}%` }}></div>
    </div>
    <span>{value}%</span>
  </div>
);

export default Dashboard;
