import express from "express";

import userRoute from "./routes/user.js";
import productRoute from "./routes/products.js";
import { connectDB } from "./utils/features.js";
import { errorMiddleWare } from "./middlewares/error.js";
import NodeCache from "node-cache";
const port = 3000;

connectDB();
export const myCache = new NodeCache();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api working with /api/v1");
});

// using routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);

app.use("/uploads", express.static("uploads"));
app.use(errorMiddleWare);
app.listen(port, () => {
  console.log(`server is working on localhost:${port}`);
});
