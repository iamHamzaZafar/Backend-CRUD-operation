import express from "express";
import {registeruser , createUser } from "../controller/user.controller.js";

const router = express.Router();

// defining routes
router.route("/register").post(createUser);
// router.post("/register", registeruser);


export default router;
