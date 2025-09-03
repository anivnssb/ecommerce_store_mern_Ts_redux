import { Product } from "../models/product.js";
import { TryCatch } from "../middlewares/error.js";
import ErrorHandler from "../utils/utility-class.js";
import { Request } from "express";
import {
  BaseQuery,
  NewProductRequestBody,
  SearchQueryRequestBody,
} from "../types/types.js";
import { rm } from "fs";
import { myCache } from "../app.js";
import { invalidateCache } from "../utils/features.js";

export const getLatestProduct = TryCatch(async (req, res, next) => {
  let products;
  if (myCache.has("latest-products")) {
    products = JSON.parse(myCache.get("latest-products") as string);
  } else {
    products = await Product.find({}).sort({ createdAt: -1 }).limit(5);
    myCache.set("latest-products", JSON.stringify(products));
  }

  res.status(200).json({ success: true, products });
});

export const getAdminProduct = TryCatch(async (req, res, next) => {
  let products;
  if (myCache.has("admin-products")) {
    products = JSON.parse(myCache.get("admin-products") as string);
  } else {
    products = await Product.find({}).sort({ createdAt: -1 });
    myCache.set("admin-products", JSON.stringify(products));
  }

  res.status(200).json({ success: true, products });
});

export const getSingleProduct = TryCatch(async (req, res, next) => {
  let product;
  const id = req.params.id;

  if (myCache.has(`product-${id}`)) {
    product = JSON.parse(myCache.get(`product-${id}`) as string);
  } else {
    product = await Product.findById(id);
    myCache.set(`product-${id}`, JSON.stringify(product));
  }

  if (!product) return next(new ErrorHandler("Invalid Product ID", 404));

  res.status(200).json({ success: true, product });
});

export const getAllCategories = TryCatch(async (req, res, next) => {
  let categories;
  if (myCache.has("categories")) {
    categories = JSON.parse(myCache.get("categories") as string);
  } else {
    categories = await Product.distinct("category");
    myCache.set("categories", JSON.stringify(categories));
  }

  res.status(200).json({ success: true, categories });
});

export const getAllProducts = TryCatch(
  async (req: Request<{}, {}, {}, SearchQueryRequestBody>, res, next) => {
    const { category, price, search, sort } = req.query;

    const page = Number(req.query.page) || 1;
    const limit = Number(process.env.PRODUCT_PER_PAGE) || 8;
    const skip = limit * (page - 1);

    const baseQuery: BaseQuery = {};

    if (search) baseQuery.name = { $regex: search, $options: "i" };
    if (price) baseQuery.price = { $lte: Number(price) };
    if (category) baseQuery.category = category;

    const productFilterPromise = Product.find(baseQuery)
      .sort(sort ? { price: sort === "asc" ? 1 : -1 } : undefined)
      .limit(limit)
      .skip(skip);

    const [products, allFilteredProducts] = await Promise.all([
      productFilterPromise,
      Product.find(baseQuery),
    ]);

    const totalPage = Math.ceil(allFilteredProducts.length / limit);

    res.status(200).json({ success: true, products, totalPage });
  }
);

export const deleteProduct = TryCatch(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) return next(new ErrorHandler("Invalid Product ID", 404));

  rm(product.photo, () => console.log("Product Photo Deleted Successfully"));
  await Product.deleteOne({ _id: req.params.id });

  await invalidateCache({ product: true });

  res
    .status(200)
    .json({ success: true, message: "Product Deleted Successfully!" });
});

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

    await invalidateCache({ product: true });

    res
      .status(201)
      .json({ success: true, message: "Product Created Successfully" });
  }
);

export const updateProduct = TryCatch(async (req, res, next) => {
  const { id } = req.params;
  const { name, price, category, stock } = req.body;
  const photo = req.file;

  const product = await Product.findById(id);

  if (!product) return next(new ErrorHandler("Invalid ID", 404));

  if (photo) {
    rm(product.photo, () => console.log("Old Photo Deleted Successfully"));
    product.photo = photo.path;
  }

  if (name) product.name = name;
  if (price) product.price = price;
  if (stock) product.stock = stock;
  if (category) product.category = category;
  await product.save();

  await invalidateCache({ product: true });

  res
    .status(201)
    .json({ success: true, message: "Product Updated Successfully" });
});
