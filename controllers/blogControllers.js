const asyncHandler = require('express-async-handler');
const Blog = require('../model/blogModel');
const User = require('../model/userModel');
// getBlogs
const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({ user: req.user.id }).sort({ createdAt: -1 });

  res.status(200).json(blogs);
});
// getBlog
const getBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(404);
    throw new Error('Blog not found');
  }

  res.status(200).json(blog);
});

// createBlogs
const setBlog = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.text) {
    res.status(400);
    throw new Error('Title is required');
  }

  const blog = await Blog.create({
    title: req.body.title,
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(blog);
});
// updateBlog
const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(404);
    throw new Error('Blog not found');
  }

  if (!req.user) {
    res.status(404);
    throw new Error('User not found');
  }

  if (blog.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Not authorized');
  }

  const updatedBlog = await Blog.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      text: req.body.text,
    },
    { new: true }
  );

  res.status(200).json(updatedBlog);
});
// deleteBlog
const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(404);
    throw new Error('Blog not found');
  }

  if (!req.user) {
    res.status(404);
    throw new Error('User not found');
  }

  if (blog.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Not authorized');
  }

  await blog.deleteOne();

  res.status(200).json(req.params.id);
});

module.exports = {
  getBlogs,
  setBlog,
  updateBlog,
  deleteBlog,
  getBlog,
};
