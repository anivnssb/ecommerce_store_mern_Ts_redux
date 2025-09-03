import { NextFunction, Request, Response } from "express";

export interface NewUserRequestBody {
  _id: string;
  name: string;
  photo: string;
  email: string;
  gender: string;
  dob: Date;
}
export interface NewProductRequestBody {
  name: string;
  category: string;
  price: number;
  stock: number;
}

export interface SearchQueryRequestBody {
  search?: string;
  price?: string;
  category?: string;
  stock?: string;
  sort?: string;
  page?: string;
}

export interface BaseQuery {
  name?: { $regex: string; $options: string };
  price?: { $lte: number };
  category?: string;
}

export interface InvalidateCacheProps {
  product?: boolean;
  order?: boolean;
  admin?: boolean;
}

export type ControllerType = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void | Response<any, Record<string, any>>>;
