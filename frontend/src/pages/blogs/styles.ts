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
  border: solid 1px #bebebe;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  cursor: pointer;

  & p {
    font-size: 1.6rem;
    color: #bebebe;
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
