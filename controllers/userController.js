import asyncHandler from "express-async-handler";
import { User } from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register User
export const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ msg: "All fields are mandatory" });
  }

  const userAvailable = await User.findOne({ email });

  if (userAvailable) {
    return res.status(400).json({ error: "User already registered" });
  }

  // Hash password
  const hashPassword = await bcrypt.hash(password, 10);
  console.log("Hashed password: ", hashPassword);

  const user = await User.create({
    username,
    email,
    password: hashPassword,
  });

  console.log(`User created ${user}`);
  if (user) {
    return res.status(201).json({ _id: user.id, email: user.email });
  } else {
    return res.status(400).json({ error: "User data is not valid" });
  }
});

// Login User
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "All fields are mandatory" });
  }

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "5m" }
    );
    return res.status(200).json({ accessToken });
  } else {
    return res.status(401).json({ error: "Email or password is incorrect" });
  }
});

// Current User
export const currentUser = asyncHandler(async (req, res) => {
  return res.json(req.user);
});
