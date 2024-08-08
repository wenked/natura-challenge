import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 6rem;
  border-radius: 5rem;
  padding: 0.6rem;
  background-color: #f0f0f0;

  & button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
