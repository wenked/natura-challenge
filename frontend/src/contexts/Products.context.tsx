import { useProducts } from 'hooks/useProducts';
import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { IGetProducts, IGetProductsResponse } from 'types/products.types';

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsContextProps {
  productsData: IGetProductsResponse;
  isLoadingProducts: boolean;
  filterProducts: ({ page, limit, name, categoryId }: IGetProducts) => void;
}

const ProductsContext = createContext<ProductsContextProps | undefined>(
  undefined,
);

export function ProductsContextProvider({ children }: ProductsProviderProps) {
  const [name, setName] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);

  const { data: productsData, isLoading: isLoadingProducts } = useProducts({
    page,
    limit,
    name,
    categoryId,
  });

  console.log({ productsData, isLoadingProducts });

  function filterProducts({
    page = 1,
    limit = 12,
    name,
    categoryId,
  }: IGetProducts) {
    setPage(page);
    setLimit(limit);
    setName(name || '');
    setCategoryId(categoryId || '');
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
