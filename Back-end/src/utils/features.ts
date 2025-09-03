import mongoose from "mongoose";
import { InvalidateCacheProps } from "../types/types.js";
import { Product } from "../models/product.js";
import { myCache } from "../app.js";
export const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017", { dbName: "Ecommerce_Store" })
    .then((c) => console.log(`db connected to ${c.connection.host}`))
    .catch((e) => console.log(e));
};

export const invalidateCache = async ({
  product,
  order,
  admin,
}: InvalidateCacheProps) => {
  if (product) {
    const productKeys: string[] = [
      "admin-products",
      "categories",
      "latest-products",
    ];
    const product = await Product.find({}).select("_id");
    product.forEach((i) => {
      productKeys.push(`product-${i._id}`);
    });
    myCache.del(productKeys);
  }
  if (order) {
  }
  if (admin) {
  }
};
