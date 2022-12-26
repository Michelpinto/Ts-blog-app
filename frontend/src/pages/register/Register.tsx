import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register, reset } from '../../app/data/features/authSlice';
import { Link } from 'react-router-dom';

import { RegisterContainer, Form } from './registerStyles';
import { AppDispatch } from '../../app/store';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state.auth
  );

  const { name, email, password, password2 } = formData;

  useEffect(() => {
    if (isError) {
      setErrorMsg(message);
    }

    if (isSuccess || user) {
      navigate('/');
      dispatch(reset());
    }

    // dispatch(reset());
  }, [user, isSuccess, isError, message, navigate, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prevState) => ({ ...prevState, [e.target.name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== password2) {
      setErrorMsg('Passwords do not match');
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <RegisterContainer>
      <h1>Create an account</h1>
      <Form onSubmit={handleSubmit}>
        <input
          placeholder='Enter your name'
          onChange={handleChange}
          value={name}
          type='text'
          name='name'
          id='name'
        />
        <input
          placeholder='Enter your email'
          onChange={handleChange}
          value={email}
          type='email'
          name='email'
          id='email'
        />
        <input
          placeholder='Enter your password'
          onChange={handleChange}
          value={password}
          type='password'
          name='password'
          id='password'
        />
        <input
          placeholder='Confirm password'
          onChange={handleChange}
          value={password2}
          type='password'
          name='password2'
          id='password2'
        />
        <button type='submit'>Create</button>
      </Form>

      <p style={{ color: 'red', textAlign: 'center' }}>{errorMsg}</p>

      <p>
        Already have an account?{' '}
        <Link to='/login'>
          <b>Log in</b>
        </Link>
      </p>
    </RegisterContainer>
  );
};

export default Register;
