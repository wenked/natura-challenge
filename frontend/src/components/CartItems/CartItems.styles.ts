import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45rem;
  border: 1px solid #f0f0f0;
  border-radius: 2rem;
  padding: 2rem;
  min-height: 30rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
