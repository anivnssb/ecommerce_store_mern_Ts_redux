import { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import { FaChartBar, FaChartLine, FaChartPie } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { Link, useLocation, type Location } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100
  );

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <HiMenuAlt4 />
        </button>
      )}

      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <h2>Logo.</h2>
        <DivOne location={location} />
        <DivTwo location={location} />

        {phoneActive && (
          <button id="close-sidebar" onClick={() => setShowModal(false)}>
            Close
          </button>
        )}
      </aside>
    </>
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
        text="Products"
        Icon={RiShoppingBag3Fill}
        location={location}
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
        text="Transactions"
      />
    </ul>
  </div>
);
const DivTwo = ({ location }: { location: Location }) => (
  <div>
    <h5>Charts</h5>
    <ul>
      <Li
        url="/admin/chart/bar"
        location={location}
        Icon={FaChartBar}
        text="Bar"
      />
      <Li
        url="/admin/chart/pie"
        location={location}
        Icon={FaChartPie}
        text="Pie"
      />
      <Li
        url="/admin/chart/line"
        Icon={FaChartLine}
        text="Line"
        location={location}
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
const Li = ({ url, text, location, Icon }: LiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0,115,255,0.1)"
        : "white",
    }}
  >
    <Link
      to={url}
      style={{
        color: location.pathname.includes(url) ? "rgb(0,115,255)" : "black",
      }}
    >
      <Icon />
      {text}
    </Link>
  </li>
);
export default Sidebar;
