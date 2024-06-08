import express from "express";
import {registeruser , createUser , getUser , getUserById , deleteUser} from "../controller/user.controller.js";

const router = express.Router();

// defining routes

// create user route
router.route("/user").post(createUser);

// get all the user from the database
router.route('/user').get(getUser)


// get user by its id 
router.route('/user/:id').get(getUserById)

// findbyid and delete user

router.route('/user/:id').delete(deleteUser)

export default router;
