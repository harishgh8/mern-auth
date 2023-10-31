import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

// connect to mongoDB
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch(() => {
    console.log("err");
  });
const app = express();
// in order to receive json as input we need this
app.use(express.json());

app.listen(3000, () => {
  console.log("server says hello and listening");
});

// path or api routes

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
