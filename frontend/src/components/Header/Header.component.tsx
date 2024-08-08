import { Dropdown } from 'components/Dropdown/Dropdown.component';
import { IconButton } from 'components/IconButton/IconButton.component';
import Input from 'components/Input/Input.component';
import { MobileHeaderContainer } from 'components/MobileHeaderContainer/MobileHeaderContainer.component';
import { useProductsContext } from 'contexts/Products.context';
import { useCategories } from 'hooks/useCategories';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaRegUserCircle } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import {
  ButtonsContainer,
  Container,
  LogoContainer,
  StyledForm,
  StyledHeader,
} from './Header.styles';

export function Header() {
  const navigate = useNavigate();
  const [searchParam, setSearchParam] = useState('');

  const { data: categories, isFetching } = useCategories();

  const { filterProducts } = useProductsContext();

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    filterProducts({ searchParam });
  }

  function handleNavigateToHome() {
    navigate('/');
  }

  function handleNavigateToCart() {
    navigate('/cart');
  }

  return (
    <StyledHeader>
      <MobileHeaderContainer
        searchParam={searchParam}
        setSearchParam={setSearchParam}
        handleSearch={handleSearch}
        handleNavigateToHome={handleNavigateToHome}
        handleNavigateToCart={handleNavigateToCart}
      />
      <Container>
        <LogoContainer onClick={() => handleNavigateToHome()}>
          <h1>Cosmético&Co</h1>
        </LogoContainer>

        {isFetching ? (
          <p>Carregando...</p>
        ) : (
          <Dropdown
            onSelect={(value: string) => filterProducts({ categoryId: value })}
            options={categories.map(category => ({
              value: category.id,
              label: category.name,
            }))}
            placeholder="Categorias"
          />
        )}

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
                onClick={() => handleNavigateToCart()}
              />
            }
          />
          <IconButton icon={<FaRegUserCircle size={22} onClick={() => {}} />} />
        </ButtonsContainer>
      </Container>
    </StyledHeader>
  );
}
