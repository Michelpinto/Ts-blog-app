import styled from 'styled-components';

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 50rem;

  & h1 {
    margin: 2rem 0;
  }

  & p {
    margin-top: 2rem;
    font-size: 1.5rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & label {
    font-size: 1.6rem;
  }

  & input {
    padding: 1rem;
    font-size: 1.5rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
  }

  & button {
    padding: 1rem;
    font-size: 1.5rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #1d1d1d;
    color: #fff;
    cursor: pointer;
  }
`;
