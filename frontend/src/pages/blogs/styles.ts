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
    font-size: 1.3rem;
    color: #bebebe;
    font-weight: 300;
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
