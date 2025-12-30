import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    name: {
      typeof: String,
      require: true,
    },
    content: {
      typeof: String,
      require: true,
    },
    author: {
      typeof: mongoose.Schema.Types.ObjectId,
      require: true,
    },
    publicationDate: {
      type: Date,
      default: Date.now,
    },
    likesCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const Blogs = mongoose.model("blog", blogSchema);
