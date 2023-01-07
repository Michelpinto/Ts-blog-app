import React from 'react';
import Nav from '../../components/nav/Nav';
import { fetchBlogs, getBlog } from '../../app/data/blogFeatures/blogSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { BlogsDiv, Div, BlogDiv, StateDiv, DateText } from './styles';
import State from '../../components/state/State';
import { reset } from '../../app/data/authFeatures/authSlice';

const Blogs: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const blogs = useSelector((state: any) => state.data.blogs);
  // const { isLoading, isError, message } = useSelector(
  //   (state: any) => state.data
  // );
  const { user } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }

    dispatch(fetchBlogs());

    return () => {
      dispatch(reset());
    };
  }, [dispatch, user, navigate]);

  const handleGetBlog = (id: string) => {
    dispatch(getBlog(id));
    navigate(`/${id}`);
  };

  return (
    <>
      <Nav />
      <Div>
        <h1>Posts</h1>

        <BlogsDiv>
          {blogs.length > 0 ? (
            blogs.map((blog: any) => (
              <BlogDiv key={blog._id} onClick={() => handleGetBlog(blog._id)}>
                <div>
                  <h1>{blog.title}</h1>
                  <DateText>{blog.createdAt.split('T')[0]}</DateText>
                </div>
                <p dangerouslySetInnerHTML={{ __html: blog.text }} />
              </BlogDiv>
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
