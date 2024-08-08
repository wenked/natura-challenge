import { IconButton } from 'components/IconButton/IconButton.component';
import Input from 'components/Input/Input.component';
import { CiSearch } from 'react-icons/ci';
import { FaRegUserCircle } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import {
  ButtonsContainer,
  Container,
  InfoContainer,
  LogoContainer,
  StyledForm,
} from './MobileHeaderContainer.styles';

interface MobileHeaderContainerProps {
  searchParam: string;
  setSearchParam: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: (event: React.FormEvent<HTMLFormElement>) => void;
  handleNavigateToHome: () => void;
  handleNavigateToCart: () => void;
}

export function MobileHeaderContainer({
  searchParam,
  setSearchParam,
  handleSearch,
  handleNavigateToCart,
  handleNavigateToHome,
}: MobileHeaderContainerProps) {
  return (
    <Container>
      <InfoContainer>
        <LogoContainer onClick={() => handleNavigateToHome()}>
          <h1>Cosmético&Co</h1>
        </LogoContainer>

        <ButtonsContainer>
          <IconButton
            icon={
              <FiShoppingCart
                size={22}
                onClick={() => handleNavigateToCart()}
              />
            }
          />
          <IconButton icon={<FaRegUserCircle size={22} onClick={() => {}} />} />
        </ButtonsContainer>
      </InfoContainer>
      <StyledForm onSubmit={handleSearch}>
        <Input
          type="text"
          value={searchParam}
          onChange={event => setSearchParam(event.target.value)}
          placeholder="O que está buscando hoje?"
          leftIcon={<IconButton type="submit" icon={<CiSearch size={18} />} />}
        />
      </StyledForm>
    </Container>
  );
}
