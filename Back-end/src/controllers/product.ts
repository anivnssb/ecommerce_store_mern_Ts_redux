import { Product } from "../models/product.js";
import { TryCatch } from "../middlewares/error.js";
import ErrorHandler from "../utils/utility-class.js";
import { Request } from "express";
import { NewProductRequestBody } from "../types/types.js";
import { rm } from "fs";

export const newProduct = TryCatch(
  async (req: Request<{}, {}, NewProductRequestBody>, res, next) => {
    const { name, price, category, stock } = req.body;
    const photo = req.file;

    if (!photo) return next(new ErrorHandler("Please Add Photo", 400));
    if (!name || !price || !category || !stock) {
      rm(photo.path, () => console.log("Photo Deleted Successfully"));
      return next(new ErrorHandler("Please Enter All Fields", 400));
    }

    await Product.create({
      name,
      price,
      stock,
      category: category.toLowerCase(),
      photo: photo.path,
    });
    res
      .status(201)
      .json({ success: true, message: "Product Created Successfully" });
  }
);

export const getLatestProduct = TryCatch(async (req, res, next) => {
  const products = await Product.find({}).sort({ createdAt: -1 }).limit(5);
  res.status(200).json({ success: true, products });
});

export const getAdminProduct = TryCatch(async (req, res, next) => {
  const products = await Product.find({}).sort({ createdAt: -1 });
  res.status(200).json({ success: true, products });
});

export const getSingleProduct = TryCatch(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) return next(new ErrorHandler("Invalid Product ID", 404));
  res.status(200).json({ success: true, product });
});

export const deleteProduct = TryCatch(async (req, res, next) => {});

export const getAllCategories = TryCatch(async (req, res, next) => {
  console.log("cate", "categories");
  const categories = await Product.distinct("category");
  res.status(200).json({ success: true, categories });
});
