import userModel from "../model/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { errorHandler } from "../utils/errorHandler.js";
import jwt from "jsonwebtoken";

export const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (req.cookies.token) {
    token = req.cookies.token;
  }
  if (!token) {
    return next(new errorHandler("Not authorized", 401));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decoded.id;
  next();
});
