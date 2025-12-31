import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export const protectedRoute = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "login first!" });
  }

  try {
    const decode = jwt.verify(token, JWT_SECRET);
    req.userId = decode.userId;
    next();
  } catch (err) {
    res.json({ message: "invalid token" });
  }
};
