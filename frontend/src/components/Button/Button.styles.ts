import styled from 'styled-components';
import { ButtonProps } from './Button.component';

export const Container = styled.div`
  width: 18rem;
  display: flex;
`;

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return '#f85e25';
      case 'tertiary':
        return '#000000';
      case 'secondary':
        return 'transparent';
      default:
        return '#fff';
    }
  }};
  width: 100%;
  color: ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return '#fff';
      case 'tertiary':
        return '#fff';
      case 'secondary':
        return '#f85e25';
      default:
        return '#fff';
    }
  }};
  border: ${({ variant }) =>
    variant === 'primary' || variant === 'tertiary'
      ? 'none'
      : '1px solid #f85e25'};
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
