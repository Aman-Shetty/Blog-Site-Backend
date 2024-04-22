const blogs = [];

exports.getAllBlogs = (req, res) => {
  res.json(blogs);
};

exports.createBlog = (req, res) => {
  const { title, content } = req.body;
  const blogId = blogs.length + 1;
  const authorId = req.authorId;
  blogs.push({ blogId, authorId, title, content });
  res.status(201).json({ message: "Blog created successfully" });
};

exports.getBlogsByAuthorId = (req, res) => {
  const authorId = parseInt(req.params.authorId);
  const authorBlogs = blogs.filter((blog) => blog.authorId === authorId);
  res.json(authorBlogs);
};
