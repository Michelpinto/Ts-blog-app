import React from 'react';
import { fetchBlogs } from '../../app/data/blogSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { useEffect } from 'react';

import { BlogsDiv, Div, BlogDiv } from './styles';

const Blogs: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const blogs = useSelector((state: any) => state.blogs.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <Div>
      <h1>Posts</h1>

      <BlogsDiv>
        {blogs.map((blog: any) => (
          <BlogDiv key={blog._id}>
            <h1>{blog.title}</h1>
            <p>{blog.text}</p>
          </BlogDiv>
        ))}
      </BlogsDiv>
    </Div>
  );
};

export default Blogs;
