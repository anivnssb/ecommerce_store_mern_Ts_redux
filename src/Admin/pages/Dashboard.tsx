import { BsSearch } from "react-icons/bs";
import Sidebar from "../components/Sidebar";
import { FaRegBell } from "react-icons/fa";
import userImage from "../../assets/images/userpic.png";

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
      </main>
    </div>
  );
};

export default Dashboard;
