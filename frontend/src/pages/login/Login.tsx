import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, reset } from '../../app/data/features/authSlice';
import { Link } from 'react-router-dom';
import { AppDispatch } from '../../app/store';

import { LoginContainer, Form } from './loginStyles';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMsg, setErrorMsg] = useState('');

  const { email, password } = formData;

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state.auth
  );

  useEffect(() => {
    if (isError) {
      setErrorMsg(message);
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [user, isSuccess, isError, message, navigate, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prevState) => ({ ...prevState, [e.target.name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <LoginContainer>
      <h1>Log in to your account</h1>
      <Form onSubmit={handleSubmit}>
        <input
          placeholder='Enter your email'
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={handleChange}
        />
        <input
          placeholder='Enter your password'
          type='password'
          name='password'
          id='password'
          value={password}
          onChange={handleChange}
        />
        <button type='submit'>Log in</button>
      </Form>

      {errorMsg && (
        <p style={{ color: 'red', textAlign: 'center' }}>{errorMsg}</p>
      )}

      <p>
        Don't have an account?{' '}
        <Link to='/register'>
          <b>Register here</b>
        </Link>
      </p>
    </LoginContainer>
  );
};

export default Login;
