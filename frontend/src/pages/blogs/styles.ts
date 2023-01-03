import styled from 'styled-components';
export const Div = styled.div`
  & h1 {
    font-weight: 400;
  }
`;

export const BlogsDiv = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const BlogDiv = styled.div`
  height: 18rem;
  border-top: solid 0.1px #bebebe;
  padding: 1.5rem 0 1.5rem 0;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  cursor: pointer;

  & h1 {
    font-weight: 600;
  }

  & p {
    font-size: 1.4rem;
    color: #bebebe;
    font-weight: 300;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  & div {
    display: flex;
    justify-content: space-between;
  }
`;

export const SingleBlogDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  & h1 {
    font-weight: 400;
  }

  & p {
    font-size: 1.6rem;
  }
`;

export const StateDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.5rem;
`;

export const DateText = styled.p`
  margin-top: 2rem;
`;

export const Div2 = styled.div`
  display: flex;
  justify-content: space-between;

  & span {
    font-size: 2rem;
    display: flex;
    gap: 2rem;

    & svg {
      cursor: pointer;
    }

    & svg:nth-child(2) {
      color: red;
    }
  }
`;
