import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';

import {
  Container,
  IconWrapper,
  InputWrapper,
  StyledInput,
} from './Input.styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  type:
    | 'text'
    | 'email'
    | 'password'
    | 'number'
    | 'time'
    | 'date'
    | 'datetime-local';
  label?: string | boolean;
  input_name?: string;
  fullWidth?: boolean;
  errorMessage?: string;
  containerCustomStyle?: React.CSSProperties;
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      leftIcon,
      rightIcon,
      type,
      label,
      input_name,
      fullWidth,
      containerCustomStyle,
      ...inputProps
    }: Props,
    ref,
  ) => {
    return (
      <Container
        style={containerCustomStyle}
        className={fullWidth ? 'full-width' : undefined}
      >
        <InputWrapper>
          {leftIcon && <IconWrapper>{leftIcon}</IconWrapper>}
          <StyledInput
            id={input_name}
            name={input_name}
            type={type}
            {...inputProps}
            ref={ref}
          />

          {rightIcon && <IconWrapper>{rightIcon}</IconWrapper>}
        </InputWrapper>
      </Container>
    );
  },
);

Input.displayName = 'Input';

export default Input;
