import type { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaGamepad,
  FaStopwatch,
} from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import {
  RiCoupon3Fill,
  RiDashboardFill,
  RiShoppingBag3Fill,
} from "react-icons/ri";
import { Link, useLocation, type Location } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  return (
    <aside>
      <h2>Logo</h2>
      <DivOne location={location} />
      <DivTwo location={location} />
      <DivThree location={location} />
    </aside>
  );
};

const DivOne = ({ location }: { location: Location }) => (
  <div>
    <h5>Dashboard</h5>
    <ul>
      <Li
        url="/admin/dashboard"
        location={location}
        Icon={RiDashboardFill}
        text="Dashboard"
      />
      <Li
        url="/admin/products"
        location={location}
        Icon={RiShoppingBag3Fill}
        text="Products"
      />
      <Li
        url="/admin/customers"
        location={location}
        Icon={IoIosPeople}
        text="Customers"
      />
      <Li
        url="/admin/transactions"
        location={location}
        Icon={AiFillFileText}
        text="Transacions"
      />
    </ul>
  </div>
);
const DivTwo = ({ location }: { location: Location }) => (
  <div>
    <h5>Charts</h5>
    <ul>
      <Li url="/admin/bar" location={location} Icon={FaChartBar} text="Bar" />
      <Li url="/admin/pie" location={location} Icon={FaChartPie} text="Pie" />
      <Li
        url="/admin/line"
        location={location}
        Icon={FaChartLine}
        text="Line"
      />
    </ul>
  </div>
);
const DivThree = ({ location }: { location: Location }) => (
  <div>
    <h5>Apps</h5>
    <ul>
      <Li
        url="/admin/app/stopwatch"
        location={location}
        Icon={FaStopwatch}
        text="Stopwatch"
      />
      <Li
        url="/admin/app/coupon"
        location={location}
        Icon={RiCoupon3Fill}
        text="Coupon"
      />
      <Li
        url="/admin/app/toss"
        location={location}
        Icon={FaGamepad}
        text="Toss"
      />
    </ul>
  </div>
);
interface LiProps {
  url: string;
  location: Location;
  text: string;
  Icon: IconType;
}

const Li = ({ url, location, text, Icon }: LiProps) => (
  <li
    style={{
      backgroundColor:
        location.pathname === url ? "rgb(0,115,255,0.1)" : "white",
    }}
  >
    <Link to={url}>
      <Icon />
      {text}
    </Link>
  </li>
);
export default Sidebar;
