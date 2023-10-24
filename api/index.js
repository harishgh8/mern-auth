import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch(() => {
    console.log("err");
  });
const app = express();

app.listen(3000, () => {
  console.log("server says hello and listening");
});
