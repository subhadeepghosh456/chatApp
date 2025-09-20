import User from "../model/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { errorHandler } from "../utils/errorHandler.js";
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

  res.status(201).json({
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
  res.status(200).json({
    success: true,
    details: isUserExist,
    message: "User logged in successfully",
  });
});


  

 

