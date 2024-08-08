import { Button } from 'components/Button/Button.component';
import { CupomInput } from 'components/CupomInput/CupomInput.component';
import { useCartContext } from 'contexts/Cart.context';
import { useMemo } from 'react';
import { formatPrice } from 'utils/formatPrice';
import { Container, Divider, TextContainer } from './CartSummary.styles';

export function CartSummary() {
  const { cart } = useCartContext();
  const cartTotals = useMemo(() => {
    const totals = cart.reduce(
      (acc, item) => {
        if (!item?.product?.price) {
          return {
            subtotal: acc.subtotal,
            discount: acc.discount,
            total: acc.total,
          };
        }

        let price: number;

        if (item.product.discountValue) {
          price =
            (item.product.price / 100) * item.quantity +
            item.product.discountValue;
        } else {
          price = (item.product.price / 100) * item.quantity;
        }

        return {
          subtotal: acc.subtotal + price,
          discount: item.product.discountValue
            ? acc.discount + item.product.discountValue
            : acc.discount,
          total: acc.total + price,
        };
      },
      { subtotal: 0, discount: 0, total: 0 },
    );

    const totalDiscountPercentage = (totals.discount / totals.subtotal) * 100;
    return {
      ...totals,
      totalDiscountPercentage: totalDiscountPercentage.toFixed(2),
    };
  }, [cart]);

  return (
    <Container>
      <h2>Sumário</h2>
      <TextContainer>
        <h3>Subtotal</h3>
        <span>{formatPrice(cartTotals.subtotal)}</span>
      </TextContainer>
      <TextContainer $isDiscount>
        <h3>Desconto - ({cartTotals.totalDiscountPercentage}%)</h3>
        <span> - {formatPrice(cartTotals.discount)}</span>
      </TextContainer>
      <TextContainer>
        <h3>Frete</h3>
        <span>R$ 15,00</span>
      </TextContainer>
      <Divider />
      <TextContainer $isTotal>
        <h3>Total</h3>
        <span>{formatPrice(cartTotals.total + 15)}</span>
      </TextContainer>
      <CupomInput />

      <Button
        customContainerStyle={{
          width: '100%',
          marginTop: '1.5rem',
        }}
        variant="primary"
      >
        Finalizar compra
      </Button>
    </Container>
  );
}
