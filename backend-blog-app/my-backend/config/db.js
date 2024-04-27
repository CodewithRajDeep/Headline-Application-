import mongoose from "mongoose";

const connectDB = async () => {
   try{
    const DB_URI = process.env.DB_URI ||"mongodb+srv://deepraj6897:wdpgJ55RzVXTbcuE@deepraj.b4dkz7l.mongodb.net/";
    await mongoose.connect(DB_URI);
    console.log("Database is connected...");
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
