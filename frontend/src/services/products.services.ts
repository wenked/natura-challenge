import { IGetProducts, IGetProductsResponse } from 'types/products.types';
import api from './api';

export async function getProducts({
  page,
  limit,
  searchParam,
  categoryId,
  attributes,
}: IGetProducts) {
  const { data } = await api.get<IGetProductsResponse>('/products', {
    params: {
      page,
      limit,
      searchParam,
      categoryId,
      attributes,
    },
  });

  return data;
}
