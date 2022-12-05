import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin: auto;
  max-width: 50rem;

  & h1 {
    margin: 2rem 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
