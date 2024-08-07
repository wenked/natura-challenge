import { useProductsContext } from 'contexts/Products.context';
import { Container, ProductsContainer } from './Prodcuts.styles';

export function Products() {
  const { productsData, isLoadingProducts } = useProductsContext();

  return (
    <Container>
      {isLoadingProducts ? (
        <p>Carregando...</p>
      ) : (
        <ProductsContainer>
          {productsData?.data.map(product => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </ProductsContainer>
      )}
    </Container>
  );
}
