import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return next(errorHandler(400, "All fields are required."));
  }
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

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return next(errorHandler(400, "Wrong credentials."));
    }
    // Generate token or session here if needed
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    const { password: pass, ...rest } = user._doc;

    res
      .cookie("token", token, { httpOnly: true })
      .status(200)
      .json({
        ...rest,
        message: "User signed in successfully!",
      });
  } catch (error) {
    if (error.code === 11000) {
      next(errorHandler(400, "Invalid email or password."));
    } else {
      next(errorHandler(500, "Internal Server Error"));
    }
  }
};
