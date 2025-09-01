import { User } from "../models/user.js";
import ErrorHandler from "../utils/utility-class.js";
import { TryCatch } from "./error.js";

export const adminOnlyMiddleWare = TryCatch(async (req, res, next) => {
  const { id } = req.query;
  if (!id) return next(new ErrorHandler("login please", 401));

  const user = await User.findById(id);
  if (!user) return next(new ErrorHandler("Invalid ID", 400));
  if (user.role !== "admin") return next(new ErrorHandler("Not allowed!", 401));
  next();
});
