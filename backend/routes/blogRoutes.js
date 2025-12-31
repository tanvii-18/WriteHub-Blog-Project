import express from "express";
import { protectedRoute } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/upload.js";
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} from "../controllers/blog_Controller.js";

const router = express.Router();

router.get("/", getAllBlogs);
router.get("/:id", getBlogById);
router.post("/", protectedRoute, upload.single("image"), createBlog);
router.put("/:id", protectedRoute, upload.single("image"), updateBlog);
router.delete("/:id", protectedRoute, deleteBlog);

export default router;
