import { useProducts } from 'hooks/useProducts';
import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { IGetProducts, IGetProductsResponse } from 'types/products.types';

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsContextProps {
  productsData: IGetProductsResponse;
  isLoadingProducts: boolean;
  filterProducts: ({
    page,
    limit,
    searchParam,
    categoryId,
  }: IGetProducts) => void;
}

const ProductsContext = createContext<ProductsContextProps | undefined>(
  undefined,
);

export function ProductsContextProvider({ children }: ProductsProviderProps) {
  const [filters, setFilters] = useState<IGetProducts>({
    page: 1,
    limit: 12,
    searchParam: undefined,
    categoryId: undefined,
  });

  const { data: productsData, isFetching: isLoadingProducts } = useProducts({
    page: filters?.page,
    limit: filters?.limit,
    searchParam: filters?.searchParam,
    categoryId: filters?.categoryId,
    attributes: ['id', 'name', 'price', 'rating', 'discount', 'description'],
  });

  console.log({ filters, productsData, isLoadingProducts });

  function filterProducts({
    page = 1,
    limit = 12,
    searchParam,
    categoryId,
  }: IGetProducts) {
    setFilters(prevState => ({
      ...prevState,
      page: page || prevState.page,
      limit: limit || prevState.limit,
      searchParam: searchParam || prevState.searchParam,
      categoryId: categoryId || prevState.categoryId,
    }));
  }

  const context = useMemo(() => {
    return {
      productsData,
      isLoadingProducts,
      filterProducts,
    };
  }, [productsData, isLoadingProducts, filterProducts]);

  return (
    <ProductsContext.Provider value={context}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProductsContext() {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error(
      'useProductsContext must be used within a ProductsContextProvider',
    );
  }

  return context;
}
