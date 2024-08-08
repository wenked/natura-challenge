import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-left: 96px;
  padding-right: 96px;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
