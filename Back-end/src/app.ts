import express from "express";

import userRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";
import { errorMiddleWare } from "./middlewares/error.js";
const port = 3000;

connectDB();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api working with /api/v1");
});
// using routes
app.use("/api/v1/user", userRoute);

app.use(errorMiddleWare);
app.listen(port, () => {
  console.log(`server is working on localhost:${port}`);
});
