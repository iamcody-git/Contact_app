import express from "express";

const router = express.Router();

router.post("/register", (req, res) => {
  res.json({ message: "Register the user" });
});

router.post("/login", (req, res) => {
  res.json({ message: "Login the user" });
});

router.get("/currentuser", (req, res) => {
  res.json({ message: " current user infromation" });
});

export default router;
