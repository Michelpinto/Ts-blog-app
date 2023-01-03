import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Nav from '../../components/nav/Nav';
import { IoTrashOutline, IoCreateOutline } from 'react-icons/io5';
import { deleteBlog } from '../../app/data/blogFeatures/blogSlice';
import { AppDispatch } from '../../app/store';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Div2, SingleBlogDiv } from './styles';

const SingleBlogPage: React.FC = () => {
  const { id } = useParams();
  const blogs = useSelector((state: any) => state.data.blogs);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleDelete = (id: string) => {
    dispatch(deleteBlog(id));
    navigate('/');
  };

  return (
    <>
      <Nav />
      {blogs
        .filter((blog: any) => blog._id === id)
        .map((blog: any) => (
          <SingleBlogDiv key={blog._id}>
            <Div2>
              <h1>{blog.title}</h1>
              <span>
                {/* <IoCreateOutline /> */}
                <IoTrashOutline onClick={() => handleDelete(blog._id)} />
              </span>
            </Div2>
            <p dangerouslySetInnerHTML={{ __html: blog.text }} />
          </SingleBlogDiv>
        ))}
    </>
  );
};

export default SingleBlogPage;
