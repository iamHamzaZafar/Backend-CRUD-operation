import User from "../Model/user.model.js";

const registeruser = async (req, res) => {
//   console.log("Request Body:", req.body);

//   const { userName, firstName, lastName } = req.body;

//   if (!userName || !firstName || !lastName) {
//     return res
//       .status(400)
//       .json({ message: "User name and password are required" });
//   }

//   console.log(
//     `User Name: ${userName}, First Name : ${firstName} , :ast Name : ${lastName}}`
//   );
//   res.status(201).json({ message: "User registered successfully" });
};

// Code for register User
const createUser = async (req, res) => {
  const { userName, firstName, lastName } = req.body;
  if (!userName || !firstName || !lastName) {
    return res
      .status(400)
      .json({ message: "User name and password are required" });
  }

  try {
    const user = new User({ userName, firstName, lastName });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ message: "User registration failedd" });
  }
};



// code to get User 
const gerUser = async (req, res) => {

}


// Code to get User by id 

const getUserById = async (req, res) => {

}




// Code to delete User

const deleteUser = async (req, res) => {

}


// code to updateuser 
const updateUser = async (req , res ) =>{

}





export {
    createUser,
    registeruser
}