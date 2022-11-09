import React from 'react';
import { fetchBlogs } from '../../app/data/blogSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { BlogsDiv, Div, BlogDiv } from './styles';

const Blogs: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const blogs = useSelector((state: any) => state.data.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <Div>
      <h1>Posts</h1>

      <BlogsDiv>
        {blogs.map((blog: any) => (
          <Link key={blog._id} to={`/${blog._id}`}>
            <BlogDiv>
              <h1>{blog.title}</h1>
              <p dangerouslySetInnerHTML={{ __html: blog.text }} />
            </BlogDiv>
          </Link>
        ))}
      </BlogsDiv>
    </Div>
  );
};

export default Blogs;
