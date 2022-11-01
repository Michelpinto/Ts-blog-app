import styled from 'styled-components';

export const Div = styled.div`
  & h1 {
    margin-bottom: 3rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  & input {
    height: 4rem;
    padding: 1rem;
    font-size: 1.6rem;
    border-radius: 5px;
    border: 1px solid #bebebe;

    &::placeholder {
      color: #bebebe;
    }
  }

  /* .app .ql-container {
  border-bottom-left-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  background: #fefcfc;
} */

  /* Snow Theme */
  /* .app .ql-snow.ql-toolbar {
  display: block;
  background: #eaecec;
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
} */

  & button {
    height: 4rem;
    background-color: #1d1d1d;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 1.6rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;
