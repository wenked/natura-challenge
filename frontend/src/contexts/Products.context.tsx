import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import { useProducts } from 'hooks/useProducts';
import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { IGetProducts, IGetProductsResponse } from 'types/products.types';

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsContextProps {
  productsData: InfiniteData<IGetProductsResponse, unknown> | undefined;
  isLoadingProducts: boolean;
  filterProducts: ({
    page,
    limit,
    searchParam,
    categoryId,
  }: IGetProducts) => void;
  status: 'error' | 'success' | 'pending';
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<
    InfiniteQueryObserverResult<
      InfiniteData<IGetProductsResponse, unknown>,
      Error
    >
  >;
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

  const {
    data: productsData,
    isFetching: isLoadingProducts,
    status,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useProducts({
    page: filters?.page,
    limit: filters?.limit,
    searchParam: filters?.searchParam,
    categoryId: filters?.categoryId,
    attributes: ['id', 'name', 'price', 'rating', 'discount', 'description'],
  });

  function filterProducts({
    page = 1,
    limit = 12,
    searchParam,
    categoryId,
  }: IGetProducts) {
    setFilters(prevState => ({
      ...prevState,
      page,
      limit,
      searchParam: searchParam === '' ? undefined : searchParam,
      categoryId: categoryId,
    }));
  }

  const context = useMemo(() => {
    return {
      productsData,
      isLoadingProducts,
      filterProducts,
      status,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage,
    };
  }, [
    productsData,
    isLoadingProducts,
    filterProducts,
    status,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  ]);

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
