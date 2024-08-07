import { useQuery } from '@tanstack/react-query';
import { getProducts } from 'services/products.services';
import { IGetProducts } from 'types/products.types';

export function useProducts({
  page = 1,
  limit = 12,
  searchParam,
  categoryId,
  attributes,
}: IGetProducts) {
  console.log({ searchParam, categoryId, attributes });
  return useQuery({
    queryKey: ['products', page, limit, searchParam, categoryId],
    queryFn: () =>
      getProducts({ page, limit, searchParam, categoryId, attributes }),
    initialData: {
      data: [],
      total: 0,
      pages: 1,
    },
  });
}
