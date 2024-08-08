import { CartItems } from 'components/CartItems/CartItems.component';
import { CartSummary } from 'components/CartSummary/CartSummary.component';
import { useNavigate } from 'react-router-dom';
import {
  BreadCrumbs,
  CartInfoContainer,
  Container,
  Divider,
} from './Cart.styles';

export function Cart() {
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <Divider />
      <h1>Seu carrinho</h1>
      <BreadCrumbs>
        <span onClick={handleNavigateToHome}>Inicio</span>
        <span>{`>`}</span>
        <span>Carrinho</span>
      </BreadCrumbs>
      <CartInfoContainer>
        <CartItems />
        <CartSummary />
      </CartInfoContainer>
    </Container>
  );
}
