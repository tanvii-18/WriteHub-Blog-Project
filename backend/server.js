import express from "express";
import { connectDB } from "./config/db.js";
import router from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";

const app = express();
connectDB();
app.use(express.json());
app.use(cookieParser());

app.use("/", router);

app.listen(4000, () => {
  console.log("serve is running on http://localhost:4000/");
});
