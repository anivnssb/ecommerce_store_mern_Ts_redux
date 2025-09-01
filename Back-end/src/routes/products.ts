import express from "express";
import {
  newProduct,
  getAllProduct,
  getProduct,
  deleteProduct,
} from "../controllers/product.js";
import { adminOnlyMiddleWare } from "../middlewares/auth.js";

const app = express.Router();

// route - /api/v1/product/new
app.post("/new", adminOnlyMiddleWare, newProduct);

// route - /api/v1/product/all
app.get("/all", getAllProduct);

// route - /api/v1/product/dynamicID
app.get("/:id", getProduct);
app.delete("/:id", adminOnlyMiddleWare, deleteProduct);

export default app;
