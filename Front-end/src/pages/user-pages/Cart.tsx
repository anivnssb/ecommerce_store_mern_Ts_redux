import { Link } from "react-router-dom";
import CartItem from "../../components/user-components/CartItem";

const cartItems = [
  {
    productId: "abc123",
    photo: "https://m.media-amazon.com/images/I/51g2H4pmpwL._SL1500_.jpg",
    name: "Iphone",
    price: 3000,
    quantity: 40,
    stock: 10,
  },
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + shippingCharges + tax;
const Cart = () => {
  return (
    <div className="cart">
      <main>
        {cartItems.length ? (
          cartItems.map((i, index) => <CartItem key={index} cartItem={i} />)
        ) : (
          <h1>No Items Added</h1>
        )}
      </main>
      <aside>
        <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>
          Discount: <em className="red"> - ₹{discount}</em>
        </p>
        <p>
          <b>Total: ₹{total}</b>
        </p>
        {cartItems.length && <Link to="/shipping">Checkout</Link>}
      </aside>
    </div>
  );
};

export default Cart;
