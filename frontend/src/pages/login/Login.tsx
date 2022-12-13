import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { LoginContainer, Form } from './loginStyles';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prevState) => ({ ...prevState, [e.target.name]: value }));
  };

  return (
    <LoginContainer>
      <h1>Log in to your account</h1>
      <Form>
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
