import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./User/styles/app.scss";
import "./Admin/styles/app.scss";
import { lazy, Suspense } from "react";
import Loader from "./commonComponents/Loader";
const Dashboard = lazy(() => import("./Admin/pages/Dashboard"));
const Products = lazy(() => import("./Admin/pages/Products"));
const Customers = lazy(() => import("./Admin/pages/Customers"));
const Transactions = lazy(() => import("./Admin/pages/Transactions"));
const Home = lazy(() => import("./User/pages/Home"));
const Search = lazy(() => import("./User/pages/Search"));
const Cart = lazy(() => import("./User/pages/Cart"));
const NewProudct = lazy(() => import("./Admin/pages/management/NewProduct"));
const TransactionManagement = lazy(
  () => import("./Admin/pages/management/TransactionManagement")
);
const ProductManagement = lazy(
  () => import("./Admin/pages/management/ProductManagement")
);
const BarCharts = lazy(() => import("./Admin/pages/chart/BarCharts"));
const PieCharts = lazy(() => import("./Admin/pages/chart/PieCharts"));
const LineCharts = lazy(() => import("./Admin/pages/chart/LineCharts"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/transactions" element={<Transactions />} />
          <Route path="/admin/product/new" element={<NewProudct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route
            path="/admin/transaction/:id"
            element={<TransactionManagement />}
          />
          <Route path="/admin/chart/bar" element={<BarCharts />} />
          <Route path="/admin/chart/pie" element={<PieCharts />} />
          <Route path="/admin/chart/line" element={<LineCharts />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
