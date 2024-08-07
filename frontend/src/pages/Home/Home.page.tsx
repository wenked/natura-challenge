import { Banner } from 'components/Banner/Banner.component';
import { Products } from 'components/Products/Products.component';
import { Container, HomeTextContainer } from './Home.styles';

export default function Home() {
  return (
    <Container>
      <Banner />
      <HomeTextContainer>
        <h2>descubra as fragrâncias que combinam com você</h2>
      </HomeTextContainer>
      <Products />
    </Container>
  );
}
