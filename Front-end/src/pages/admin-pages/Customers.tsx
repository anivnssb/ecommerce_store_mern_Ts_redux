import { useCallback, useState, type ReactElement } from "react";
import Sidebar from "../../components/admin-components/Sidebar";
import TableHOC from "../../components/admin-components/TableHOC";
import type { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const img2 = "https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg";

interface DataType {
  avatar: ReactElement;
  name: string;
  gender: string;
  email: string;
  role: string;
  action: ReactElement;
}
const columns: Column<DataType>[] = [
  { Header: "Avatar", accessor: "avatar" },
  { Header: "Name", accessor: "name" },
  { Header: "Gender", accessor: "gender" },
  { Header: "Email", accessor: "email" },
  { Header: "Role", accessor: "role" },
  { Header: "Action", accessor: "action" },
];
const arr: DataType[] = [
  {
    avatar: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    gender: "Male",
    email: "anvinssb@gmail.com",
    role: "customer",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: <img src={img2} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    gender: "Male",
    email: "anvinssb@gmail.com",
    role: "customer",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];
const Customers = () => {
  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHOC(columns, data, "dashboard-product-box", "Customers", true),
    []
  );
  return (
    <div className="admin-container">
      <Sidebar />
      <main>
        <Table />
      </main>
    </div>
  );
};

export default Customers;
