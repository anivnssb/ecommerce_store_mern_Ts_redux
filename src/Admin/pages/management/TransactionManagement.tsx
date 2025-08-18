import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import type { OrderItemType, OrderType } from "../../../types";
import { Link } from "react-router-dom";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const orderItemsArray: OrderItemType[] = [
  {
    name: "Puma",
    photo: img,
    price: 2000,
    quantity: 4,
    _id: "abcd123",
  },
];
const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "Anvin",
    address: "MLA Road",
    city: "North Paravoor",
    country: "india",
    state: "Kerala",
    pincode: 123,
    status: "Processing",
    subtotal: 1200,
    discount: 40,
    shippingCharges: 20,
    tax: 20,
    total: 8000,
    orderItems: orderItemsArray,
    _id: "efgh123",
  });
  const {
    name,
    address,
    city,
    country,
    state,
    pincode,
    status,
    subtotal,
    discount,
    shippingCharges,
    tax,
    total,
    orderItems,
    _id,
  } = order;
  const updateHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "Shipped" : "Delivered",
    }));
  };
  return (
    <div className="admin-container">
      <Sidebar />
      <main className="product-management">
        <section>
          <h2>Order Items</h2>
          {order.orderItems.map((i) => (
            <ProductOrderCard
              name={i.name}
              photo={i.photo}
              price={i.price}
              quantity={i.quantity}
              _id={i._id}
            />
          ))}
        </section>
        <article>
          <h1>Order Info</h1>

          <h5>User Info</h5>
          <p>Name: {name}</p>
          <p>
            Address: {`${address}, ${city}, ${state}, ${country}, ${pincode}`}
          </p>

          <h5>Amount Info</h5>
          <p>Subtotal: {subtotal}</p>
          <p>Shipping Charges :{shippingCharges}</p>
          <p>Tax: {tax}</p>
          <p>Discount: {discount}</p>
          <p>Total: {total}</p>

          <h5>Status Info</h5>
          <p>
            Status:{" "}
            <span
              className={
                status === "Delivered"
                  ? "purple"
                  : status === "Shipped"
                  ? "green"
                  : "red"
              }
            >
              {status}
            </span>
          </p>

          <button onClick={updateHandler}>Process Status</button>
        </article>
      </main>
    </div>
  );
};

const ProductOrderCard = ({
  price,
  quantity,
  name,
  photo,
  _id,
}: OrderItemType) => {
  return (
    <div className="transaction-product-card">
      <img src={photo} alt="" />
      <Link to={`/product/${_id}`}>{name} </Link>
      <span>
        ${price} X {quantity}=${price * quantity}
      </span>
    </div>
  );
};

export default TransactionManagement;
