import { Container, StyledButton } from './Button.styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  variant: 'primary' | 'secondary';
  isLoading?: boolean;
  customContainerStyle?: React.CSSProperties;
}

export function Button({
  children,
  onClick,
  size,
  variant,
  isLoading,
  customContainerStyle,
  ...restProps
}: ButtonProps) {
  return (
    <Container style={customContainerStyle}>
      <StyledButton
        onClick={onClick}
        size={size}
        variant={variant}
        disabled={isLoading || restProps.disabled}
        {...restProps}
      >
        {isLoading ? 'Carregando...' : children}
      </StyledButton>
    </Container>
  );
}
