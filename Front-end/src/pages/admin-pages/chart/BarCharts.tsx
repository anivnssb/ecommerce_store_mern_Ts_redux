import { BarChart } from "../../../components/admin-components/Charts";
import Sidebar from "../../../components/admin-components/Sidebar";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const BarCharts = () => {
  return (
    <div className="admin-container">
      <Sidebar />
      <main className="chart-container">
        <h1>Bar Charts</h1>
        <section>
          <BarChart
            data_1={[300, 155, 200, 400, 600, 300, 155]}
            data_2={[210, 122, 140, 240, 500, 200, 125]}
            title_1="Products"
            title_2="Users"
            bgColor_1="hsl(260,50%,30%)"
            bgColor_2="hsl(360,50%,50%)"
          />
          <h2>Top Selling Product & Top Customers</h2>
        </section>
        <section>
          <BarChart
            horizontal={true}
            data_1={[
              300, 155, 200, 400, 600, 355, 200, 125, 100, 200, 300, 155,
            ]}
            data_2={[]}
            title_1="Products"
            title_2=""
            bgColor_1="hsl(180,50%,30%)"
            bgColor_2=""
            labels={months}
          />
          <h2>Orders Throughout The Year</h2>
        </section>
      </main>
    </div>
  );
};

export default BarCharts;
