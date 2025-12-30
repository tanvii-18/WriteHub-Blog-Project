import mongoose from "mongoose";

const authSchema = new mongoose.Schema(
  {
    name: {
      typeof: String,
      require: true,
    },
    email: {
      typeof: String,
      require: true,
    },
    password: {
      typeof: String,
      require: true,
    },
  },
  { timestamps: true }
);

export const users = mongoose.model("auth", authSchema);
