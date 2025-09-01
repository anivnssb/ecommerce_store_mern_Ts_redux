import { User } from "../models/user.js";
import { TryCatch } from "../middlewares/error.js";
import ErrorHandler from "../utils/utility-class.js";

export const newUser = TryCatch(async (req, res, next) => {
  const { name, email, _id, dob, gender, photo } = req.body;

  if (!name || !email! || !_id || !gender || !photo || !dob) {
    return next(new ErrorHandler("Please fill all the fields", 400));
  }

  let user = await User.findById(_id);
  if (user) {
    res.status(200).json({ succes: true, message: `Welcome ${user.name}` });
    return;
  }

  user = await User.create({
    name,
    email,
    _id,
    gender,
    photo,
    dob: new Date(dob),
  });
  return res
    .status(201)
    .json({ success: true, message: `Welcome ${user.name}` });
});

export const getAllUsers = TryCatch(async (req, res, next) => {
  let users = await User.find({});
  res.status(200).json({ succes: true, users });
  return;
});

export const getUser = TryCatch(async (req, res, next) => {
  const id = req.params.id;
  let user = await User.findById(id);
  if (!user) {
    next(new ErrorHandler("Invalid ID", 400));
    return;
  }
  res.status(200).json({ success: true, user });
  return;
});

export const deleteUser = TryCatch(async (req, res, next) => {
  const id = req.params.id;
  let user = await User.findById(id);

  if (!user) return next(new ErrorHandler("Invalid ID", 400));

  await user.deleteOne();
  res
    .status(200)
    .json({ success: true, message: "User deleted successfully!" });
  return;
});
