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
