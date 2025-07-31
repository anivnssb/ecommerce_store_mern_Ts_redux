import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import { lazy } from "react";
import Home from "./pages/Home";
const Search = lazy(() => import("./pages/Search"));
const Cart = lazy(() => import("./pages/Cart"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
