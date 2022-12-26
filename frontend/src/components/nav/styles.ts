import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 5rem;

  & h1 {
    cursor: pointer;
  }
`;

export const InsideDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  & span {
    cursor: pointer;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
