import { IconButton } from 'components/IconButton/IconButton.component';
import Input from 'components/Input/Input.component';
import { MobileHeaderContainer } from 'components/MobileHeaderContainer/MobileHeaderContainer.component';
import { useProductsContext } from 'contexts/Products.context';
import { useState } from 'react';
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
  const [searchParam, setSearchParam] = useState('');

  const { filterProducts } = useProductsContext();

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('search', searchParam);
    filterProducts({ name: searchParam });
  }

  return (
    <StyledHeader>
      <MobileHeaderContainer
        searchParam={searchParam}
        setSearchParam={setSearchParam}
        handleSearch={handleSearch}
      />
      <Container>
        <StyledForm onSubmit={handleSearch}>
          <Input
            type="text"
            placeholder="O que está buscando hoje?"
            leftIcon={
              <IconButton type="submit" icon={<CiSearch size={18} />} />
            }
            value={searchParam}
            onChange={event => setSearchParam(event.target.value)}
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
