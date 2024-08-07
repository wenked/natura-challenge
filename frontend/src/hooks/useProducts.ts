import { useQuery } from '@tanstack/react-query';
import { getProducts } from 'services/products.services';
import { IGetProducts } from 'types/products.types';

export function useProducts({
  page = 1,
  limit = 12,
  name,
  categoryId,
}: IGetProducts) {
  return useQuery({
    queryKey: ['products', { page, limit, name, categoryId }],
    queryFn: () => getProducts({ page, limit, name, categoryId }),
    initialData: {
      data: [],
      total: 0,
      pages: 1,
    },
  });
}
