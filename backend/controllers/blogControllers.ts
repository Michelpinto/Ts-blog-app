import { Request, Response } from 'express';
const Blog = require('../model/blogModel');
// getBlogs
const getBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.find();

    res.status(200).json(blogs);
  } catch (error) {
    console.log(error);
  }
};
// createBlogs
const setBlog = async (req: Request, res: Response) => {
  const errorMessage: any[] = [];
  try {
    if (!req?.body?.text) {
      res.status(400);
      throw new Error('Please enter a goal');
    }

    const blog = await Blog.create({
      title: req.body.title,
      text: req.body.text,
    });

    res.status(200).json(blog);
  } catch (error) {
    console.log(error);
    errorMessage.push(error);
  }
};
// updateBlog
const updateBlog = async (req: Request, res: Response) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};
// deleteBlog
const deleteBlog = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      res.status(404);
      throw new Error('Blog not found');
    }

    await blog.deleteOne();

    res.status(200).json(req.params.id);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getBlogs,
  setBlog,
  updateBlog,
  deleteBlog,
};
