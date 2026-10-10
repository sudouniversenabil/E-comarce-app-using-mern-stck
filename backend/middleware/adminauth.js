import jwt from "jsonwebtoken";

const adminauth = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.status(401).json({ success: false, message: "Not authorized, login again" });
    }
console.log('TOKEN RECEIVED:', JSON.stringify(token));
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "admin" || decoded.email !== process.env.ADMIN_EMAIL) {
      return res.status(401).json({ success: false, message: "Not authorized, login again" });
    }

    next();
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ success: false, message: error.message });
  }
};


export default adminauth;
// export default adminauth