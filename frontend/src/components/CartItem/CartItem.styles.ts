import styled from 'styled-components';

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  padding: 0.5rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  width: 100%;

  & h3 {
    font-size: 1rem;
    font-weight: 700;
    color: #333;
    text-overflow: ellipsis;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  width: 100%;

  & p {
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
  }
`;

export const Image = styled.img`
  height: auto;
  object-fit: contain;
  max-height: 8rem;
  border-radius: 0.5rem;
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-top: 1px solid #e0e0e0;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
