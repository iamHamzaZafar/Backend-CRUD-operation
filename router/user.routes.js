import express from "express";
import {registeruser , createUser , getUser , getUserById , deleteUser , updateUser} from "../controller/user.controller.js";

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

// update user route
router.route('/user/:id').patch(updateUser) ;


export default router;
