import { useState } from "react";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const user = { _id: "djdj", role: "user" };
const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className="header">
      <Link to="/">Home</Link>
      <Link to="/search">
        Search
        <FaSearch />
      </Link>
      <Link to="/cart">
        Cart
        <FaShoppingBag />
      </Link>
      {user?._id ? (
        <>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <FaUser />
          </button>
          <dialog open={isOpen}>
            <div>
              {user.role === "admin" && (
                <Link to="/admin/dashboard">Admin</Link>
              )}
              <Link to="/orders">Orders</Link>
              <button>
                <FaSignOutAlt />
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to="/login">
          Login
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;
