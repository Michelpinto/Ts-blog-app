import { Request, Response } from 'express';
const asyncHandler = require('express-async-handler');
const Blog = require('../model/blogModel');
// getBlogs
const getBlogs = asyncHandler(async (req: Request, res: Response) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });

  res.status(200).json(blogs);
});
// createBlogs
const setBlog = asyncHandler(async (req: Request, res: Response) => {
  if (!req.body.title || !req.body.text) {
    res.status(400);
    throw new Error('Title is required');
  }

  const blog = await Blog.create({
    title: req.body.title,
    text: req.body.text,
  });

  res.status(200).json(blog);
});
// updateBlog
const updateBlog = asyncHandler(async (req: Request, res: Response) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(404);
    throw new Error('Blog not found');
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
const deleteBlog = asyncHandler(async (req: Request, res: Response) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(404);
    throw new Error('Blog not found');
  }

  await blog.deleteOne();

  res.status(200).json(req.params.id);
});

module.exports = {
  getBlogs,
  setBlog,
  updateBlog,
  deleteBlog,
};
