import styled from 'styled-components';

export const Container = styled.button`
  position: relative;
  padding: 0.2rem;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  transition: background-color 0.2s ease-out;
  cursor: pointer;

  &:hover {
    background-color: #00000010;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const CartBadge = styled.div`
  position: absolute;
  top: -7px;
  right: 12px;
  border-radius: 50%;
  background-color: #f87171;
  height: 1.5rem;
  width: 1.5rem;

  & span {
    font-size: 0.75rem;
    color: #ffffff;
    margin: auto;
  }
`;
