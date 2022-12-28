import axios from 'axios';
import { Blog } from './blogSlice';

const API_URL = 'http://localhost:8000/api/blogs/';

const createBlog = async (blog: Blog, token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, blog, config);

  return response.data;
};

const fetchBlogs = async (token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);
  return response.data;
};

const blogService = {
  createBlog,
  fetchBlogs,
};

export default blogService;
