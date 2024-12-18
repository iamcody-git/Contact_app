import express from "express";
import { currentUser, loginUser, registerUser } from "../controllers/userController.js";
import { validateToken } from "../middleware/validateToken.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/currentuser",validateToken,currentUser);

export default router;
