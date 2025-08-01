import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./User/styles/app.scss";
import { lazy, Suspense } from "react";
import Loader from "./commonComponents/Loader";
const DashBoard = lazy(() => import("./Admin/pages/DashBoard"));
const Products = lazy(() => import("./Admin/pages/Products"));
const Customers = lazy(() => import("./Admin/pages/Customers"));
const Transactions = lazy(() => import("./Admin/pages/Transactions"));
const Home = lazy(() => import("./User/pages/Home"));
const Search = lazy(() => import("./User/pages/Search"));
const Cart = lazy(() => import("./User/pages/Cart"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/admin/dashboard" element={<DashBoard />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/transactions" element={<Transactions />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
