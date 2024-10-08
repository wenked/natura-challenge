import { useInfiniteQuery } from '@tanstack/react-query';
import { getProducts } from 'services/products.services';
import { IGetProducts, IGetProductsResponse } from 'types/products.types';

export function useProducts({
  limit = 12,
  searchParam,
  categoryId,
  attributes,
}: IGetProducts) {
  return useInfiniteQuery<IGetProductsResponse, Error>({
    queryKey: ['products', limit, searchParam, categoryId],
    queryFn: ({ pageParam }) =>
      getProducts({
        page: pageParam as number,
        limit,
        searchParam,
        categoryId,
        attributes,
      }),
    initialPageParam: 1,
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage: IGetProductsResponse) => {
      if (lastPage.hasNextPage) {
        return lastPage.nextPage;
      }

      return undefined;
    },
  });
}
