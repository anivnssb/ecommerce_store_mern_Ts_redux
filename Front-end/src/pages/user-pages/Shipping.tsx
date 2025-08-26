import { useState, type ChangeEvent, type ChangeEventHandler } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  });
  const changeHndler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setShippingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className="shipping">
      <button className="back-btn" onClick={() => navigate("/cart")}>
        <BiArrowBack />
      </button>
      <form>
        <h1>Shipping Address</h1>
        <input
          required
          type="text"
          placeholder="Address"
          name="address"
          value={shippingInfo.address}
          onChange={changeHndler}
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          value={shippingInfo.city}
          onChange={changeHndler}
        />
        <input
          type="text"
          placeholder="State"
          name="state"
          value={shippingInfo.state}
          onChange={changeHndler}
        />
        <select
          required
          name="country"
          value={shippingInfo.country}
          onChange={changeHndler}
        >
          <option value="">Choose Country</option>
          <option value="india">India</option>
        </select>
        <input
          type="text"
          placeholder="PinCode"
          name="pinCode"
          value={shippingInfo.pinCode}
          onChange={changeHndler}
        />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Shipping;
