import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    image: {
      type: String,
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
