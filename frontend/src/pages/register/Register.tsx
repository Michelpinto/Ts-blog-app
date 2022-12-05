import React from 'react';

import { RegisterContainer, Form } from './registerStyles';

const Register: React.FC = () => {
  return (
    <RegisterContainer>
      <h1>Create an account</h1>
      <Form>
        <label htmlFor='name'>Name</label>
        <input type='name' name='name' id='name' />
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' />
        <button type='submit'>Create</button>
      </Form>
    </RegisterContainer>
  );
};

export default Register;
