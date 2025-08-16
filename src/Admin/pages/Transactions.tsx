import { useCallback, useState, type ReactElement } from "react";
import Sidebar from "../components/Sidebar";
import type { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";

interface DataType {
  name: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}
const columns: Column<DataType>[] = [
  { Header: "Name", accessor: "name" },
  { Header: "Amount", accessor: "amount" },
  { Header: "Discount", accessor: "discount" },
  { Header: "Quantity", accessor: "quantity" },
  { Header: "Status", accessor: "status" },
  { Header: "Action", accessor: "action" },
];
const arr: DataType[] = [
  {
    name: "Puma xavier",
    amount: 690,
    discount: 4,
    quantity: 3,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/id">Manage</Link>,
  },
  {
    name: "Puma xavier",
    amount: 690,
    discount: 4,
    quantity: 3,
    status: <span className="green">Shipped</span>,
    action: <Link to="/admin/transaction/id">Manage</Link>,
  },
];
const Transactions = () => {
  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Transaction",
      true
    ),
    []
  );
  return (
    <div className="admin-container">
      <Sidebar />
      <main>{Table()}</main>
    </div>
  );
};

export default Transactions;
