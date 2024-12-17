import asyncHandler from "express-async-handler";
import { User } from "../Models/userModel.js";

export const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ msg: "All fields are mandatory" });
    }

  res.status(200).json({msg:'Register the user'});
});

export const loginUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  res.status(200).json(user);
});

export const currentUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ msg: "All fields are mandatory" });
  }
  const user = await User.create({
    username,
    email,
    password,
  });
  res.status(201).json(user);
});



