const jwt = require("jsonwebtoken");
const authors = [];

exports.register = (req, res) => {
  const { username, password, role } = req.body;
  const authorId = authors.length + 1;
  authors.push({ authorId, username, password, role });
  res.status(201).json({ message: "Author registered successfully" });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  const author = authors.find(
    (author) => author.username === username && author.password === password
  );
  if (!author) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ authorId: author.authorId }, "secretkey");
  res.json({ token });
};
