import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.50rem;
`;


export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 2rem;
  padding: 1rem;;
  color: #605E70;
  width: 100%;

  background-color: #f2f3f4;
  &:focus-within {
    border: 1px solid grey;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.50rem;;
`;

export const StyledInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  color: #605E70;
  width: 100%;

  &:disabled {
    cursor: not-allowed;
  }

  &::placeholder {
    color: #888599;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`;
