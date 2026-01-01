import express from "express";
import "./config/env.js";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import blogsRouter from "./routes/blogRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
connectDB();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/auth", authRoutes);
app.use("/blogs", blogsRouter);

app.listen(4000, () => {
  console.log("serve is running on http://localhost:4000/");
});
