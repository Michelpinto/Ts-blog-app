import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { InsideDiv, Div } from './styles';
import { IoLogOutOutline } from 'react-icons/io5';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../app/data/authFeatures/authSlice';
import { AppDispatch } from '../../app/store';

const Nav: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { user } = useSelector((state: any) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/login');
  };

  return (
    <Div>
      <Link to='/'>{user ? <h1>{user.name}'s blog</h1> : <h1>Blog</h1>}</Link>

      <InsideDiv>
        <Link to='/'>
          <h1>Blogs</h1>
        </Link>
        <Link to='/newBlog'>
          <h1>Create</h1>
        </Link>

        <span onClick={handleLogout}>
          Logout
          <IoLogOutOutline />
        </span>
      </InsideDiv>
    </Div>
  );
};

export default Nav;
