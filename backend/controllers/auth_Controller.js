import { users } from "../model/authModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

// user registration
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await users.findOne({ email });

    if (existingUser) {
      return res.json({ message: "user already registered!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await users.create({ name, email, password: hashedPassword });

    res.json({ message: "user registered!", user });
  } catch (error) {
    res.json({ message: "user can't register!", error });
  }
};

// User Login
export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await users.findOne({ email: email });

  if (!user) {
    return res.json({ message: "user not found!" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.json({ message: "wrong password!" });
  }

  // jwt
  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    maxAge: 60 * 60 * 1000,
  });

  res.json({ message: "Login Successfully!!", user });
};

// logout
export const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "strict",
    secure: false,
  });

  res.json({ message: "Logged out successfully!" });
};
