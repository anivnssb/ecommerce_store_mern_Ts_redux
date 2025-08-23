import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import Header from "./components/Header";
const Dashboard = lazy(() => import("./pages/admin-pages/Dashboard"));
const Products = lazy(() => import("./pages/admin-pages/Products"));
const Customers = lazy(() => import("./pages/admin-pages/Customers"));
const Transactions = lazy(() => import("./pages/admin-pages/Transactions"));
const Home = lazy(() => import("./pages/user-pages/Home"));
const Search = lazy(() => import("./pages/user-pages/Search"));
const Cart = lazy(() => import("./pages/user-pages/Cart"));
const Shipping = lazy(() => import("./pages/user-pages/Shipping"));
const NewProudct = lazy(
  () => import("./pages/admin-pages/management/NewProduct")
);
const TransactionManagement = lazy(
  () => import("./pages/admin-pages/management/TransactionManagement")
);
const ProductManagement = lazy(
  () => import("./pages/admin-pages/management/ProductManagement")
);
const BarCharts = lazy(() => import("./pages/admin-pages/chart/BarCharts"));
const PieCharts = lazy(() => import("./pages/admin-pages/chart/PieCharts"));
const LineCharts = lazy(() => import("./pages/admin-pages/chart/LineCharts"));

const App = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />

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
