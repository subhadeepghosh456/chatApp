import User from "../model/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { errorHandler } from "../utils/errorHandler.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const register = asyncHandler(async (req, res, next) => {
  const { fullName, email, gender, password } = req.body;
  if (!fullName || !email || !gender || !password) {
    return next(new errorHandler("All fields are required", 400));
  }

  const isUserExist = await User.findOne({ email });
  if (isUserExist) {
    return next(new errorHandler("User already exists", 409));
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({
    fullName,
    email,
    gender,
    password: hashedPassword,
  });

  if (!user) {
    return next(new errorHandler("Failed to create user", 500));
  }

  user.password = undefined;
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  res
    .status(201)
    .cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    })
    .json({
      success: true,
      details: user,
      message: "User registered successfully",
    });
});

export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new errorHandler("Email and password are required", 400));
  }

  const isUserExist = await User.findOne({ email });
  if (!isUserExist) {
    return next(new errorHandler("Wrong email or password", 409));
  }

  const isPasswordMatch = await bcrypt.compare(password, isUserExist.password);
  if (!isPasswordMatch) {
    return next(new errorHandler("Wrong email or password", 409));
  }
  isUserExist.password = undefined;
  const token = jwt.sign({ id: isUserExist._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  res
    .status(200)
    .cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    })
    .json({
      success: true,
      details: isUserExist,
      message: "User logged in successfully",
    });
});


export const getProfile = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user).select("-password");
  if (!user) {
    return next(new errorHandler("User not found", 404));
  } 
  res.status(200).json({
    success: true,
    details: user,
    message: "User profile fetched successfully",
  });
});

export const logout = asyncHandler(async (req, res, next) => {
  res
    .status(200)
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "User logged out successfully",
    });
});

export const getOtherUser = asyncHandler(async (req, res, next) => {
  const users = await User.find({_id: {$ne: req.user}});
  if (!users) {
    return next(new errorHandler("User not found", 404));
  } 
  res.status(200).json({
    success: true,
    details: users,
    message: "User profile fetched successfully",
  });
});
