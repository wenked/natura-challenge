import { useCartContext } from 'contexts/Cart.context';
import { Container, Divider, TextContainer } from './CartSummary.styles';

export function CartSummary() {
  const { cart } = useCartContext();

  return (
    <Container>
      <h2>Sumário</h2>
      <TextContainer>
        <h3>Subtotal</h3>
        <span>{cart.length} items</span>
      </TextContainer>
      <TextContainer $isDiscount>
        <h3>Desconto</h3>
        <span>{cart.length} items</span>
      </TextContainer>
      <TextContainer>
        <h3>Frete</h3>
        <span>{cart.length} items</span>
      </TextContainer>
      <Divider />
      <TextContainer $isTotal>
        <h3>Total</h3>
        <span>{cart.length} items</span>
      </TextContainer>
    </Container>
  );
}
