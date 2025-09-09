import mongoose from "mongoose";
import { InvalidateCacheProps } from "../types/types.js";
import { Product } from "../models/product.js";
import { myCache } from "../app.js";
export const connectDB = (uri: string) => {
  mongoose
    .connect(uri, { dbName: "Ecommerce_Store" })
    .then((c) => console.log(`${c.connection.host} connected to db`))
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
