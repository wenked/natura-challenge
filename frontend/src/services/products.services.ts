import { IGetProducts, IGetProductsResponse } from 'types/products.types';
import api from './api';

export async function getProducts({
  page,
  limit,
  name,
  categoryId,
}: IGetProducts) {
  const { data } = await api.get<IGetProductsResponse>('/products', {
    params: {
      page,
      limit,
      name,
      categoryId,
    },
  });

  return data;
}
