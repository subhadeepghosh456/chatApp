import express from "express";
import {
  getOtherUser,
  getProfile,
  login,
  logout,
  register,
} from "../controller/user.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/profile", protect, getProfile);
router.get("/other-user", protect, getOtherUser);
router.post("/logout", protect, logout);

export default router;
