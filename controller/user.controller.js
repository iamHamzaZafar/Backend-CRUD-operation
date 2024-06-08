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
    res.status(400).json({ message: "User registration Faied" });
  }
};



// code to get User 
const getUser = async (req, res) => {
    try {
      const users =  await User.find() ;
       res.json(users)
    } catch (error) {
        res.status(400).json({ message: "Server Error "})
    }
}


// Code to get User by id 

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        console.error(error); // Log the error message to the console
        res.status(500).json({ message: "Error fetching user" });
    }
}




// Code to delete User

const deleteUser = async (req, res) => {
    try {
       const user = await User.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).send(error.message)
    }
}


// code to updateuser 
const updateUser = async (req , res ) =>{

}





export {
    createUser,
    registeruser,
    updateUser,
    getUserById,
    deleteUser,
    getUser,
}