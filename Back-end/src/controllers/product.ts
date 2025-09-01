import { Product } from "../models/product.js";
import { TryCatch } from "../middlewares/error.js";
import ErrorHandler from "../utils/utility-class.js";

export const newProduct = TryCatch(async (req, res, next) => {});

export const getAllProduct = TryCatch(async (req, res, next) => {});

export const getProduct = TryCatch(async (req, res, next) => {});

export const deleteProduct = TryCatch(async (req, res, next) => {});
