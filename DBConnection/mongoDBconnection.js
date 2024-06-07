import mongoose from "mongoose";



 const   connectDb =  async () =>{
    try {
        await mongoose.connect(`mongodb+srv://imhamzee:Hamza1234@crud.sr0ntza.mongodb.net/crudapplication`) ;
        console.log("Mongo DB connection established !!!!!!!!") ;
    } catch (error) {
        console.error("Mongo db Connection Error: "  ,error)
        process.exit(1)
    }
}


export default connectDb
 