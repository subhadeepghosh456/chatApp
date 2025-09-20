import express from "express";
import "dotenv/config";
import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
import connectDB from "./DB/database.js";
import { errorMiddleWare } from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);


app.use(errorMiddleWare)

connectDB()
  .then(() => {
    console.log("DB connected");
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("server start..", PORT);
    });
  })
  .catch((err) => {
    console.log("DB connection failed", err);
  });
