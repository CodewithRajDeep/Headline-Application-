import mongoose from "mongoose";

const connectDB = async () => {
   try{
    const DB_URI = process.env.DB_URI;
    await mongoose.connect(DB_URI);
    console.log("Database is connected...");
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
