import type { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import {
  RiDashboardFill,
  RiShoppingBag3Fill,
  RiShoppingBagFill,
} from "react-icons/ri";
import { Link, useLocation, type Location } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  return (
    <aside>
      <h2>Logo</h2>
      <div>
        <h5>Dashboard</h5>
        <ul>
          <li
            style={{
              backgroundColor:
                location.pathname === "/admin/dashboard"
                  ? "rgb(0,115,255,0.1)"
                  : "white",
            }}
          >
            <Link to="/admin/dashboard">
              <RiDashboardFill />
              Dashboard
            </Link>
          </li>
          <li
            style={{
              backgroundColor:
                location.pathname === "/admin/products"
                  ? "rgb(0,115,255,0.1)"
                  : "white",
            }}
          >
            <Link to="/admin/products">
              <RiShoppingBag3Fill />
              Products
            </Link>
          </li>
          <li
            style={{
              backgroundColor:
                location.pathname === "/admin/customers"
                  ? "rgb(0,115,255,0.1)"
                  : "white",
            }}
          >
            <Link to="/admin/customers">
              <IoIosPeople />
              Customers
            </Link>
          </li>
          <li
            style={{
              backgroundColor:
                location.pathname === "/admin/transactions"
                  ? "rgb(0,115,255,0.1)"
                  : "white",
            }}
          >
            <Link to="/admin/transactions">
              <AiFillFileText />
              Transacions
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
