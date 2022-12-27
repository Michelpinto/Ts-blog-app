import axios from 'axios';
import { Blog } from './blogSlice';

const API_URL = 'http://localhost:8000/api/blog/';

const createBlog = async (blog: Blog, token: string) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, blog, config);

  return response.data;
};

const blogService = {
  createBlog,
};

export default blogService;
