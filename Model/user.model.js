// const mongoose = require("mongoose");
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
  },
  { timestamps: true }
);



const User = mongoose.model("User" , userSchema);

// module.exports = User ;
export default User;
