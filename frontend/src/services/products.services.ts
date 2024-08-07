import api from './api';

interface IGetProducts {
  page: number;
  limit: number;
  name?: string;
  categoryId?: string;
}

export async function getProducts({
  page,
  limit,
  name,
  categoryId,
}: IGetProducts) {
  const { data } = await api.get('/products', {
    params: {
      page,
      limit,
      name,
      categoryId,
    },
  });

  return data;
}
