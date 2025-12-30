import { users } from "../model/authModel.js";
import bcrypt from "bcrypt";

// user registration
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = users.findOne({ email });

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

  res.json({ message: "Login Successfully!!", user });
};

// logout
export const logout = (req, res) => {};
