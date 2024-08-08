import styled from 'styled-components';
import { ButtonProps } from './Button.component';

export const Container = styled.div`
  width: 18rem;
  display: flex;
`;

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ variant }) =>
    variant === 'primary' ? '#f85e25' : 'transparent'};
  width: 100%;
  color: ${({ variant }) => (variant === 'primary' ? '#fff' : '#f85e25')};
  border: ${({ variant }) =>
    variant === 'primary' ? 'none' : '1px solid #f85e25'};
  padding: 1rem 2rem;
  border-radius: 10rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e0e0e0;
  }

  &:disabled {
    background-color: #e0e0e0;
    color: #b0b0b0;
    cursor: not-allowed;
  }
`;
