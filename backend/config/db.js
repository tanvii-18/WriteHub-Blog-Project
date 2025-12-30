import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/writeHub_Blogs");
    console.log("Database connected!");
  } catch (error) {
    console.log("Database couldn't connected!", error);
  }
};
