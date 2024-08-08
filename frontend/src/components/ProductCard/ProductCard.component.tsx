import { Button } from 'components/Button/Button.component';
import { Ratings } from 'components/Ratings/Ratings.component';
import { useCartContext } from 'contexts/Cart.context';
import { IProduct } from 'types/products.types';
import { formatPrice } from 'utils/formatPrice';
import {
  Container,
  Discount,
  Image,
  NewPrice,
  OldPrice,
  PriceContainer,
} from './ProductCard.styles';

interface ProductCardProps {
  product: IProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCartContext();
  return (
    <Container>
      <Image src={product.images[0].url} alt={product.name} />
      <h3>{product.name}</h3>
      <Ratings rating={product.rating} />
      <PriceContainer>
        {product.discount && product.oldPrice ? (
          <OldPrice>{product.oldPrice}</OldPrice>
        ) : null}
        <NewPrice>
          {product.discount ? (
            <>
              {product.formatedPrice}
              <Discount> -{product.discount}%</Discount>
            </>
          ) : (
            formatPrice(product.price / 100)
          )}
        </NewPrice>
      </PriceContainer>

      <Button
        style={{ marginTop: '1rem' }}
        variant="primary"
        onClick={() => addToCart(product)}
      >
        Adicionar ao carrinho
      </Button>
    </Container>
  );
}
