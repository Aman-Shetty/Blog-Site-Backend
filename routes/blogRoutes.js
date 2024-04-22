const express = require("express");
const router = express.Router();
const {
  getAllBlogs,
  createBlog,
  getBlogsByAuthorId,
} = require("../controllers/blogController");
const { authenticate, checkAdmin } = require("../middleware/authentication");

router.get("/", authenticate, getAllBlogs);
router.post("/", authenticate, checkAdmin("admin"), createBlog);
router.get("/:authorId", authenticate, getBlogsByAuthorId);

module.exports = router;
