import React from 'react';
import { Link } from 'react-router-dom';

import { LoginContainer, Form } from './loginStyles';

const Login: React.FC = () => {
  return (
    <LoginContainer>
      <h1>Log in to your account</h1>
      <Form>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' />
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
