import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
 let mongoUrl = 'mongodb+srv://admin:admin@cluster0.uuxz0.mongodb.net/Ifashion?retryWrites=true&w=majority'
  if (mongoUrl !== null || mongoUrl !== undefined) {
    try {
      const connection = await mongoose.connect(mongoUrl);
      console.log(
        `mongodb connected on ${connection.connection.host}`
      );
    } catch (error) {
      console.log(
        `Error is coming from mongo connection ${error.message}`
      );
      process.exit(1);
    }
  } else {
    console.log("mongoUrl is undefined");
  }
};
export default connectDB;
