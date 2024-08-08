import { CartItem } from 'components/CartItem/CartItem.component';
import { useCartContext } from 'contexts/Cart.context';
import { Container } from './CartItems.styles';

export function CartItems() {
  const { cart } = useCartContext();

  return (
    <Container>
      {cart.map((item, index) => (
        <CartItem
          key={item.product.id}
          cartProduct={item}
          index={index}
          cartLength={cart.length}
        />
      ))}
    </Container>
  );
}
