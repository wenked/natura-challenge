import { IconButton } from 'components/IconButton/IconButton.component';
import Input from 'components/Input/Input.component';
import { MobileHeaderContainer } from 'components/MobileHeaderContainer/MobileHeaderContainer.component';
import { CiSearch } from 'react-icons/ci';
import { FaRegUserCircle } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import {
  ButtonsContainer,
  Container,
  StyledForm,
  StyledHeader,
} from './Header.styles';

export function Header() {
  return (
    <StyledHeader>
      <MobileHeaderContainer />
      <Container>
        <StyledForm>
          <Input
            type="text"
            placeholder="O que está buscando hoje?"
            leftIcon={
              <IconButton type="submit" icon={<CiSearch size={18} />} />
            }
          />
        </StyledForm>
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
      </Container>
    </StyledHeader>
  );
}
