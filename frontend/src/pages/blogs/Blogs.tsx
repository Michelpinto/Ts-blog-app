import React from 'react';
import { fetchBlogs } from '../../app/data/blogSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { BlogsDiv, Div, BlogDiv, StateDiv } from './styles';
import State from '../../components/state/State';

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
        {blogs.length > 0 ? (
          blogs.map((blog: any) => (
            <Link key={blog._id} to={`/${blog._id}`}>
              <BlogDiv>
                <h1>{blog.title}</h1>
                <p dangerouslySetInnerHTML={{ __html: blog.text }} />
              </BlogDiv>
            </Link>
          ))
        ) : (
          <StateDiv>
            <State />
            <h1>
              No blogs found...{' '}
              <Link to='/newBlog'>
                <b>Create</b>
              </Link>{' '}
              something now!
            </h1>
          </StateDiv>
        )}
      </BlogsDiv>
    </Div>
  );
};

export default Blogs;
