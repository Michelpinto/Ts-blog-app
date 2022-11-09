import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { SingleBlogDiv } from './styles';

const SingleBlogPage: React.FC = () => {
  const { id } = useParams();
  const blogs = useSelector((state: any) => state.data.blogs);

  return (
    <>
      {blogs
        .filter((blog: any) => blog._id === id)
        .map((blog: any) => (
          <SingleBlogDiv key={blog._id}>
            <h1>{blog.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: blog.text }} />
          </SingleBlogDiv>
        ))}
    </>
  );
};

export default SingleBlogPage;
