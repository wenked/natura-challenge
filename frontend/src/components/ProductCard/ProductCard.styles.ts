import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 30rem;
  cursor: pointer;
  width: 276px;
  height: auto;
  box-sizing: border-box;
  padding: 1rem;

  & h3 {
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.51px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  min-height: 3rem;
  flex-grow: 1;
`;

export const OldPrice = styled.span`
  font-size: 0.8rem;
  color: #b0b0b0;
  text-decoration: line-through;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const NewPrice = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Discount = styled.div`
  font-size: 0.75rem;
  line-height: 1rem;
  border-radius: 9999px;
  padding: 0.125rem 0.5rem;
  width: fit-content;
  background-color: rgb(231 70 39 / 1) !important;
  color: white;
  white-space: nowrap;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  max-height: 20rem;
`;
