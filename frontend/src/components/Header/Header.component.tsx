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
import {
  ButtonsContainer,
  Container,
  StyledForm,
  StyledHeader,
} from './Header.styles';

export function Header() {
  const [searchParam, setSearchParam] = useState('');

  const { data: categories, isFetching } = useCategories();

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
        <h2>Cosmético&Co</h2>

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
