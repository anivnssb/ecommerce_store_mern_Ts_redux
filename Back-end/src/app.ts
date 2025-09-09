import express from "express";

import userRoute from "./routes/user.js";
import productRoute from "./routes/products.js";
import orderRoute from "./routes/order.js";
import { connectDB } from "./utils/features.js";
import { errorMiddleWare } from "./middlewares/error.js";
import NodeCache from "node-cache";
import { config } from "dotenv";
import morgan from "morgan";

config({ path: "./.env" });

const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI || "";

connectDB(mongoURI);
export const myCache = new NodeCache();
const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Api working with /api/v1");
});

// using routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/order", orderRoute);

app.use("/uploads", express.static("uploads"));
app.use(errorMiddleWare);
app.listen(port, () => {
  console.log(`server is working on localhost:${port}`);
});
