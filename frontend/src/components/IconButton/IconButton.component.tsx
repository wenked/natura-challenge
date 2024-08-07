import { CSSProperties, ReactNode } from 'react';
import { Container } from './IconButton.styles';

interface ButtonIconProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  containerStyle?: CSSProperties;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export function IconButton({ icon, containerStyle, ...rest }: ButtonIconProps) {
  return (
    <Container style={containerStyle} {...rest}>
      {icon}
    </Container>
  );
}
