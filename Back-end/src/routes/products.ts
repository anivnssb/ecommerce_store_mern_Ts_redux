import express from "express";
import {
  newProduct,
  getLatestProduct,
  deleteProduct,
  getAllCategories,
  getAdminProduct,
  getSingleProduct,
  updateProduct,
  getAllProducts,
} from "../controllers/product.js";
import { adminOnlyMiddleWare } from "../middlewares/auth.js";
import { singleUploadMiddleWare } from "../middlewares/multer.js";

const app = express.Router();

// route - /api/v1/product/new
app.post("/new", adminOnlyMiddleWare, singleUploadMiddleWare, newProduct);

// route - /api/v1/product/latest
app.get("/latest", getLatestProduct);

// route - /api/v1/product/admin-products"
app.get("/admin-products", getAdminProduct);

// route - /api/v1/product/categories
app.get("/categories", getAllCategories);

// route - /api/v1/product/all    with filters
app.get("/all", getAllProducts);

// route - /api/v1/product/dynamicID
app.get("/:id", getSingleProduct);
app.put("/:id", singleUploadMiddleWare, updateProduct);
app.delete("/:id", adminOnlyMiddleWare, deleteProduct);

export default app;
