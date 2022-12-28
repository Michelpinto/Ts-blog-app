import React from 'react';
import Nav from '../../components/nav/Nav';
import { fetchBlogs, reset } from '../../app/data/blogFeatures/blogSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { BlogsDiv, Div, BlogDiv, StateDiv } from './styles';
import State from '../../components/state/State';

const Blogs: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const blogs = useSelector((state: any) => state.data.blogs);
  const { isLoading, isError, message } = useSelector(
    (state: any) => state.data
  );
  const { user } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }

    dispatch(fetchBlogs());

    // return () => {
    //   dispatch(reset());
    // };
  }, [dispatch, user, navigate]);

  return (
    <>
      <Nav />
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
    </>
  );
};

export default Blogs;
