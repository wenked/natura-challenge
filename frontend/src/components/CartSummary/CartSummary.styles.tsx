import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
  border: 1px solid #f0f0f0;
  border-radius: 2rem;
  padding: 2rem;
  height: 35rem;

  h2 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 2rem;
    font-weight: 700;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const TextContainer = styled.div<{
  $isDiscount?: boolean;
  $isTotal?: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1.5rem;

  & h3 {
    font-size: 1.5rem;
    font-weight: 400;
    color: ${({ $isTotal }) => ($isTotal ? '#6e6e6e' : '#9d9d9d')};
  }

  & span {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ $isDiscount }) => ($isDiscount ? '#ff0000' : 'inherit')};
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-top: 1px solid #e0e0e0;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;
