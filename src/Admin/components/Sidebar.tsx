import type { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { Link, useLocation, type Location } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  return (
    <aside>
      <h2>Logo</h2>
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
      <div>
        <h5>Charts</h5>
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
    </aside>
  );
};

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
