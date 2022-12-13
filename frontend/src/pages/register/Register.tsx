import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { RegisterContainer, Form } from './registerStyles';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prevState) => ({ ...prevState, [e.target.name]: value }));
  };

  return (
    <RegisterContainer>
      <h1>Create an account</h1>
      <Form>
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
