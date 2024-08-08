import { Button } from 'components/Button/Button.component';
import { ProductCard } from 'components/ProductCard/ProductCard.component';
import { useProductsContext } from 'contexts/Products.context';
import { Container, ProductsContainer } from './Prodcuts.styles';

export function Products() {
  const {
    productsData,
    status,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useProductsContext();

  return (
    <Container>
      {status === 'pending' ? (
        <p>Carregando...</p>
      ) : (
        <div>
          {productsData?.pages.map(productResponse => {
            return (
              <ProductsContainer key={productResponse.currentPage}>
                {productResponse?.data.map(product => {
                  return <ProductCard key={product.id} product={product} />;
                })}
              </ProductsContainer>
            );
          })}
        </div>
      )}
      <Button
        variant="secondary"
        isLoading={isFetchingNextPage}
        disabled={!hasNextPage || isFetchingNextPage}
        onClick={fetchNextPage}
        customContainerStyle={{ marginTop: '2rem' }}
      >
        Ver mais
      </Button>
    </Container>
  );
}
