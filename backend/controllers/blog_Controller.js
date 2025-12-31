import { Blogs } from "../model/blogModel.js";

export const createBlog = async (req, res) => {
  const { title, content } = req.body;

  try {
    const blog = await Blogs.create({
      title,
      content,
      image: req.file ? req.file.path : null,
      author: req.userId,
    });

    res.status(201).json({ message: "blog is created!", blog });
  } catch (error) {
    res.status(400).json({ message: "failed to created blog" });
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.find()
      .populate("author", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "failed to fetch blogs" });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const blog = await Blogs.findById(req.params.id).populate(
      "author",
      "name email"
    );

    if (!blog) {
      return res.status(404).json({ message: "blog not found" });
    }

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: "failed to fetch blog" });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const blog = await Blogs.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "blog not found" });
    }

    if (blog.author.toString() !== req.userId) {
      return res.status(403).json({ message: "not allowed" });
    }

    blog.title = req.body.title || blog.title;
    blog.content = req.body.content || blog.content;

    if (req.file) {
      blog.image = req.file.path;
    }

    await blog.save();

    res.status(200).json({ message: "blog updated", blog });
  } catch (error) {
    res.status(400).json({ message: "failed to update blog" });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blogs.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "blog not found" });
    }

    if (blog.author.toString() !== req.userId) {
      return res.status(403).json({ message: "not allowed" });
    }

    await blog.deleteOne();

    res.status(200).json({ message: "blog deleted" });
  } catch (error) {
    res.status(400).json({ message: "failed to delete blog" });
  }
};
