import { useCartContext } from 'contexts/Cart.context';
import { ICartProduct } from 'types/cart.types';
import { Container } from './CartItemQuantitiy.styles';

interface CartItemQuantityProps {
  cartProduct: ICartProduct;
}

export function CartItemQuantity({ cartProduct }: CartItemQuantityProps) {
  const { removeOneFromCart, addToCart } = useCartContext();

  return (
    <Container>
      <button onClick={() => removeOneFromCart(cartProduct.product.id)}>
        -
      </button>
      <span>{cartProduct.quantity}</span>
      <button onClick={() => addToCart(cartProduct.product)}>+</button>
    </Container>
  );
}
