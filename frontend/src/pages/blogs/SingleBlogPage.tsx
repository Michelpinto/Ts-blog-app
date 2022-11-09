import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { SingleBlogDiv } from './styles';

interface SingleBlogProps {
  blog?: any;
}

const SingleBlogPage: React.FC<SingleBlogProps> = (blog) => {
  const { id } = useParams();
  const blogs = useSelector((state: any) => state.data.blogs);

  return (
    <>
      {blogs
        .filter((blog: any) => blog._id === id)
        .map((blog: any) => (
          <SingleBlogDiv key={blog._id}>
            <h1>{blog.title}</h1>
            <p>{blog.text}</p>
          </SingleBlogDiv>
        ))}
    </>
  );
};

export default SingleBlogPage;
