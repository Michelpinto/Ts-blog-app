import React from 'react';
import { Link } from 'react-router-dom';
import { InsideDiv, Div } from './styles';

const Nav: React.FC = () => {
  return (
    <Div>
      <Link to='/'>
        <h1>Blog website</h1>
      </Link>

      <InsideDiv>
        <Link to='/'>
          <h1>Blogs</h1>
        </Link>
        <Link to='/newBlog'>
          <h1>Create</h1>
        </Link>
      </InsideDiv>
    </Div>
  );
};

export default Nav;
