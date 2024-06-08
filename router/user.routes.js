import express from "express";
import {registeruser , createUser , getUser } from "../controller/user.controller.js";

const router = express.Router();

// defining routes
router.route("/register").post(createUser);
// get all the user from the database

router.route('/register').get(getUser)


export default router;
