import { IconButton } from 'components/IconButton/IconButton.component';
import Input from 'components/Input/Input.component';
import { CiSearch } from 'react-icons/ci';
import { FaRegUserCircle } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import {
  ButtonsContainer,
  Container,
  InfoContainer,
  StyledForm,
} from './MobileHeaderContainer.styles';

export function MobileHeaderContainer() {
  return (
    <Container>
      <InfoContainer>
        <h2>Cosmético&Co</h2>
        <ButtonsContainer>
          <IconButton
            icon={
              <FiShoppingCart
                size={22}
                onClick={() => {
                  console.log('cart clicked');
                }}
              />
            }
          />
          <IconButton
            icon={
              <FaRegUserCircle
                size={22}
                onClick={() => {
                  console.log('cart clicked');
                }}
              />
            }
          />
        </ButtonsContainer>
      </InfoContainer>
      <StyledForm>
        <Input
          type="text"
          placeholder="O que está buscando hoje?"
          leftIcon={<IconButton type="submit" icon={<CiSearch size={18} />} />}
        />
      </StyledForm>
    </Container>
  );
}
