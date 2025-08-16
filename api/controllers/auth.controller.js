import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const signup = async (req, res) => {
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
    console.error("Error saving user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
