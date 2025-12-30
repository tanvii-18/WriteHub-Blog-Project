import { users } from "../model/authModel.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = users.findOne({ email });

    if (!existingUser) {
      res.json({ message: "user already registered!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await users.create({ name, email, password: hashedPassword });

    res.json({ message: "user registered!", user });
  } catch (error) {
    res.json({ message: "user can't register!", error });
  }
};
