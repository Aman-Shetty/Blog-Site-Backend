const express = require("express");
const bodyParser = require("body-parser");
const authorRoutes = require("./routes/authorRoutes");
const blogRoutes = require("./routes/blogRoutes");

const app = express();
const PORT = 3000;

// Built-in middleware
app.use(bodyParser.json());

// Application-level middleware
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});

// Routes
app.use("/authors", authorRoutes);
app.use("/blogs", blogRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
