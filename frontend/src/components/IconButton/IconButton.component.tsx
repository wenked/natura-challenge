import { CSSProperties, ReactNode } from 'react';
import { CartBadge, Container } from './IconButton.styles';

interface ButtonIconProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  containerStyle?: CSSProperties;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  badge?: number;
}

export function IconButton({
  icon,
  badge = 0,
  containerStyle,
  ...rest
}: ButtonIconProps) {
  return (
    <Container style={containerStyle} {...rest}>
      {badge > 0 ? (
        <CartBadge>
          <span>{badge > 9 ? '+9' : badge}</span>
        </CartBadge>
      ) : null}
      {icon}
    </Container>
  );
}
