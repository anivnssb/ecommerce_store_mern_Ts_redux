import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
const DashBoard = lazy(() => import("./pages/Admin/DashBoard"));
const Products = lazy(() => import("./pages/Admin/Products"));
const Customers = lazy(() => import("./pages/Admin/Customers"));
const Transactions = lazy(() => import("./pages/Admin/Transactions"));
const Home = lazy(() => import("./pages/Home"));
const Search = lazy(() => import("./pages/Search"));
const Cart = lazy(() => import("./pages/Cart"));

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
