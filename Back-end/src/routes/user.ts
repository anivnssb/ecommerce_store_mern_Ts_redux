import express from "express";
import {
  newUser,
  getAllUsers,
  getUser,
  deleteUser,
} from "../controllers/user.js";
import { adminOnlyMiddleWare } from "../middlewares/auth.js";

const app = express.Router();

// route - /api/v1/user/new
app.post("/new", newUser);

// route - /api/v1/user/all
app.get("/all", adminOnlyMiddleWare, getAllUsers);

// route - /api/v1/user/dynamicID
app.get("/:id", getUser);
app.delete("/:id", adminOnlyMiddleWare, deleteUser);

export default app;
