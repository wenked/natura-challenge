import { CartItemQuantity } from 'components/CartItemQuantity/CartItemQuantity.component';
import { IconButton } from 'components/IconButton/IconButton.component';
import { useCartContext } from 'contexts/Cart.context';
import { FaTrashAlt } from 'react-icons/fa';
import { ICartProduct } from 'types/cart.types';
import {
  CartItemContainer,
  Container,
  Divider,
  Image,
  InfoContainer,
  PriceContainer,
  TitleContainer,
} from './CartItem.styles';

interface CartItemProps {
  cartProduct: ICartProduct;
  index: number;
  cartLength: number;
}

export function CartItem({ cartProduct, index, cartLength }: CartItemProps) {
  const { removeFromCart } = useCartContext();

  return (
    <Container>
      <CartItemContainer>
        <Image
          src={cartProduct.product.images[0].url}
          alt={cartProduct.product.name}
        />
        <InfoContainer>
          <TitleContainer>
            <h3>{cartProduct.product.name}</h3>
            <IconButton
              icon={<FaTrashAlt color="red" />}
              onClick={() => removeFromCart(cartProduct.product.id)}
            />
          </TitleContainer>
          <PriceContainer>
            <p>{cartProduct.product.formatedPrice}</p>
            <CartItemQuantity cartProduct={cartProduct} />
          </PriceContainer>
        </InfoContainer>
      </CartItemContainer>
      {index !== cartLength - 1 && <Divider />}{' '}
    </Container>
  );
}
