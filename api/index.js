import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";

dotenv.config();

mongoose
  .connect(process.env.URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);

const port = process.env.PORT || 1024;

app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}`);
});
