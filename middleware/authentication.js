const jwt = require("jsonwebtoken");

exports.authenticate = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, "secretkey");
    req.authorId = decoded.authorId;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid token" });
  }
};

exports.checkAdmin = (role) => {
  return (req, res, next) => {
    if (role !== "admin") {
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  };
};
