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

  /* & div { */
  /* height: 12rem;
    padding: 1rem;
    font-size: 1.6rem;
    font-family: system-ui;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #bebebe;

    &::placeholder {
      color: #bebebe;
    }
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
