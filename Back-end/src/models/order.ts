import mongoose, { mongo } from "mongoose";
import { trim } from "validator";

const schema = new mongoose.Schema(
  {
    shippingInfo: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      country: { type: String, required: true },
      pinCode: { type: Number, required: true },
      user: { type: String, ref: "User", required: true },
      subTotal: { type: Number, required: true },
      tax: { type: Number, required: true },
      shippingCharges: { type: Number, required: true },
      discount: { type: Number, required: true },
      total: { type: Number, required: true },
      status: {
        type: String,
        enum: ["Processinng", "Shipped", "Delivered"],
        default: "Processing",
      },
      orderITems: [
        {
          name: String,
          photo: String,
          price: Number,
          quantity: Number,
          productId: { type: mongoose.Types.ObjectId, ref: "Product" },
        },
      ],
    },
  },

  { timestamps: true }
);

export const Order = mongoose.model("Order", schema);
