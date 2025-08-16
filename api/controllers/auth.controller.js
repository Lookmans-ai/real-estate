import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  // Perform signup logic here
  const hashPassword = bcrypt.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashPassword,
  });
  //   save to database

  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    if (error.code === 11000) {
      next(errorHandler(400, "Username or email already exists."));
    } else {
      next(errorHandler(500, "Internal Server Error"));
    }
  }
};
